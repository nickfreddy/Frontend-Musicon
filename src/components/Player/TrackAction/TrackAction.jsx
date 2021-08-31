import { IconButton, Slider, makeStyles, withStyles } from '@material-ui/core'
import React from 'react'
import volumeIcon from '../../../assets/img/volume1.svg';
import volumeMuteIcon from '../../../assets/img/volume1mute.svg'
import loveAction from '../../../assets/img/loveIcon.svg'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { useDispatch, connect } from 'react-redux';
import { openLyricModalAction } from '../../../redux/actions/modalAction';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    // [theme.breakpoints.up('sm')]: {
    //   gridColumnStart: '2'
    // }
  },
  iconVolume: {
    marginRight: theme.spacing(1)
  }
}))

const VolumeSlider = withStyles({
  root: {
    color: '#0065DA',
    height: 2,
  },
  thumb: {
    height: 15,
    width: 15,
    backgroundColor: '#fff',
    // border: '2px solid currentColor',
    marginTop: -6,
    marginLeft: -12,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 3,
    borderRadius: 4,
  },
  rail: {
    height: 3,
    borderRadius: 4,
  },
})(Slider);

const TrackAction = ({ volume, setVolume, muted, setMuted, songLyric }) => {
  const dispatch = useDispatch()

  const handleOpenLyricModal = () => {
    dispatch(openLyricModalAction())
  }

  const handleToggleMuted = () => {
    setMuted(state => !state);
  }


  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton onClick={handleToggleMuted} className={classes.iconVolume}><img src={(volume !== 0) && (!muted) ? volumeIcon : volumeMuteIcon} alt="..." /></IconButton>
      <VolumeSlider
        value={volume}
        min={0}
        max={1}
        step={0.01}
        onChange={(e, newVal) => setVolume(newVal)}
      />
      <IconButton>
        <img src={loveAction} alt="..." />
      </IconButton>
      <IconButton disabled={songLyric.data === "" ? true : false} onClick={handleOpenLyricModal} >
        <LibraryBooksIcon />
      </IconButton>
    </div>
  )
}

const mapStateToProps = (state) => ({
  songLyric: state.songLyric
})
export default connect(mapStateToProps)(TrackAction)
