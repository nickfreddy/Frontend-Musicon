import {put} from 'redux-saga/effects';
import { setLoadingPlaylistDetailAction, setPlaylistDetailAction, unsetLoadingPlayistDetailAction } from '../../actions/playlistDetailAction';
import { getPlaylistDetail } from '../../Api/playlistDetailAPI';

export function* getPlaylistDetailWorker(action){
  try{
    yield put(setLoadingPlaylistDetailAction());
    const token = localStorage.getItem('token');
    const response = yield getPlaylistDetail(action.payload, token);
    if(response.data.data._id){
      yield put(setPlaylistDetailAction(response.data.data));
      yield put(unsetLoadingPlayistDetailAction());
    }else{
      yield put(unsetLoadingPlayistDetailAction());
    }
  }catch(err){
    console.log('ERROR FROM GET PLAUYLIST DETAIL WORKER DETAILS: ', err.response);
    yield put(unsetLoadingPlayistDetailAction())
  }
}