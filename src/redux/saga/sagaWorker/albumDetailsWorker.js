import { put } from 'redux-saga/effects';
import { setAlbumDetailsAction, setLoadingAlbumDetailsAction, unsetLoadingAlbumDetailsAction } from '../../actions/albumDetailsAction';
import { setSongOnlyToPlaylistDetailAction } from '../../actions/playlistDetailAction';
import { getAlbumDetails } from '../../Api/albumDetailsAPI';

export function* getAlbumDetailsWorker (action){
  try{
    yield put(setLoadingAlbumDetailsAction());
    const token = localStorage.getItem('token');
    const response = yield getAlbumDetails(action.payload, token);
    if(response.data.album){
      yield put(setSongOnlyToPlaylistDetailAction(response.data.album.songs)); //its required because playlistDetailReducer already integrated with player
      yield put(setAlbumDetailsAction(response.data.album));
      yield put(unsetLoadingAlbumDetailsAction())
    }else{
      yield put(unsetLoadingAlbumDetailsAction());
    }
  }catch(err){
    console.log('ERR ON GET ALBUM DETAILS AT ALBUM DETAILS WORKER, DETAILS: ', err)
    yield put(unsetLoadingAlbumDetailsAction())
  }
}