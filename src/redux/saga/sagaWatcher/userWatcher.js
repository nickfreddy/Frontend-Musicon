import { takeLatest } from 'redux-saga/effects';
import * as type from '../../actions/actionTypes'
import { getLogedInUserWorker, signInUserWorker, signUpUserWorker } from '../sagaWorker/userWorker';

export function* signUpUserWatcher() {
  yield takeLatest(type.REGISTER_USER, signUpUserWorker);
}
export function* signInUserWatcher() {
  yield takeLatest(type.SIGN_IN_USER, signInUserWorker);
}

export function* getLogedInUserWatcher(){
  yield takeLatest(type.GET_USER, getLogedInUserWorker);
}