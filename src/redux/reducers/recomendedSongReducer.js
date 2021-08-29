import * as type from '../actions/actionTypes';

const initialState = {
  data: [
    // {
    //   "songTitle": "No",
    //   "songDuration": 141,
    //   "songImage": "https://i.scdn.co/image/ab67616d0000b2733ca0e7cfde9ad7cd3efbc59a",
    //   "audio": "spotify:track:32DHL5WTY8SbHAqMXeighI",
    //   "_id": "611fb591f343941863d74499",
    //   "albumId": {
    //     "albumTitle": "No",
    //     "_id": "611fb58af343941863d74345",
    //     "id": "611fb58af343941863d74345"
    //   },
    //   "artistId": {
    //     "_id": "611fb588f343941863d7431e",
    //     "name": "Rainych",
    //     "photo": "https://i.scdn.co/image/ab6761610000e5eb8dcef2d62133a6affb1eb167",
    //     "id": "611fb588f343941863d7431e"
    //   },
    //   "tags": "No, No, Rainych",
    //   "id": "611fb591f343941863d74499"
    // },
  ],
  loading: false
}

const recomendedSongReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_RECOMENDED_SONG: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_RECOMENDED_SONG: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_RECOMENDED_SONG: return {
      ...state,
      loading: false
    };
    case type.RESET_RECOMENDED_SONG: return initialState;
    default: return state;
  }
}

export default recomendedSongReducer;