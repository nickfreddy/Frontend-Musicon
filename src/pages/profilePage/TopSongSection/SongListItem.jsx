import React, { useState } from 'react'
import {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
  alpha,
  IconButton
} from '@material-ui/core'
import defaultSongIcon from '../../../assets/img/XMLID1383.svg'
import deleteIcon from '../../../assets/img/deleteIcon.svg';
import { connect } from 'react-redux';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import usePlayerAction from '../../../functions/usePlayerAction';

const useStyles = makeStyles(theme => ({
  listItem: {
    background: '#1F1D2B',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '& .numberIcon': {
      marginLeft: theme.spacing(0.3)
    },
    '&:hover': {
      background: alpha('#2D304D', 0.9),
      cursor: 'pointer',
      '& .playNumberIcon': {
        display: 'block',
      },
      '& .numberIcon': {
        display: 'none'
      }
    },
  },
  inline: {
    display: 'inline'
  },
  listIcon: {
    minWidth: theme.spacing(4)
  },
  menuIcon: {
    minWidth: theme.spacing(4)
  },
  songImage: {
    width: '50px',
    height: '50px',
    borderRadius: theme.spacing(1)
  },
  playArrowIcon: {
    marginLeft: '-1.2em'
  },
  songNumber: {
    '& .playNumberIcon': {
      display: 'none',
      // textAlign: 'center'
      marginLeft: '-0.7em'

    }
  }
}))
const SongListItem = ({
  currentPlaying,
  className,
  number,
  id,
  image,
  title,
  artist,
  duration,
  onPlay,
  onDelete
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const playerAction = usePlayerAction()
  const classes = useStyles();

  const handleMenuClose = (e) => {
    setAnchorEl(null)
  }

  const handelPlaySong = () => {
    if(id !== currentPlaying.songDetail._id){
        onPlay()
    }
  }
  return (
    <div>
      <ListItem className={`${classes.listItem} ${className}`} onClick={handelPlaySong}>
        <ListItemIcon className={classes.listIcon}>
          {/* <Typography>{number}</Typography> */}
          {id === currentPlaying.songDetail._id ?
            <div className={classes.playArrowIcon}>
              {currentPlaying.isPlaying ?
                <IconButton onClick={playerAction.handlePauseAction}>
                  <PauseIcon />
                </IconButton>
                :
                <IconButton onClick={onPlay}>
                  <PlayArrowIcon />
                </IconButton>
              }
            </div>
            :
            <div className={classes.songNumber}>
              <IconButton className="playNumberIcon">
                <PlayArrowIcon />
              </IconButton>
              <Typography className="numberIcon" align="center">
                {number}
              </Typography>
            </div>
          }
        </ListItemIcon>
        <ListItemAvatar>
          {Boolean(image) ?
            <img className={classes.songImage} src={image} alt="..." />
            :
            <img src={defaultSongIcon} alt="..." />
          }
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
              >
                {duration}
              </Typography>
              {` - ${artist}`}
            </React.Fragment>
          }
        />
      </ListItem>
      <Menu
        id={`song-menu${id}`}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
      >
        <MenuItem onClick={onDelete}>
          <ListItemIcon className={classes.menuIcon}>
            <img src={deleteIcon} alt="..." />
          </ListItemIcon>
          <ListItemText primary="Delete" />
        </MenuItem>
      </Menu>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying
});
export default connect(mapStateToProps)(SongListItem)
