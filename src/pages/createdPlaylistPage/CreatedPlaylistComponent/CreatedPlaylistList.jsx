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
// import defaultSongIcon from '../../../assets/img/XMLID1383.svg'
import editIcon from '../../../assets/img/editIcon.svg';
import deleteIcon from '../../../assets/img/deleteIcon.svg';
import { formatDate } from '../../../tools/dateReformat';
import { sourceUrl } from '../../../redux/Api/setupAPI';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Skeleton } from '@material-ui/lab';

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
  },
  imageIcon: {
    width: 45,
    borderRadius: '8px'
  },
  listPlaylistSkeleton: {
    height: '80px',
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}))



const PlaylistItem = ({ className, number, id, image, title, totalSong, dateCreated, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const history = useHistory()
  const classes = useStyles();
  const { url } = useRouteMatch()

  const handleMenuClose = (e) => {
    setAnchorEl(null)
  }
  const handleMenuOpen = (e) => {
    setAnchorEl(e.currentTarget)
  }

  const routeToPlaylistContent = (playlist_id) => {
    history.push(`${url}/${playlist_id}`)
  }
  return (
    <div>
      <ListItem className={`${classes.listItem} ${className}`} onClick={() => routeToPlaylistContent(id)}>
        <ListItemIcon className={classes.listIcon}>
          <Typography>{number}</Typography>
        </ListItemIcon>
        <ListItemAvatar>
          {// This mitigate type of received photo to prevent broken photo display
            image !== 'https://i1.sndcdn.com/artworks-000560586507-q7vve7-t500x500.jpg' ? //check if photo is not empty string
              typeof image === 'string' ?
                <img className={classes.imageIcon} src={sourceUrl + image} alt="..." /> //if type of photo is string mostli its a url from server so use it
                : <img className={classes.imageIcon} src={URL.createObjectURL(image)} alt="..." /> //if type of photo is a file that inputed from form so use it
              : <img className={classes.imageIcon} src="https://i1.sndcdn.com/artworks-000560586507-q7vve7-t500x500.jpg" alt="..." /> // if no photo provided so use local default photo
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
                {`Created on ${formatDate(dateCreated)}`}
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

        <MenuItem onClick={() => routeToPlaylistContent(id)}>
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




const CreatedPlaylistList = ({ userPlaylist, data, handleDelete }) => {
  const classes = useStyles()


  //RENDERING LIST CONTENT
  const renderListItem = (data) => {
    if (userPlaylist.loading) return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(data => (
      <Skeleton key={data} variant="rect" className={classes.listPlaylistSkeleton} />
    ));

    if (data.length === 0) return (
      <div className={`${classes.listItem} ${classes.listItemEmpty}`} onClick={() => { }}>
        <Typography>Oops...</Typography>
        <Typography>you don't have a playlist yet</Typography>
      </div>
    )
    return data.map((playlist, index) => (
      <PlaylistItem 
        key={playlist._id} 
        number={index + 1} 
        id={playlist._id} 
        image={playlist.playlistImage} 
        title={playlist.playlistTitle} 
        totalSong={playlist.songs.length} 
        dateCreated={playlist.createdAt} 
        onDelete={() => handleDelete(playlist._id)} />
    ))
  }


  return (
    <List className={classes.playListContainer}>
      {renderListItem(data)}
    </List>
  )
}


const mapStateToProps = (state) => ({
  userPlaylist: state.userPlaylist
})

export default connect(mapStateToProps)(CreatedPlaylistList)
