import React, { useState, useEffect } from 'react';
import { musiconAPI } from '../../../../redux/Api/setupAPI';
import {
  Box,
  List,
  Typography,
  // ListItem,
  // ListItemAvatar,
  // ListItemSecondaryAction,
  // ListItemText,
  // makeStyles,
  CircularProgress
} from '@material-ui/core'
// import defaultSongIcon from '../../../../assets/img/XMLID1383.svg'
// import { RoundedButton } from '../../../../components/commons/CstButton';
// import { useDispatch, useSelector } from 'react-redux';
// import { addSongToPlaylistAction } from '../../../../redux/actions/playlistDetailAction';
import SearchResultItem from './SearchResultItem';

// const useStyles = makeStyles(theme => ({
//   playListContainer: {
//     display: 'block',
//     [theme.breakpoints.up('md')]: {
//       display: 'none'
//     }
//   },
//   listItem: {
//     background: '#1F1D2B',
//     borderRadius: theme.spacing(1),
//     marginBottom: theme.spacing(1),
//   },
//   listItemEmpty: {
//     padding: theme.spacing(1),
//     textAlign: 'center'
//   },
//   inline: {
//     display: 'inline'
//   },
//   listIcon: {
//     minWidth: theme.spacing(3)
//   },
//   menuIcon: {
//     minWidth: theme.spacing(4)
//   },
//   songImageDisplay: {
//     width: '60px',
//     borderRadius: '8px',
//     marginRight: '1em'
//   }
// }))




const initialState = {
  data: [],
  error: false,
  message: ''
}

const SearchResult = ({ searchPattern }) => {
  const [searchResult, setSearchResult] = useState(initialState);
  const [loading, setLoading] = useState(false)
  // const classes = useStyles();
  // const dispatch = useDispatch();
  // const playlistDetail = useSelector(state => state.playlistDetail)
  const getSearchResult = async (pattern) => {
    setLoading(true);
    if (!pattern) return;
    try {
      const token = localStorage.getItem('token');
      // const response = await musiconAPI.get(`/songs/search?title=${pattern}&limit=5`, {
      const response = await musiconAPI.get(`/songs/search_tags?tag=${pattern}&limit=5`, {
        headers: {
          "Authorization": token
        }
      });
      if (response.data.songs) {
        setSearchResult(state => ({
          ...state,
          data: [...response.data.songs],
          error: false,
          message: ''
        }));
        setLoading(false);
      } else {
        console.log('ERROR SETTING DATA TO STATE')
        setSearchResult({
          data: [],
          error: false,
          message: ''
        })
        setLoading(false)
      }
    } catch (err) {
      console.log('ERROR ON GETTING SEARCH SONG RESULT, DETAILS', err.response);
      setSearchResult(state => ({
        ...state,
        data: [],
        error: true,
        message: err
      }));
      setLoading(false);
    }
  }

  // //==================ADD SONG TO PLAYLIST ACTION ============================

  // const handleAddSongToPlaylistAction = (songDetail, playlistId, callback) => {
  //   dispatch(addSongToPlaylistAction(songDetail, playlistId, callback));
  // }

  // //==========================================================================

  // const resetState = () => {
  //   setSearchResult(initialState)
  // }

  useEffect(() => {
    const fetchData = setTimeout(() => getSearchResult(searchPattern), 50);
    return () => {
      clearTimeout(fetchData);
      // resetState();
    }
  }, [searchPattern])

  //==================== RESULTS COMPONENT ===========================
  const renderResultList = (results) => {
    if (!searchPattern) return; //if no pattern inputted return nothing
    if (loading) return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size={30} />
      </Box>
    )
    if (results.length === 0) return ( //if pattern inputed but no result found return not Found
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography align="center">Song not Found</Typography>
      </Box>
    )

    // const checkSongAlreadyAdded = (ownSongs = [], searchedSong = {}) => {
    //   return Boolean(ownSongs.find(song => song._id === searchedSong._id));
    // }
    return results.map((result, index) => (
      <SearchResultItem key={index} result={result} />
      // <div key={result._id}>
      //   <ListItem className={`${classes.listItem}`}>
      //     <ListItemAvatar>
      //       {Boolean(result.songImage) ?
      //         <img className={classes.songImageDisplay} src={result.songImage} alt="..." />
      //         :
      //         <img className={classes.songImageDisplay} src={defaultSongIcon} alt="..." />
      //       }
      //     </ListItemAvatar>
      //     <ListItemText
      //       primary={result.songTitle}
      //       secondary={
      //         <React.Fragment>
      //           <Typography
      //             variant="body2"
      //             component="span"
      //             className={classes.inline}
      //           >
      //             {`By ${result.artistId.name}`}
      //           </Typography>

      //           <Typography component="span">
      //             {` - Album: ${result.albumId.albumTitle}`}
      //           </Typography>

      //         </React.Fragment>
      //       }
      //     />
      //     <ListItemSecondaryAction>
      //       <RoundedButton
      //         disabled={
      //           playlistDetail.data.songs ?
      //             checkSongAlreadyAdded(playlistDetail.data.songs, result)
      //           : false
      //         }
      //         startIcon={playlistDetail.loading && <CircularProgress size={20} />}
      //         onClick={() => handleAddSongToPlaylistAction(result, playlistDetail.data._id, () => { })}
      //         variant="primary"
      //       >Add</RoundedButton>
      //     </ListItemSecondaryAction>
      //   </ListItem>

      // </div>
    ))
  }
  //================= MAIN COMPONENT =======================
  return (

    <List>
      {renderResultList(searchResult.data)}
    </List>

  )
}

export default SearchResult
