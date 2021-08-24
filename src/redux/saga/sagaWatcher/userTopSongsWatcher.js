import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes';
import { getUserTopSongsWorker } from "../sagaWorker/userTopSongsWorker";

export function* getUserTopSongsWatcher(){
  yield takeLatest(type.GET_USER_TOP_SONGS, getUserTopSongsWorker);
}