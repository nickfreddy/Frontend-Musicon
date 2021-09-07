import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import TrackInfo from './TrackInfo/TrackInfo';
import { Container } from '@material-ui/core';
import TrackControl from './TrackControl/TrackControl';
import Audio from './Audio';
import TrackAction from './TrackAction/TrackAction';
import { useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { disablePlayerAction, enablePlayerAction, setCurrentPlayingAction, setPlayCurrentPlayingAction } from '../../redux/actions/currentPlayingAction';
import { getSongLyricAction, resetSongLyricAction } from '../../redux/actions/songLyricAction';
import LyricViewer from '../lyricViewer/LyricViewer';
import { getRandomNumberExcept } from '../../tools/numberManipulation';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
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
  const [muted, setMuted] = useState(false);
  const songList = playlistDetail.data.songs;

  const handleCurrentTimeChange = (newPosition) => {
    audioRef.current.currentTime = newPosition
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

  const handleAudioMuted = (isMuted) => {
    audioRef.current.muted = isMuted
  }

  useEffect(() => {
    handleAudioMuted(muted);
  },[muted])

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
    if(currentPlaying.songDetail?._id){
      dispatch(getSongLyricAction(currentPlaying.songDetail._id));
    }
    return () => {
      dispatch(resetSongLyricAction());
    }
  }, [currentPlaying.songDetail._id, dispatch])


  useEffect(() => {
    // if (currentPlaying.isRepeatOn) {
    if (currentTime === duration) {
      // console.log('PLAY NEXT SONG BROH');
      // dispatch(unsetPlayCurrentPlayingAction());
      if (songList) {
        if (currentPlaying.isRepeatOn) {
          setCurrentTime(0);
          if (songList.length !== 0) { //check if songList exist
            const currentSongIndex = songList.findIndex(song => song._id === currentPlaying.songDetail._id);
            if (!currentPlaying.isShuffleOn) {
              if (currentSongIndex < songList.length - 1) {
                dispatch(setCurrentPlayingAction(songList[currentSongIndex + 1]))
              } else {
                dispatch(setCurrentPlayingAction(songList[0]))
              }
            } else {
              const newSongIndex = getRandomNumberExcept(0, songList.length, currentSongIndex);
              console.log('LAGU BARU', newSongIndex)
              dispatch(setCurrentPlayingAction(songList[newSongIndex]));
              dispatch(setPlayCurrentPlayingAction());
            }
          }
        }
      }
    }
    // }
  }, [currentPlaying.isRepeatOn, currentPlaying.isShuffleOn, currentPlaying.songDetail._id, currentTime, dispatch, duration, songList])



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
          muted={muted}
          setMuted={setMuted}
          songId ={currentPlaying.songDetail._id}
          isLiked = {currentPlaying.songDetail.isLiked}
        />


        <Audio
          ref={audioRef}
          handleDuration={setDuration}
          handleCurrentTime={setCurrentTime}
          trackData={currentPlaying.songDetail.audio}
          isPlaying={currentPlaying.isPlaying}
        />
      </Container>

      <LyricViewer />
    </div>
  )
}


const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying,
  playlistDetail: state.playlistDetail
})
export default connect(mapStateToProps)(Player)
