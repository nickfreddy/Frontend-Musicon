import {put} from 'redux-saga/effects';
import { 
  setLoadingUserTopSongsAction, 
  setUserTopSongsAction, 
  unsetLoadingUserTopSongsAction 
} from '../../actions/userTopSongsAction';
import { getUserTopSongs } from '../../Api/userTopSongsAPI';



export function* getUserTopSongsWorker(action){
  try{
    yield put(setLoadingUserTopSongsAction());
    const user_id = localStorage.getItem('user_id');
    const token = localStorage.getItem('token');
    const {page, limit} = action.payload
    const response = yield getUserTopSongs(user_id,page,limit,token);
    if(response.data.songs){
      yield put(setUserTopSongsAction(response.data.songs));
      yield put(unsetLoadingUserTopSongsAction());
    }else{
      console.log("UNKNOWN DATA STRUCTURE FOUND AT GET USER TOP SONG WORKER");
      yield put(unsetLoadingUserTopSongsAction());
    }
  }catch(err){
    console.log('ERROR ON GETTING USER TOP SONGS FROM SERVER DETAIL: ', err);
    yield put(unsetLoadingUserTopSongsAction())
  }
}