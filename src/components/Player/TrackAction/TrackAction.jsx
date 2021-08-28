import { IconButton, Slider, makeStyles, withStyles } from '@material-ui/core'
import React from 'react'
import volumeIcon from '../../../assets/img/volumeIcon.svg';
import loveAction from '../../../assets/img/loveIcon.svg'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

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

const TrackAction = ({ volume, setVolume }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton className={classes.iconVolume}><img src={volumeIcon} alt="..." /></IconButton>
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
      <IconButton>
        <LibraryBooksIcon />
      </IconButton>
    </div>
  )
}

export default TrackAction
