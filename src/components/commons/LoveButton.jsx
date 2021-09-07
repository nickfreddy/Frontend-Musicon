import React, { useState } from 'react'
import { CircularProgress, IconButton, makeStyles } from '@material-ui/core'
import loveAction from '../../assets/img/loveIcon.svg'
import chekedLoveAction from '../../assets/img/loveChecked.svg';
import disabledLoveIcon from '../../assets/img/disabledLoveAction.svg'
import {
  connect,
  useDispatch,
  // useSelector
} from 'react-redux';
import { setLikeSongStatus } from '../../redux/Api/likedSongAPI';
import { setLikeSongInPlaylistDetailAction, unsetLikeSongInPlaylistDetailAction } from '../../redux/actions/playlistDetailAction';
import { setLikeCurrentPlayingAction, unsetLikeCurrentPlaylingAction } from '../../redux/actions/currentPlayingAction';

const useStyles = makeStyles(theme => ({
  root:{
    // display: 'block'
  }
}))

const LoveButton = ({ currentPlaying, songId, isLiked, className }) => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  const classes = useStyles();


  //HANDEL LIKE ICON SELECT
  const handleLikeIconSelect = () => {
    if (!songId) return disabledLoveIcon;
    if (isLiked) return chekedLoveAction
    return loveAction
  }

  const handleToggleLikeButton = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams();
      params.append('like', !isLiked);
      console.log('LIKE SENT', params);
      const response = await setLikeSongStatus(songId, params, token);
      console.log('UPDATE RESULT', response);
      if (response.data) {

        //toggle state on reducer (playlist detail and curent playing reducer)
        if (isLiked === true) {
          dispatch(unsetLikeSongInPlaylistDetailAction(songId));
          if (songId === currentPlaying.songDetail._id) {
            dispatch(unsetLikeCurrentPlaylingAction());
          }
        } else {
          dispatch(setLikeSongInPlaylistDetailAction(songId));
          if (songId === currentPlaying.songDetail._id) {
            dispatch(setLikeCurrentPlayingAction());
          }
        }

        setLoading(false)
      } else {
        console.log('RESPONSE DATA NOT FOUND, DETAIL', response);
        setLoading(false);
      }
    } catch (err) {
      console.log('ERROR ON SENDING LIKE UPDATE TO SERVER:', err);
      setLoading(false)
    }

  }




  return (
    <IconButton className={`${classes.root} ${className}`} onClick={handleToggleLikeButton} disabled={!songId ? true : false} >
      {loading ?
        <CircularProgress size={20} />
        :
        <img src={handleLikeIconSelect()} alt="..." />
      }
    </IconButton>
  )
}


const mapStateToProps = (state) => ({
  currentPlaying: state.currentPlaying
})
export default connect(mapStateToProps)(LoveButton)
