import * as type from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
}

const albumDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_ALBUM_DETAILS: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_ALBUM_DETAILS: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_ALBUM_DETAILS: return{
      ...state,
      loading: false
    };
    case type.RESET_ALBUM_DETAILS: return initialState
    default: return state
  }
}

export default albumDetailsReducer