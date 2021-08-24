import React, { useState } from 'react'
import {
  // IconButton,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  // ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import defaultSongIcon from '../../../assets/img/XMLID1383.svg'
// import { Delete } from '@material-ui/icons';
import deleteIcon from '../../../assets/img/deleteIcon.svg';

const useStyles = makeStyles(theme => ({
  listItem: {
    background: '#1F1D2B',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  inline: {
    display: 'inline'
  },
  listIcon: {
    minWidth: theme.spacing(3)
  },
  menuIcon:{
    minWidth: theme.spacing(4)
  },
  songImage:{
    width: '50px',
    height: '50px',
    borderRadius: theme.spacing(1)
  }
}))
const SongListItem = ({ className, number, id, image, title, artist, duration, onPlay, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const classes = useStyles();

  const handleMenuClose = (e) => {
    setAnchorEl(null)
  }
  // const handleMenuOpen = (e) => {
  //   setAnchorEl(e.currentTarget)
  // }
  return (
    <div>
      <ListItem className={`${classes.listItem} ${className}`} onClick={onPlay}>
        <ListItemIcon className={classes.listIcon}>
          <Typography>{number}</Typography>
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
        {/* <ListItemSecondaryAction>
          <IconButton
            edge="end"
            onClick={handleMenuOpen}
          >
            <MoreVertIcon />
          </IconButton>
        </ListItemSecondaryAction> */}
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
            <img src={deleteIcon} alt="..."/>
          </ListItemIcon>
          <ListItemText primary="Delete"/>
        </MenuItem>
      </Menu>
    </div>
  )
}

export default SongListItem
