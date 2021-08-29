import * as type from '../actions/actionTypes';

const initialState = {
  playlistId: '',
  rating: null,
  loading: false
};

const currentPlaylistRatingReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_RATING_CURRENT_PLAYLIST: return {
      ...state,
      ...action.payload
    };
    case type.SET_LOADING_RATING_CURRENT_PLAYLIST: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_RATING_CURRENT_PLAYLIST: return {
      ...state,
      loading: false
    }
    default: return state
  }
}

export default currentPlaylistRatingReducer;