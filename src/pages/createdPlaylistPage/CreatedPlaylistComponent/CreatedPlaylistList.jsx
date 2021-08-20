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
  List
} from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import defaultSongIcon from '../../../assets/img/XMLID1383.svg'
import editIcon from '../../../assets/img/editIcon.svg';
import deleteIcon from '../../../assets/img/deleteIcon.svg'

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
  }
}))



const PlaylistItem = ({ className, number, id, image, title, totalSong, dateCreated, onPlay, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleMenuClose = (e) => {
    setAnchorEl(null)
  }
  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }

  return (
    <div>
      <ListItem className={`${classes.listItem} ${className}`} onClick={onPlay}>
        <ListItemIcon className={classes.listIcon}>
          <Typography>{number}</Typography>
        </ListItemIcon>
        <ListItemAvatar>
          {Boolean(image) ?
            <img src={image} alt="..." />
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
                {`Created on ${dateCreated}`}
              </Typography>
              {` - ${totalSong} songs`}
            </React.Fragment>
          }
        />
        <ListItemSecondaryAction>
          <IconButton
            edge="end"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
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

        <MenuItem onClick={() => { }}>
          <ListItemIcon className={classes.menuIcon}>
            <img src={editIcon} alt="..." />
          </ListItemIcon>
          <ListItemText primary="Edit" />
        </MenuItem>
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




const CreatedPlaylistList = ({ data, handleSongPlay, handleDelete, handleOpenCreatePlaylistModal }) => {
  const classes = useStyles()


  //RENDERING LIST CONTENT
  const renderListItem = (data) => {
    if (data.length === 0) return (
      <div className={`${classes.listItem} ${classes.listItemEmpty}`} onClick={() => { }}>
        <Typography>Oops...</Typography>
        <Typography>you don't have a playlist yet</Typography>
      </div>
    )
    return data.map((playlist, index) => (
      <PlaylistItem key={playlist._id} number={index + 1} id={playlist._id} image={playlist.photo} title={playlist.title} totalSong={playlist.totalSong} dateCreated={playlist.dateCreated} onPlay={() => handleSongPlay(playlist._id)} onDelete={() => handleDelete(playlist._id)} />
    ))
  }


  return (
    <List className={classes.playListContainer}>
      {renderListItem(data)}
    </List>
  )
}

export default CreatedPlaylistList
