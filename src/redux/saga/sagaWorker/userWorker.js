import { put } from 'redux-saga/effects';
import { openInfoLoginModalAction, openRegisterInfoAction, setLoadingUserAction, setUserAction, unsetLoadingUserAction, updateLocalUserAction } from '../../actions/userAction'
import { getUserById, signInUser, signUpUser, updateUserById } from '../../Api/userAPI';
import FormData from 'form-data';

export function* signUpUserWorker(action) {
  try {
    yield put(setLoadingUserAction());
    const params = new URLSearchParams();
    const { username, fullName, email, password } = action.payload;
    params.append('username', username);
    params.append('fullname', fullName);
    params.append('email', email);
    params.append('password', password);
    const response = yield signUpUser(params);
    if (Boolean(response.data.token && response.data.loggedUser._id)) {
      //SIGN UP SUCCESS
      yield put(setUserAction(response.data.loggedUser));
      localStorage.setItem('token', `Bearer ${response.data.token}`);
      localStorage.setItem('user_id', response.data.loggedUser._id);
      yield put(unsetLoadingUserAction());
      action.callback();
    } else {
      //SIGN UP FAILED
      console.log('ERROR ON USER REGISTRATION DETAILS:', response.data);
      yield put(unsetLoadingUserAction());
      yield put(openRegisterInfoAction());
    }
  } catch (err) {
    if (err.response.status === 401) {
      yield put(openRegisterInfoAction("email or username has been registered"));
    } else {
      console.log('ERROR ON signUpUserWorker SAGA WORKER DETAILS:', err.message);
    }
    yield put(unsetLoadingUserAction());
  }
}

export function* signInUserWorker(action) {
  try {
    yield put(setLoadingUserAction());
    const params = new URLSearchParams();
    const { username, password } = action.payload;
    params.append('username', username);
    params.append('password', password);
    const response = yield signInUser(params);
    if (Boolean(response.data.token && response.data.loggedUser._id)) {
      //SIGN UP SUCCESS
      yield put(setUserAction(response.data.loggedUser));
      localStorage.setItem('token', `Bearer ${response.data.token}`);
      localStorage.setItem('user_id', response.data.loggedUser._id);
      yield put(unsetLoadingUserAction());
      action.callback();
    } else {
      //SIGN UP FAILED
      console.log('ERROR ON USER SIGN IN DETAILS:', response.data);
      yield put(unsetLoadingUserAction());
      yield put(openInfoLoginModalAction());
    }
  } catch (err) {
    if (err) {
      yield put(openInfoLoginModalAction(err.response.data.errors[0]));
    } else {
      console.log('ERROR ON signInUserWorker SAGA WORKER DETAILS:', err.message);
    }

    yield put(unsetLoadingUserAction())
  }
}

export function* getLogedInUserWorker(action) {
  yield put(setLoadingUserAction());
  // console.log("get loged in user worker called")
  const user_id = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');
  if (Boolean(token) && Boolean(user_id)) {
    //do action
    try {
      const response = yield getUserById(user_id, token);
      yield put(setUserAction(response.data.data));
      yield put(unsetLoadingUserAction());
      action.callback();
    } catch (err) {
      console.log('ERROR GETTING DATA USER DETAIL:', err.response);
      yield put(unsetLoadingUserAction());

    }
  } else {
    console.log('NO USER LOGGED IN BRO');
    yield put(unsetLoadingUserAction());
  }
}

export function* updateUserWorker(action) {
  try {
    yield put(setLoadingUserAction());
    const { fullname, photo } = action.payload;
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    const data = new FormData();
    data.append("fullname", fullname);
    if(typeof photo !== "string"){
      data.append("photo", photo);
    }
    const response = yield updateUserById(user_id, data, token);
    if(response.data.data){
      yield put(updateLocalUserAction(fullname,photo));
      yield action.callback();
      yield put(unsetLoadingUserAction())
    }else{
      console.log("ERROR DATA ON RESPONSE.DATA NOT FOUND");
      yield put(unsetLoadingUserAction())
    }
  } catch (err) {
    console.log('ERROR ON UPDATE USER DATA TO SERVER DETAIL : ', err);
    yield put(unsetLoadingUserAction())
  }
}