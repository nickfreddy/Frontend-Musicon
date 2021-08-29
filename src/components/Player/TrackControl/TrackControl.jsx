import React from 'react'
import { makeStyles, withStyles, Slider, IconButton, Typography } from '@material-ui/core';
import playsongIcon from '../../../assets/img/playSongIcon.svg';
import nextSongIcon from '../../../assets/img/nexSongIconEnable.svg';
import prevSongIcon from '../../../assets/img/previousSongIconEnable.svg';
import repeatSongIcon from '../../../assets/img/repeatSongIconEnable.svg';
import shuffleSongIcon from '../../../assets/img/shuffleSongIconEnable.svg';
import { secondsDurationWithZero } from '../../../tools/timeConverter';
import pauseIcon from '../../../assets/img/pauseIcon.svg'
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { disableRepeatPlayingAction, disableShufflePlayingAction, enableRepeatPlayingAction, enableShufflePlayingAction, setCurrentPlayingAction, setPlayCurrentPlayingAction, unsetPlayCurrentPlayingAction } from '../../../redux/actions/currentPlayingAction';
import activeShuffleIcon from '../../../assets/img/shuffleSongIconActive.svg';
import activeRepeatIcon from '../../../assets/img/repeatSongIconActive.svg';
import nextSongIconDisabled from '../../../assets/img/nexSongIconDisabled.svg';
import prevSongIconDisabled from '../../../assets/img/previousSongIconDisabled.svg';
import shuffleSongIconDisabled from '../../../assets/img/shuffleSongIconDisabled.svg';
import repeatSongIconDisabled from '../../../assets/img/repeatSongIconDisabled.svg'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    textAlign: 'center'
  },
  trackControlButton: {
    margin: '0 auto',
    position: 'relative'
  },
  progressBar: {
    display: 'block'
  },
  controlButton: {
    '& img': {
      width: 15,
      height: 15
    },
    '& img.playIcon': {
      width: 30,
      height: 30
    }
  },
  timeElapsed: {
    position: 'absolute',
    right: '0px',
    bottom: '-8px'
  },
  // activeButton: {
  //   background: 'blue',
  //   padding: '3px',
  //   borderRadius: '3px'
  // }
}))


const TrackControl = ({ currentPlaying, playlistDetail, currentTime, duration, handleCurrentTimeChange }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const playlistSong = playlistDetail.data.songs; //its an array of songs in recenly viewed playlist
  const handleInputChange = (e, newValue) => {
    console.log(newValue)
    handleCurrentTimeChange(parseFloat(newValue));

  }

  const ProgressBar = withStyles({
    root: {
      color: '#E2E2EA',
      height: 4,
      '&:hover': {
        '& .MuiSlider-track': {
          backgroundColor: '#4399FD',
        },
        '& .MuiSlider-thumb': {
          backgroundColor: '#4399FD',
        }
      }
    },
    thumb: {
      height: 15,
      width: 15,
      backgroundColor: '#fff',
      // border: '2px solid currentColor',
      marginTop: -5,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    // valueLabel: {
    //   left: 'calc(-50% - 1px)',
    // },
    track: {
      height: 5,
      borderRadius: 4,
    },
    rail: {
      height: 5,
      borderRadius: 4,
    },
  })(Slider);



  const togglePlayTrack = () => {
    if (currentPlaying.isPlaying) return dispatch(unsetPlayCurrentPlayingAction());
    return dispatch(setPlayCurrentPlayingAction())
  }

  const toggleShufflePlaying = () => {
    if (currentPlaying.isShuffleOn) return dispatch(disableShufflePlayingAction());
    return dispatch(enableShufflePlayingAction());
  }

  const toggleRepeatPlaying =() => {
    if(currentPlaying.isRepeatOn) return dispatch(disableRepeatPlayingAction());
    return dispatch(enableRepeatPlayingAction());
  }

  const getCurrentSongIndex = () => {
    const currentSongPlayId = currentPlaying.songDetail._id;
    return playlistSong.findIndex(song => song._id === currentSongPlayId);
  }

  const handleNextSongPlay = () => {
    const currentSongIndex = getCurrentSongIndex();
    console.log('INDEX SONG YANG SEKARANG ADALAH', currentSongIndex);
    if (currentSongIndex === playlistSong.length - 1) {
      dispatch(setCurrentPlayingAction(playlistSong[0]))
    } else {
      dispatch(setCurrentPlayingAction(playlistSong[currentSongIndex + 1]))
    }
  }

  const handlePrevSongPlay = () => {
    const currentSongIndex = getCurrentSongIndex();
    console.log('INDEX SONG YANG SEKARANG ADALAH', currentSongIndex);
    if (currentSongIndex === 0) {
      dispatch(setCurrentPlayingAction(playlistSong[playlistSong.length - 1]))
    } else {
      dispatch(setCurrentPlayingAction(playlistSong[currentSongIndex - 1]))
    }
  }

  return (
    <div className={classes.root}>
      {/* <input
        type="range"
        onChange={handleInputChange} //used to change position of song
        value={currentTime}
        min={0}
        max={duration}
        step={0.01}
        className={classes.slider} //6b7499ff  //active #4399FDff
      /> */}
      <div className={classes.trackControlButton}>

        <IconButton onClick={toggleShufflePlaying} disabled={playlistSong ? false : true} className={classes.controlButton}>
          <img src={
            playlistSong ? 
            currentPlaying.isShuffleOn ? activeShuffleIcon : shuffleSongIcon
            : shuffleSongIconDisabled
          }
            alt="..."
          />
        </IconButton>


        <IconButton disabled={playlistSong ? false : true} onClick={handlePrevSongPlay} className={classes.controlButton}>
          <img
            src={
              playlistSong ? prevSongIcon : prevSongIconDisabled
            }
            alt="..."
          />
        </IconButton>


        {/** ===== PLAY BUTTON ===== */}
        <IconButton onClick={togglePlayTrack} className={classes.controlButton}>
          {currentPlaying.isPlaying ?
            <img className="playIcon" src={pauseIcon} alt="..." />
            :
            <img className="playIcon" src={playsongIcon} alt="..." />
          }
        </IconButton>


        <IconButton disabled={playlistSong ? false : true} onClick={handleNextSongPlay} className={classes.controlButton}>
          <img
            src={
              playlistSong ? nextSongIcon : nextSongIconDisabled
            }
            alt="..."
          />
        </IconButton>


        <IconButton onClick={toggleRepeatPlaying} disabled={playlistSong ? false : true} className={classes.controlButton}>
          <img
            src={
              playlistSong ?
                currentPlaying.isRepeatOn ? activeRepeatIcon : repeatSongIcon
                : repeatSongIconDisabled
            }
            alt="..."
          />
        </IconButton>

        <div className={classes.timeElapsed}>
          <Typography variant="body2">{duration > 0 ? `${secondsDurationWithZero(currentTime)}/${secondsDurationWithZero(duration)}` : "--:--/--:--"}</Typography>
        </div>
      </div>
      <ProgressBar
        className={classes.progressBar}
        onChange={handleInputChange}
        // defaultValue={50}
        value={currentTime}
        min={0}
        max={duration}
        step={0.01}

      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying,
  playlistDetail: state.playlistDetail
})
export default connect(mapStateToProps)(TrackControl);
