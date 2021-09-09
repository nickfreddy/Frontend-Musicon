import {put} from 'redux-saga/effects';
import { setLoadingUserTopArtistAction, setUserTopArtistAction, unsetLoadingUserTopArtistAction } from '../../actions/userTopArtistAction';
import { getUserTopArtists } from '../../Api/userTopArtist';

export function* getUserTopArtistWorker(action){
  try{
    yield put(setLoadingUserTopArtistAction());
    const token = localStorage.getItem('token');
    const user_id = localStorage.getItem('user_id');
    const {page, limit} = action.payload;
    const response = yield getUserTopArtists(user_id, page, limit,token);
    if(response.data.artists){
      yield put(setUserTopArtistAction(response.data.artists));
      yield put(unsetLoadingUserTopArtistAction());
    }else{
      // console.log("UNKNOWN DATA STRUCTURE GET FROM SERVER");
      yield put(unsetLoadingUserTopArtistAction());
    }
  }catch(err){
    // console.log('ERROR ON GETTING USER TOP ARTIS ON SAGA WORKER DETAILS: ', err);
    yield put(unsetLoadingUserTopArtistAction());
  }
}