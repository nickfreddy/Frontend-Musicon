import * as type from '../actions/actionTypes.js';

const initialState = {
  data: [
    // {
    //   "songTitle": "Tone Deaf",
    //   "songImage": "https://i.scdn.co/image/ab67616d0000b2736851bc06fc0d85bbe74cffd7",
    //   "_id": "611fb58cf343941863d7437b",
    //   "id": "611fb58cf343941863d7437b"
    // },
    // {}
  ],
  loading: false
};

const userTopSongsReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_USER_TOP_SONGS: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_USER_TOP_SONGS: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_USER_TOP_ARTIST: return {
      ...state,
      loading: false
    }
    default: return state
  }
}

export default userTopSongsReducer;