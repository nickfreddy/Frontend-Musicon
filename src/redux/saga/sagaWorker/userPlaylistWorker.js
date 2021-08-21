import { setFailedInfoUserPlaylistAction, setLoadingUserPlaylistAction, setSuccesInfoUserPlaylistAction, setUserPlaylistAction, unsetLoadingUserPlaylistAction } from "../../actions/userPlaylistAction";
import {put} from 'redux-saga/effects'
import { getPlaylistByUserId } from "../../Api/userPlaylistAPI";

export function* getUserPlaylistWorker(){
  try {
    yield put(setLoadingUserPlaylistAction()) //start the loading
    const userId = localStorage.getItem('user_id'); //getting data from localStorage
    const token = localStorage.getItem('token');
    const response = yield getPlaylistByUserId(userId,token);
    if(response.data.data){
      yield put(setUserPlaylistAction(response.data.data)); //simpan data di reducer
      yield put(unsetLoadingUserPlaylistAction()); //stop the loading signal
      yield put(setSuccesInfoUserPlaylistAction("Data Loaded Succesfully"))
    }else{
      yield put(unsetLoadingUserPlaylistAction());
      yield put(setFailedInfoUserPlaylistAction("Failed to load data from server"))
    }

  } catch (error) {
    console.log('ERROR ON GETUSER PAYLIST WORKER details', error.response);
    yield put(setFailedInfoUserPlaylistAction("Failed to load data from server"));
    yield put(unsetLoadingUserPlaylistAction());
  }
}