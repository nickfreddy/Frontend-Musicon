import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes'
import { getRecomendedSongWorker } from "../sagaWorker/recomendedSongWorker";

export function* getRecomendedSongWatcher(){
  yield takeLatest(type.GET_RECOMENDED_SONG, getRecomendedSongWorker);
}