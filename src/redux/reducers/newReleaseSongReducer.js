import * as type from '../actions/actionTypes';

const initialState = {
  data: [
    // {
    //   "songTitle": "No",
    //   "songImage": "https://i.scdn.co/image/ab67616d0000b2733ca0e7cfde9ad7cd3efbc59a",
    //   "_id": "611fb55a6e9a1d17d1a989d4",
    //   "artistId": {
    //     "albums": [
    //       "611fb5536e9a1d17d1a98880",
    //       "611fb5536e9a1d17d1a98883",
    //       "611fb5536e9a1d17d1a98886"
    //     ],
    //     "deleted": false,
    //     "_id": "611fb5516e9a1d17d1a98859",
    //     "name": "Rainych",
    //     "photo": "https://i.scdn.co/image/ab6761610000e5eb8dcef2d62133a6affb1eb167",
    //     "createdAt": "2021-08-20T13:59:45.035Z",
    //     "updatedAt": "2021-08-20T14:00:01.906Z",
    //     "__v": 0,
    //     "id": "611fb5516e9a1d17d1a98859"
    //   },
    //   "tags": "No, No, Rainych",
    //   "id": "611fb55a6e9a1d17d1a989d4"
    // }
  ],
  loading: false
}

const newReleaseSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_NEW_RELEASE_SONG: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_NEW_RELEASE_SONG: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_NEW_RELEASE_SONG: return {
      ...state,
      loading: false
    };
    case type.RESET_NEW_RELEASE_SONG: return initialState;
    default: return state;
  }
}

export default newReleaseSongReducer;