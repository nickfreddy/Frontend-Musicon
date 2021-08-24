import * as type from '../actions/actionTypes';

const initialState = {
  data: [
    // {
    //   "_id": "611fb587f343941863d74318",
    //   "name": "Eminem",
    //   "photo": "https://i.scdn.co/image/ab6761610000e5eba00b11c129b27a88fc72f36b",
    //   "id": "611fb587f343941863d74318"
    // },
    // {
    //   "_id": "611fb588f343941863d7431a",
    //   "name": "Superman Is Dead",
    //   "photo": "https://i.scdn.co/image/ab6761610000e5eb1a296721e394580ca22c2e65",
    //   "id": "611fb588f343941863d7431a"
    // },
    // {
    //   "_id": "611fb588f343941863d7431e",
    //   "name": "Rainych",
    //   "photo": "https://i.scdn.co/image/ab6761610000e5eb8dcef2d62133a6affb1eb167",
    //   "id": "611fb588f343941863d7431e"
    // }
  ],
  loading: false
};

const userTopArtistReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_USER_TOP_ARTIST: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_USER_TOP_ARTIST: return{
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_USER_TOP_ARTIST: return{
      ...state,
      loading: false
    }
    default: return state
  }
} 

export default userTopArtistReducer;