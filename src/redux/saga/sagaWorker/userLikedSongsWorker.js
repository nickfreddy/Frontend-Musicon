import {put} from 'redux-saga/effects';
import { 
  setLoadingPlaylistDetailAction, 
  unsetLoadingPlayistDetailAction 
} from '../../actions/playlistDetailAction';
import { 
  setUserLikedSongsAction, 
} from '../../actions/userLikedSongsAction';
import { getUserLikedSongs } from '../../Api/likedSongAPI';

export function* getUserLikedSongsWorker(action){
  try{
    yield put(setLoadingPlaylistDetailAction())
    const token = localStorage.getItem('token');
    const response = yield getUserLikedSongs(action.payload,token);
    if(response.data.data){
      yield put(setUserLikedSongsAction(response.data.data));
      yield put(unsetLoadingPlayistDetailAction())
      action.callback();
    }else{
      // console.log('GOT UNKNOWN DATA STRUCTURE, DETAILS:', response);
      yield put(unsetLoadingPlayistDetailAction());
    }
  }catch(err){
    // console.log('ERROR ON GETTING USER LIKED SONG ON GET USERLIKDED SONG WORKER  :', err);
    yield put(unsetLoadingPlayistDetailAction())
  }
}