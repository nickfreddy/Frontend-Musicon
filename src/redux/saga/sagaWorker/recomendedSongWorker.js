import { put } from 'redux-saga/effects';
import {
  setLoadingRecomendedSongAction,
  setRecomendedSongAction,
  unsetLoadingRecomendedSongAction
} from '../../actions/recomendedSongAction';
import { getRecomendedSong } from '../../Api/recomendedSong';


export function* getRecomendedSongWorker(action) {
  try {
    yield put(setLoadingRecomendedSongAction());
    const token = localStorage.getItem('token');
    const response = yield getRecomendedSong(action.payload, token);
    if (response.data.songs) {
      yield put(setRecomendedSongAction(response.data.songs));
      yield put(unsetLoadingRecomendedSongAction());
      yield action.callback();
    } else {
      // console.log('ERROR DATA STRUCTURE IS UNKNOWN DETAILS :', response);
      yield put(unsetLoadingRecomendedSongAction());
    }
  } catch (err) {
    // console.log('ERROR GETTING DATA RECOMENDED SONG ON SAGA WORKER DETAILS: ', err.response)
    yield put(unsetLoadingRecomendedSongAction())
  }
}