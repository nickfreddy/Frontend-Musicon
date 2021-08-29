import { takeLatest } from "@redux-saga/core/effects";
import * as type from '../../actions/actionTypes'
import { getPlaylistWorker } from "../sagaWorker/playlistWorker";

export function* getPlaylistWatcher () {
  yield takeLatest(type.GET_PLAYLIST, getPlaylistWorker);
}