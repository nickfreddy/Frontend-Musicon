import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes'
import { getSongLyricWorker } from "../sagaWorker/songLyricWorker";

export function* getSongLyricWatcher(){
  yield takeLatest(type.GET_SONG_LYRIC, getSongLyricWorker);
}