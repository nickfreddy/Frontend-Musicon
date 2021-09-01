import { takeLatest } from "redux-saga/effects";
import * as type from '../../actions/actionTypes';
import { getArtistAlbumWorker } from "../sagaWorker/artistAlbumWorker";

export function* getArtistAlbumWatcher(){
  yield takeLatest(type.GET_ARTIST_ALBUM, getArtistAlbumWorker);
}