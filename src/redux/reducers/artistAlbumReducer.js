import * as type from '../actions/actionTypes';

const initialState = {
  data: [
    //reseponse data dari server
  ],
  loading: false
}


const artistAlbumReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_ARTIST_ALBUM: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_ARTIST_ALBUM: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_ARTIST_ALBUM: return {
      ...state,
      loading: false
    }
    case type.RESET_ARTIST_ALBUM: return initialState
    default: return state
  }
}

export default artistAlbumReducer;