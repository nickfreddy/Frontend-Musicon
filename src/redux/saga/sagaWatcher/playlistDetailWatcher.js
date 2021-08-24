import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes';
import { 
  addSongToPlaylistWorker, 
  deleteSongFromPlaylistWorker, 
  getPlaylistDetailWorker, 
  updatePlaylistDetailWorker
} from "../sagaWorker/playlistDetailWorker";

export function* getPlaylistDetailWatcher(){
  yield takeLatest(type.GET_PLAYLIST_DETAIL, getPlaylistDetailWorker);
};

export function* addSongToPlaylistWatcher(){
  yield takeLatest(type.ADD_SONG_TO_PLAYLIST_DETAIL, addSongToPlaylistWorker);
};

export function* deleteSongFromPlaylistWatcher(){
  yield takeLatest(type.DELETE_SONG_FROM_PLAYLIST_DETAIL, deleteSongFromPlaylistWorker);
};

export function* updatePlaylistDetailWatcher(){
  yield takeLatest(type.UPDATE_PLAYLIST_DETAIL, updatePlaylistDetailWorker);
}