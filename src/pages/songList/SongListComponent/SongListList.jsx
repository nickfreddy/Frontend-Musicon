import React from 'react'
import {
  makeStyles,
  Typography,
  List
} from '@material-ui/core'
import SongListListItem from './SongListListComponent/SongListListItem';

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
  songImageDisplay: {
    width: '60px',
    borderRadius: '8px',
    marginRight: '1em'
  }
}))



// const SongItem = ({song, isOwner, className, number, id, image, title, artist, duration, handleSongPlay, onDelete }) => {

//   const classes = useStyles();

//   const [anchorEl, setAnchorEl] = useState(null);
//   const handleMenuClose = (e) => {
//     setAnchorEl(null)
//   }
//   const handleMenuOpen = (e) => {
//     setAnchorEl(e.currentTarget)
//   }

//   return (
//     <div>
//       <ListItem className={`${classes.listItem} ${className}`} onClick={() => handleSongPlay(song)}>
//         <ListItemIcon className={classes.listIcon}>
//           <Typography>{number}</Typography>
//         </ListItemIcon>
//         <ListItemAvatar>
//           {Boolean(image) ?
//             <img className={classes.songImageDisplay} src={image} alt="..." />
//             :
//             <img className={classes.songImageDisplay} src={defaultSongIcon} alt="..." />
//           }
//         </ListItemAvatar>
//         <ListItemText
//           primary={title}
//           secondary={
//             <React.Fragment>
//               <Typography
//                 variant="body2"
//                 component="span"
//                 className={classes.inline}
//               >
//                 {`By ${artist}`}
//               </Typography>

//               <Typography component="span">
//                 {` - Duration: ${secondsDuration(duration)}`}
//               </Typography>

//             </React.Fragment>
//           }
//         />
//         {isOwner &&
//           <ListItemSecondaryAction>
//             <IconButton
//               edge="end"
//               onClick={handleMenuOpen}
//             >
//               <MoreVertIcon />
//             </IconButton>
//           </ListItemSecondaryAction>
//         }
//       </ListItem>
//       <Menu
//         id={`song-menu${id}`}
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleMenuClose}
//         getContentAnchorEl={null}
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'center',
//         }}
//         transformOrigin={{
//           vertical: 'bottom',
//           horizontal: 'center',
//         }}
//       >
//         <MenuItem onClick={onDelete}>
//           <ListItemIcon className={classes.menuIcon}>
//             <img src={deleteIcon} alt="..." />
//           </ListItemIcon>
//           <ListItemText primary="Delete" />
//         </MenuItem>
//       </Menu>
//     </div>
//   )
// }




const SongListList = ({ isOwner, data, handleSongPlay, handleDelete }) => {
  const classes = useStyles()


  //RENDERING LIST CONTENT
  const renderListItem = (data) => {
    if (data.length === 0) return (
      <div className={`${classes.listItem} ${classes.listItemEmpty}`} onClick={() => { }}>
        <Typography>Oops...</Typography>
        <Typography>you don't have a song yet</Typography>
      </div>
    )
    return data.map((song, index) => (
      <SongListListItem 
        song={song} 
        isOwner={isOwner} 
        key={song._id} 
        number={index + 1} 
        id={song._id} 
        image={song.songImage} 
        title={song.songTitle} 
        artist={song.artistId.name} 
        duration={song.songDuration} 
        handleSongPlay={handleSongPlay} 
        onDelete={() => handleDelete(song._id)} />
    ))
  }


  return (
    <List className={classes.playListContainer}>
      {renderListItem(data)}
    </List>
  )
}

export default SongListList

