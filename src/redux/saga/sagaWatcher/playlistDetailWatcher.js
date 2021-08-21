import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes';
import { getPlaylistDetailWorker } from "../sagaWorker/playlistDetailWorker";

export function* getPlaylistDetailWatcher(){
  yield takeLatest(type.GET_PLAYLIST_DETAIL, getPlaylistDetailWorker)
}