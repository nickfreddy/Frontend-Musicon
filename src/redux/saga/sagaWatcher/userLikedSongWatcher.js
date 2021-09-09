import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes'
import { getUserLikedSongsWorker } from "../sagaWorker/userLikedSongsWorker";

export function* getUserLikedSongsWatcher(){
  yield takeLatest(type.GET_USER_LIKED_SONGS, getUserLikedSongsWorker);
}