import { takeLatest } from 'redux-saga/effects';
import * as type from '../../actions/actionTypes'
import { 
  deleteUserPlaylistWorker, 
  getUserPlaylistWorker, 
  postUserPlaylistWorker 
} from '../sagaWorker/userPlaylistWorker';

export function* getUserPlaylistWatcher(){
  yield takeLatest(type.GET_USER_PLAYLIST, getUserPlaylistWorker);
}
export function* postUserPlaylistWatcer(){
  yield takeLatest(type.POST_USER_PLAYLIST, postUserPlaylistWorker);
}
export function* deleteUserPlaylistWatcher(){
  yield takeLatest(type.DELETE_USER_PLAYLIST, deleteUserPlaylistWorker);
}