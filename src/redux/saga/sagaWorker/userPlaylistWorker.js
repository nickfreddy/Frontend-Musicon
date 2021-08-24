import {
  deleteLocalUserPlaylistAction,
  setFailedInfoUserPlaylistAction,
  setLoadingUserPlaylistAction,
  setSuccesInfoUserPlaylistAction,
  setUserPlaylistAction,
  unsetLoadingUserPlaylistAction
} from "../../actions/userPlaylistAction";
import { put } from 'redux-saga/effects'
import {
  deleteUserPlaylist,
  getPlaylistByUserId,
  postUserPlaylist
} from "../../Api/userPlaylistAPI";
import FormData from "form-data";

export function* getUserPlaylistWorker(action) {
  try {
    yield put(setLoadingUserPlaylistAction()) //start the loading
    const userId = localStorage.getItem('user_id'); //getting data from localStorage
    const token = localStorage.getItem('token');
    const response = yield getPlaylistByUserId(userId, token);
    if (response.data.data) {
      yield put(setUserPlaylistAction(response.data.data)); //simpan data di reducer
      yield put(unsetLoadingUserPlaylistAction()); //stop the loading signal
      yield put(setSuccesInfoUserPlaylistAction("Data Loaded Succesfully"))
      action.callback();
    } else {
      yield put(unsetLoadingUserPlaylistAction());
      yield put(setFailedInfoUserPlaylistAction("Failed to load data from server"))
    }

  } catch (error) {
    console.log('ERROR ON GETUSER PAYLIST WORKER details', error.response);
    yield put(setFailedInfoUserPlaylistAction("Failed to load data from server"));
    yield put(unsetLoadingUserPlaylistAction());
  }
};

export function* postUserPlaylistWorker(action) {
  yield put(setLoadingUserPlaylistAction());
  const { playlistTitle, playlistImage, description } = action.payload;
  const data = new FormData();
  const token = localStorage.getItem('token')
  data.append("playlistTitle", playlistTitle);
  if (!(typeof playlistImage === 'string')) { //check if playlist image is string (url) dont update it !!!!
    data.append("playlistImage", playlistImage);
  }
  data.append("description", description);
  const response = yield postUserPlaylist(data, token);
  console.log('POST NEW PLAYLIST TO USER SUCCES', response)
  yield put(unsetLoadingUserPlaylistAction());
  action.callback();
};

export function* deleteUserPlaylistWorker(action) {
  try {
    yield put(setLoadingUserPlaylistAction());
    const token = localStorage.getItem('token');
    const response = yield deleteUserPlaylist(action.payload, token)
    if (response.data.message) {
      yield put(deleteLocalUserPlaylistAction(action.payload)); //delete local stored playlist
      yield put(unsetLoadingUserPlaylistAction());
      yield put(setSuccesInfoUserPlaylistAction(response.data.message))
      action.callback();
    }else{
      yield put(unsetLoadingUserPlaylistAction());
      yield put(setFailedInfoUserPlaylistAction("delete playlist Failed"))
    }
  } catch (err) {
    console.log('ERROR DELETING PLAYLIST TO SERVER DETAILS: ', err);
    yield put(setFailedInfoUserPlaylistAction("Failed to load data from server"));
    yield put(unsetLoadingUserPlaylistAction());
  }
}