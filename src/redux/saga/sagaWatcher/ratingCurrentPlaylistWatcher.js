import * as type from '../../actions/actionTypes';
import { takeLatest } from 'redux-saga/effects';
import { getRatingCurrentPlaylistWorker, postRatingCurrentPlaylistWorker } from '../sagaWorker/ratingCurrentPlaylistWorker';

export function* getRatingCurrentPlaylistWatcher(){
  yield takeLatest(type.GET_RATING_CURRENT_PLAYLIST, getRatingCurrentPlaylistWorker);
}

export function* postRatingCurrentPlaylistWatcher(){
  yield takeLatest(type.POST_RATING_CURRENT_PLAYLIST, postRatingCurrentPlaylistWorker);
}