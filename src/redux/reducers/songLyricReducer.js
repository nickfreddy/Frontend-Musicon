import * as type from '../actions/actionTypes';

const initialState = {
  data: "", //lyric is a string
  loading: false
}

const songLyricReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_SONG_LYRIC: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_SONG_LYRIC: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_SONG_LYRIC: return {
      ...state,
      loading: false
    }
    default: return state
  }
}

export default songLyricReducer;