import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes';
import { getUserTopArtistWorker } from "../sagaWorker/userTopArtistWorker";

export function* getUserTopArtistWatcher(){
  yield takeLatest(type.GET_USER_TOP_ARTIST, getUserTopArtistWorker);
}