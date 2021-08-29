import {takeLatest} from 'redux-saga/effects';
import * as type from '../../actions/actionTypes'
import { getNewReleaseSongWorker } from '../sagaWorker/newReleaseSongWorker';


export function* getNewReleaseSongWatcher(){
  yield takeLatest(type.GET_NEW_RELEASE_SONG, getNewReleaseSongWorker);
}