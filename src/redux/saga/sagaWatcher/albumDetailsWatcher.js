import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes'
import { getAlbumDetailsWorker } from "../sagaWorker/albumDetailsWorker";

export function* getAlbumDetailsWatcher(){
  yield takeLatest(type.GET_ALBUM_DETAILS, getAlbumDetailsWorker);
}