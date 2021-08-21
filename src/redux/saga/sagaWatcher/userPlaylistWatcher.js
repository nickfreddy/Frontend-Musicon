import { takeLatest } from 'redux-saga/effects';
import * as type from '../../actions/actionTypes'
import { getUserPlaylistWorker } from '../sagaWorker/userPlaylistWorker';

export function* getUserPlaylistWatcher(){
  yield takeLatest(type.GET_USER_PLAYLIST, getUserPlaylistWorker);
}