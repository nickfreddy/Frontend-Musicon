import {put} from 'redux-saga/effects';
import { setLoadingRatingCurrentPlaylistAction, setRatingCurrentPlaylistAction, unsetLoadingRatingCurrentPlaylistAction } from '../../actions/ratingCurrentPlaylistAction';
import { getCurrentPlaylistRating, postCurrentPlaylistRating } from '../../Api/currentPlaylistRating';

export function* getRatingCurrentPlaylistWorker(action){
  try{
    yield put(setLoadingRatingCurrentPlaylistAction());
    const playlistId = action.payload;
    console.log('PLAYLIST ID ON SAGA WORKER', playlistId);
    const token = localStorage.getItem('token');
    const response = yield getCurrentPlaylistRating(playlistId,token);
    if(response.data){ //null and integer value is expected value of response.data.rating
      // console.log('RESPONSE SUCCESS FROM GET RATING CURRENT PLAYLIST WORKER IS', response.data.rating)
      yield put(setRatingCurrentPlaylistAction(playlistId,response.data.rating));
      yield put(unsetLoadingRatingCurrentPlaylistAction());
      action.callback(response.data.rating); // its used
    } else {
      console.log('RECEIVED RESPONSE IS UNKNOWN FROM GET RATING CURRENT PLAYLIST WORKER', response);
      yield put(unsetLoadingRatingCurrentPlaylistAction());
    }
  }catch(err){
    console.log('ERR ON GET RATING CURRENT PLAYLIST DETAILS:', err);
    yield put(unsetLoadingRatingCurrentPlaylistAction())
  }
}

export function* postRatingCurrentPlaylistWorker(action){
  try{
    yield put(setLoadingRatingCurrentPlaylistAction());
    const token = localStorage.getItem("token");
    const {playlistId, rating} = action.payload;
    const params = new URLSearchParams();
    params.append('rating', rating)
    const response = yield postCurrentPlaylistRating(playlistId,params,token);
    if(response.data?.message){
      yield put(setRatingCurrentPlaylistAction(playlistId, rating));
      yield put(unsetLoadingRatingCurrentPlaylistAction());
      action.callback();
    }else{
      console.log('UNKNOWN RESPONSE RECEIVED', response);
      yield put(unsetLoadingRatingCurrentPlaylistAction());
    }
  }catch(err){
    console.log('ERR ON SET RATING CURRENT PLAYLIST DETAILS: ', err);
    yield put(unsetLoadingRatingCurrentPlaylistAction())
  }
}