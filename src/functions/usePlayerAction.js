// import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPlayingAction, setPlayCurrentPlayingAction } from '../redux/actions/currentPlayingAction';

const usePlayerAction = () => {
  const dispatch = useDispatch();
  const currentPlaying = useSelector(state => state.currentPlaying)
  const handleSongPlay = (songData) => {
    dispatch(setCurrentPlayingAction(songData));
    if(! currentPlaying.isPlaying){
      dispatch(setPlayCurrentPlayingAction());
    }
  }

  return {
    handleSongPlay,
  }
}

export default usePlayerAction
