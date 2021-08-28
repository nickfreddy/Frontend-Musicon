import {put} from 'redux-saga/effects';
import { setLoadingNewReleaseSongAction, setNewReleaseSongAction, unsetLoadingNewReleaseSongAction } from '../../actions/newReleaseSongAction';
import { getNewReleaseSong } from '../../Api/newReleaseSong';


export function* getNewReleaseSongWorker (action) { //action.payload isinya value limit
  try{
    yield put(setLoadingNewReleaseSongAction()); // start loading
    const token = localStorage.getItem('token');
    const response = yield getNewReleaseSong(action.payload,token);
    if(response.data.songs){
      yield put(setNewReleaseSongAction(response.data.songs));
      yield put(unsetLoadingNewReleaseSongAction()); // end loading
      action.callback();
    }else{
      console.log('RECEIVED DATA STRUCTURE IS UNKNOWN DETAIL:', response);
      yield put(unsetLoadingNewReleaseSongAction());
    }
  }catch(err){
    console.log('ERROR ON GET NEW RELEASE SONG WORKER DETAILS:', err.response);
    yield put(unsetLoadingNewReleaseSongAction());
  }
}