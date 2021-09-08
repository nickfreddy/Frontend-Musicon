import React, { useState } from 'react'
import {
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
  Menu,
  MenuItem,
  alpha,
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import defaultSongIcon from '../../../../assets/img/XMLID1383.svg'
import deleteIcon from '../../../../assets/img/deleteIcon.svg'
import { secondsDuration } from '../../../../tools/timeConverter';
import { connect } from 'react-redux';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import LoveButton from '../../../../components/commons/LoveButton';
import usePlayerAction from '../../../../functions/usePlayerAction';

const useStyles = makeStyles(theme => ({
  playListContainer: {
    display: 'block',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
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
        display: 'none',
      }
    },
  },
  listItemEmpty: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  inline: {
    display: 'inline'
  },

  menuItem: {
    justifyContent: 'center'
  },
  listIcon: {
    minWidth: theme.spacing(4)
  },
  menuIcon: {
    minWidth: theme.spacing(0),
  },
  songImageDisplay: {
    width: '60px',
    borderRadius: '8px',
    marginRight: '1em'
  },
  playArrowIcon: {
    marginLeft: '-1.2em'
  },
  songNumber: {
    '& .playNumberIcon': {
      display: 'none',
      // textAlign: 'center',
      marginLeft: '-0.7em'
    }
  },
  loveButton: {
    // '&.MuiIconButton-root': {
    padding: '0',
    margin: '0 auto',
    height: '25px',
    // }
  }
}))


const SongListListItem = ({
  currentPlaying,
  song,
  isOwner,
  className,
  number,
  id,
  image,
  title,
  artist,
  duration,
  handleSongPlay,
  onDelete
}) => {

  const classes = useStyles();
  const player = usePlayerAction();
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClose = (e) => {
    setAnchorEl(null)
  }
  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }
  return (
    <div>
      <ListItem className={`${classes.listItem} ${className}`} onClick={() => handleSongPlay(song)}>
        <ListItemIcon className={classes.listIcon}>
          {/* {number} */}
          {song._id === currentPlaying.songDetail._id ?
            <div className={classes.playArrowIcon}>
              {currentPlaying.isPlaying ?
                <IconButton onClick={player.handlePauseAction}>
                  <PauseIcon />
                </IconButton>
                :
                <IconButton>
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
            <img className={classes.songImageDisplay} src={image} alt="..." />
            :
            <img className={classes.songImageDisplay} src={defaultSongIcon} alt="..." />
          }
        </ListItemAvatar>
        <ListItemText
          primary={title}
          secondary={
            <React.Fragment>
              <Typography
                variant="body2"
                component="span"
                className={classes.inline}
              >
                {`By ${artist}`}
              </Typography>

              <Typography component="span">
                {` - Duration: ${secondsDuration(duration)}`}
              </Typography>

            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          {isOwner ?
            <IconButton
              edge="end"
              onClick={handleMenuOpen}
            >
              <MoreVertIcon />
            </IconButton>
            :
            <LoveButton songId={song._id} isLiked={song.isLiked} />
          }
        </ListItemSecondaryAction>
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
        <MenuItem className={classes.menuItem}>
          <ListItemIcon className={classes.menuIcon}>
            <LoveButton className={classes.loveButton} songId={song._id} isLiked={song.isLiked} />
          </ListItemIcon>
          {/* <ListItemText primary="Like" /> */}
        </MenuItem>
        <MenuItem className={classes.menuItem} onClick={onDelete}>
          <ListItemIcon className={classes.menuIcon}>
            <img src={deleteIcon} alt="..." />
          </ListItemIcon>
          {/* <ListItemText primary="Delete" /> */}
        </MenuItem>
      </Menu>
    </div>
  )
}

const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying
})
export default connect(mapStateToProps)(SongListListItem)
