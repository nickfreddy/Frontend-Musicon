import { takeLatest } from 'redux-saga/effects';
import * as type from '../../actions/actionTypes'
import { 
  getLogedInUserWorker, 
  postFacebookDataUserWorker, 
  postGoogleDataUserWorker, 
  signInUserWorker, 
  signUpUserWorker, 
  updateUserWorker 
} from '../sagaWorker/userWorker';

export function* signUpUserWatcher() {
  yield takeLatest(type.REGISTER_USER, signUpUserWorker);
};
export function* signInUserWatcher() {
  yield takeLatest(type.SIGN_IN_USER, signInUserWorker);
};

export function* getLogedInUserWatcher(){
  yield takeLatest(type.GET_USER, getLogedInUserWorker);
};
export function* updateUserWatcher(){
  yield takeLatest(type.UPDATE_USER, updateUserWorker);
};

export function* postGoogleDataUserWatcher(){
  yield takeLatest(type.POST_GOOGLE_DATA_USER, postGoogleDataUserWorker);
}

export function* postFacebookDataUserWatcher(){
  yield takeLatest(type.POST_FACEBOOK_DATA_USER, postFacebookDataUserWorker);
}

