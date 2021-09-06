import { put } from 'redux-saga/effects';
import {
  addSongToLocalPlaylistAction,
  deleteSongFromLocalPlaylistDetailAction,
  setLoadingPlaylistDetailAction,
  setPlaylistDetailAction,
  unsetLoadingPlayistDetailAction,
  updateLocalPlaylistDetailAction
} from '../../actions/playlistDetailAction';
import {
  addSongToPlaylist,
  deleteSongFromPlaylist,
  getPlaylistDetail,
  updatePlaylistDetail
} from '../../Api/playlistDetailAPI';

export function* getPlaylistDetailWorker(action) {
  try {
    yield put(setLoadingPlaylistDetailAction());
    const token = localStorage.getItem('token');
    const response = yield getPlaylistDetail(action.payload, token);
    if (response.data.data._id) {
      yield put(setPlaylistDetailAction(response.data.data));
      yield put(unsetLoadingPlayistDetailAction());
      // action.callback()
    } else {
      yield put(unsetLoadingPlayistDetailAction());
    }
  } catch (err) {
    // console.log('ERROR FROM GET PLAUYLIST DETAIL WORKER DETAILS: ', err.response);
    yield put(unsetLoadingPlayistDetailAction())
  }
}

export function* addSongToPlaylistWorker(action) {
  try {
    yield put(setLoadingPlaylistDetailAction());
    const token = localStorage.getItem('token');
    const { songDetail, playlistId } = action.payload
    const response = yield addSongToPlaylist(playlistId, songDetail._id, token);
    //add song to playlist detail
    if (response.data.data) {
      //SUCCESS ADD PLAYLIST TO USER PLAYLIST
      yield put(addSongToLocalPlaylistAction(songDetail)); //add song also on local Playlist
      yield put(unsetLoadingPlayistDetailAction())
      action.callback()
      //additional : add song id to userPlaylist
    } else {
      // console.log('SOMETHING WROKE WITH RESPONSE :', response);
      yield put(unsetLoadingPlayistDetailAction())
    }

  } catch (err) {
    // console.log('ERROR AT ADD SONG TO PLAYLIST WORKER DETAIL:', err);
    yield put(unsetLoadingPlayistDetailAction())
  }
}

export function* deleteSongFromPlaylistWorker(action) {
  try {
    yield put(setLoadingPlaylistDetailAction());
    const token = localStorage.getItem('token');
    const { playlistId, songId } = action.payload;
    const response = yield deleteSongFromPlaylist(playlistId, songId, token);
    if (response.data.data) {
      yield put(deleteSongFromLocalPlaylistDetailAction(songId));
      yield put(unsetLoadingPlayistDetailAction());
      action.callback();
    } else {
      // console.log('SOMETHING WRONG WITH RESPONSE AT DELETE SONG FROM PLAYLIST:', response);
      yield put(unsetLoadingPlayistDetailAction());
    };
  } catch (err) {
    // console.log('ERROR AT DELETE SONG FROM PLAYLIST WORKER DETAIL:', err);
    yield put(unsetLoadingPlayistDetailAction())
  };
}

export function* updatePlaylistDetailWorker(action){
  try{
    yield put(setLoadingPlaylistDetailAction());
    const {
      playlistId,
      playlistTitle,
      playlistImage,
      description
    } = action.payload;
    const data = new FormData();
    data.append("playlistTitle", playlistTitle);
    if(typeof playlistImage !== "string"){
      data.append("playlistImage", playlistImage);
    }
    data.append("description", description);
    const token = localStorage.getItem('token');
    const response = yield updatePlaylistDetail(playlistId, data, token);
    if(response.data.message){
      yield put(updateLocalPlaylistDetailAction(playlistTitle, playlistImage, description));
      yield put(unsetLoadingPlayistDetailAction())
      action.callback();
    }else{
      // console.log('ERROR ON SETTING DATA TO REDUCER')
      yield put(unsetLoadingPlayistDetailAction())
    }
  }catch(err){
    // console.log('ERROR ON UPDATE PLAYLIST DETAIL:', err);
    yield put(unsetLoadingPlayistDetailAction())
  }
}