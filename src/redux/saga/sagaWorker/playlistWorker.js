import { put } from 'redux-saga/effects';
import {
  setLoadingPlaylistAction,
  setPlaylistAction,
  unsetLoadingPlaylistAction
} from '../../actions/playlistAction';
import { getPlaylist } from '../../Api/playlistAPI';


export function* getPlaylistWorker(action) {
  try {
    yield put(setLoadingPlaylistAction());
    const token = localStorage.getItem('token');
    // console.log(token);
    const response = yield getPlaylist(token);
    if (response.data.data) {
      yield put(setPlaylistAction(response.data.data));
      yield put(unsetLoadingPlaylistAction());
      action.callback();
    } else {
      // console.log('GET UNKNOWN DATA STRUCTURE RESPONSE IS :', response)
      yield put(unsetLoadingPlaylistAction())
    }
  } catch (err) {
    // console.log('ERROR ON GET PLAYLIST WORKER DETAILS:', err)
    yield put(unsetLoadingPlaylistAction())
  }
}