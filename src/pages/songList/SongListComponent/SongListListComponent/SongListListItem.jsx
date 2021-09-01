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
  listItemEmpty: {
    padding: theme.spacing(1),
    textAlign: 'center'
  },
  inline: {
    display: 'inline'
  },
  listIcon: {
    minWidth: theme.spacing(3)
  },
  menuIcon: {
    minWidth: theme.spacing(4)
  },
  songImageDisplay: {
    width: '60px',
    borderRadius: '8px',
    marginRight: '1em'
  },
  playArrowIcon: {
    marginLeft: '-0.6em'
  },
  songNumber: {
    '& .playNumberIcon': {
      display: 'none',
      textAlign: 'center'
    }
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
                {currentPlaying.isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
              </div>
              :
              <div className={classes.songNumber}>
                <div className="playNumberIcon">
                  <PlayArrowIcon />
                </div>
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
        {isOwner &&
          <ListItemSecondaryAction>
            <IconButton
              edge="end"
              onClick={handleMenuOpen}
            >
              <MoreVertIcon />
            </IconButton>
          </ListItemSecondaryAction>
        }
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
})
export default connect(mapStateToProps)(SongListListItem)
