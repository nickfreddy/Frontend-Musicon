import React, { useState } from 'react';
import {
  Typography,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  makeStyles,
  CircularProgress,
  IconButton,
} from '@material-ui/core'
import defaultSongIcon from '../../../../assets/img/XMLID1383.svg'
import { RoundedButton } from '../../../../components/commons/CstButton';
import { useDispatch, useSelector } from 'react-redux';
import { addSongToPlaylistAction } from '../../../../redux/actions/playlistDetailAction';
import AddIcon from '@material-ui/icons/Add';

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
    position: 'relative'
  },
  secondaryAction: {
    // position: 'absolute';
    '& .MuiButton-root': {
      display: 'none',
      [theme.breakpoints.up('md')]:{
        display: 'flex'
      }
    },

    '& .MuiIconButton-root': {
      [theme.breakpoints.up('md')]:{
        display: 'none'
      }
    }
    
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
  enabledButton: {
    color: '#0065DA'
  }
}))



const SearchResultItem = ({ result }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const playlistDetail = useSelector(state => state.playlistDetail)

  //==================ADD SONG TO PLAYLIST ACTION ============================

  const handleAddSongToPlaylistAction = (songDetail, playlistId) => {
    setLoading(true);
    dispatch(addSongToPlaylistAction(songDetail, playlistId, () => setLoading(false)));
  }

  //==========================================================================
  const checkSongAlreadyAdded = (ownSongs = [], searchedSong = {}) => {
    return Boolean(ownSongs.find(song => song._id === searchedSong._id));
  }
  return (
    <div>
      <ListItem className={`${classes.listItem}`}>
        <ListItemAvatar>
          {Boolean(result.songImage) ?
            <img className={classes.songImageDisplay} src={result.songImage} alt="..." />
            :
            <img className={classes.songImageDisplay} src={defaultSongIcon} alt="..." />
          }
        </ListItemAvatar>
        <ListItemText
          primary={result.songTitle}
          secondary={
            <React.Fragment>
              <Typography
                variant="body2"
                component="span"
                className={classes.inline}
              >
                {`${result.artistId.name}`}
              </Typography>

              <Typography component="span">
                {` - ${result.albumId.albumTitle}`}
              </Typography>

            </React.Fragment>
          }
        />
        <ListItemSecondaryAction className={classes.secondaryAction}>
          <RoundedButton
            disabled={
              playlistDetail.data.songs ?
                checkSongAlreadyAdded(playlistDetail.data.songs, result)
                : false
            }
            startIcon={loading && <CircularProgress size={20} />}
            onClick={() => handleAddSongToPlaylistAction(result, playlistDetail.data._id)}
            variant="primary"
          >Add</RoundedButton>

          <IconButton
            edge="end"
            onClick={() => handleAddSongToPlaylistAction(result, playlistDetail.data._id)}
            className={
              `${(playlistDetail.data.songs ?
                checkSongAlreadyAdded(playlistDetail.data.songs, result)
                : false) || classes.enabledButton}`
            }
            disabled={
              playlistDetail.data.songs ?
                checkSongAlreadyAdded(playlistDetail.data.songs, result)
                : false
            }
          >
            {loading ? <CircularProgress size={20} /> : <AddIcon />}
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
      
    </div>
  )
}

export default SearchResultItem
