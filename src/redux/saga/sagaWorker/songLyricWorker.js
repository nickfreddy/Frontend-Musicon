import {put} from 'redux-saga/effects';
import { setLoadingSongLyricAction, setSongLyricAction, unsetLoadingSongLyricAction } from '../../actions/songLyricAction';
import { getSongLyric } from '../../Api/songLyricAPI';

export function* getSongLyricWorker(action) {
  try{
    yield put(setLoadingSongLyricAction());
    const token = localStorage.getItem('token');
    const response = yield getSongLyric(action.payload, token);
    if(response.data.lyrics){
      yield put(setSongLyricAction(response.data.lyrics));
      yield put(unsetLoadingSongLyricAction());
    }else{
      console.log('UNKNOWN DATA STRUCTURE RECEIVED ON GET SONG LYRIC WORKER', response);
      yield put(unsetLoadingSongLyricAction());
    }
  }catch(err){
    console.log('ERROR ON GETTING SONG LYRIC ON SONG LYRIC SAGA WORKER', err)
    yield put(unsetLoadingSongLyricAction())
  }
}