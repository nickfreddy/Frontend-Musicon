import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import TrackInfo from './TrackInfo/TrackInfo';
import { Container } from '@material-ui/core';
import TrackControl from './TrackControl/TrackControl';
import Audio from './Audio';
import TrackAction from './TrackAction/TrackAction';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { disablePlayerAction, enablePlayerAction, setCurrentPlayingAction } from '../../redux/actions/currentPlayingAction';
import { getSongLyricAction } from '../../redux/actions/songLyricAction';
import LyricViewer from '../lyricViewer/LyricViewer';
import { getRandomRangedNumber } from '../../tools/numberManipulation';
// import SpotifyPlayer from 'react-spotify-web-playback';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    // height: '136px',//'136px',
    background: '#252836',
    left: 0,
    right: 0,

    bottom: 0,
    zIndex: theme.zIndex.drawer + 1,
    position: 'fixed',
    borderTop: '1px solid #3C4156',
  },
  playerContainer: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      columnGap: theme.spacing(2),
      width: "100%"
    },
    [theme.breakpoints.up('md')]: {
      // display: 'grid',
      gridTemplateColumns: '1fr 2fr 1fr',
      columnGap: theme.spacing(2),
      width: "100%"
    }



  }
}))


const Player = ({ currentPlaying, playlistDetail }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const audioRef = useRef(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);
  const songList = playlistDetail.data.songs;
  //const currentPlayingSongIndex = songList.findIndex(song => song._id === currentPlaying.songDetail._id);
  // console.log('CURRENT SONG INDEX',currentPlayingSongIndex)
  const getCurrentPlayingSongIndex = (currentPlayingSongId, songList) => {
    return songList.findIndex(song => song._id === currentPlayingSongId);
  }

  // console.log('ini lama lagunya broh',duration)
  const handleCurrentTimeChange = (newPosition) => {
    audioRef.current.currentTime = newPosition
    // console.log('audionya', newPosition)
  }

  const handlePlayTrack = () => {
    audioRef.current.play();
  };
  const handlePauseTrack = () => {
    audioRef.current.pause();
  };

  const handleVolumeChange = (newVolume) => {
    audioRef.current.volume = newVolume
  }


  useEffect(() => {
    handleVolumeChange(volume);
  }, [volume])

  useEffect(() => {
    if (currentPlaying.isPlaying === true) {
      handlePlayTrack()
    } else {
      handlePauseTrack()
    }
  }, [currentPlaying.isPlaying])

  useEffect(() => {
    if (songList) {
      dispatch(enablePlayerAction())
    } else {
      dispatch(disablePlayerAction())
    }
  }, [dispatch, songList])

  useEffect(() => {
    dispatch(getSongLyricAction(currentPlaying.songDetail._id));
  }, [currentPlaying.songDetail._id, dispatch])

  useEffect(() => {
    if (!songList) return; //if no songList skip
    if (songList.length < 1) return;//if no song in playlist skip
    if (!currentPlaying.songDetail._id) return; //if no playing song
    if (currentTime < (duration - 2)) return; //if running song time is les then its maximum duration so skip
    const currentPlayingSongIndex = getCurrentPlayingSongIndex(currentPlaying.songDetail._id, songList);

    if (currentPlaying.isRepeatOn) { // if repeat mode not activated skip
      if (currentPlayingSongIndex < songList.length - 1) {
        return dispatch(setCurrentPlayingAction(songList[currentPlayingSongIndex + 1]))
      }
      if (currentPlayingSongIndex === songList.length - 1) {
        return dispatch(setCurrentPlayingAction(songList[0]))
      }
    }

    if (currentPlaying.isShuffleOn){
      let nextSongIndex = 0;
      do{
        nextSongIndex = getRandomRangedNumber(0, songList.length);
        if(currentPlayingSongIndex !== nextSongIndex) {
          return dispatch(setCurrentPlayingAction(songList[nextSongIndex]));
        } 
      }while(currentPlayingSongIndex === nextSongIndex)
    }
  }, [currentPlaying.isRepeatOn, currentPlaying.isShuffleOn, currentPlaying.songDetail._id, currentPlaying.songDetail_id, currentTime, dispatch, duration, songList])


  return (
    <div className={classes.root}>
      <Container className={classes.playerContainer}>


        <TrackInfo
          songDetail={currentPlaying}
        />

        <TrackControl
          currentTime={currentTime}
          duration={duration}
          handleCurrentTimeChange={handleCurrentTimeChange}
        />

        <TrackAction
          volume={volume}
          setVolume={setVolume}
        />


        <Audio
          ref={audioRef}
          handleDuration={setDuration}
          handleCurrentTime={setCurrentTime}
          trackData={currentPlaying.songDetail.audio}
          isPlaying={currentPlaying.isPlaying}
        />
      </Container>





      {/* <SpotifyPlayer
        styles={{
          bgColor: '#252836'
        }}
        token="BQBYLmDc3DMbk87sA0Gq47Hu20-KXQUPoXFvAoc5mDXPRbNL22OyXh_547DMM6ZheKdjbyUn_3MmYTRmjhQ"
        uris={["spotify:track:0H4tn2HKN03NXrN4293MBZ"]}
      /> */}
      <LyricViewer />
    </div>
  )
}


const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying,
  playlistDetail: state.playlistDetail
})
export default connect(mapStateToProps)(Player)
