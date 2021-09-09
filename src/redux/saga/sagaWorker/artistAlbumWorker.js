import {put} from 'redux-saga/effects';
import { setArtistAlbumAction, setLoadingArtistAlbumAction, unsetLoadingArtistAlbumAction } from '../../actions/artistAlbumAction';
import { getArtistAlbum } from '../../Api/artistAlbumAPI';

export function* getArtistAlbumWorker(action){
  try{
    yield put(setLoadingArtistAlbumAction());
    const token = localStorage.getItem('token');
    const response = yield getArtistAlbum(action.payload,token);
    if(response.data){
      yield put(setArtistAlbumAction(response.data.data));
      yield put (unsetLoadingArtistAlbumAction());
    }else{
      // console.log('ERROR SETTING DATA TO REDUCER IN GET ARTIST ALBUM WORKER DETAILS : ', response );
      yield put(unsetLoadingArtistAlbumAction());
    }

  }catch(err){
    // console.log('ERROR ON GETTING ARTIST ALBUM WORKER', err);
    yield put(unsetLoadingArtistAlbumAction())
  }
}