import * as type from '../actions/actionTypes';

const initialState = {
  data: [
    // {
    //   "playlistTitle": "Playlist Mantap Jiwa",
    //   "songs": [
    //     "611fb596f343941863d7458d",
    //     "611fb58cf343941863d74389",
    //     "611fb593f343941863d744dd",
    //   ],
    //   "playlistDuration": "6969",
    //   "playlistImage": "/images/playlists/1629552092311.jpg",
    //   "playlistRating": 3,
    //   "deleted": false,
    //   "_id": "6120fddcb815261715fc2a73",
    //   "description": "adfgasdfasdfasdfasdfasdfasdfasdfasdfasdfadfasdfasdfasdfasdfasdfasdfasdfasdfasdf",
    //   "author": {
    //     "photo": "/images/users/1629740582395.jpg",
    //     "deleted": false,
    //     "_id": "611bb4dd06fc048697b00189",
    //     "username": "gedesurya125",
    //     "fullname": "I Gede Surya Adi Pranata cool",
    //     "email": "gedesurya125@gmail.com",
    //     "password": "$2b$10$N6Iu8QoFB52BUslmd2TBiu2h/XKL.oQoO8ZOGXI.CSGMe2Uqi48oa",
    //     "createdAt": "2021-08-17T13:08:45.169Z",
    //     "updatedAt": "2021-08-23T17:43:02.622Z",
    //     "__v": 0,
    //     "playlists": [],
    //     "id": "611bb4dd06fc048697b00189"
    //   },
    //   "createdAt": "2021-08-21T13:21:32.678Z",
    //   "updatedAt": "2021-08-24T11:53:53.738Z",
    //   "__v": 33,
    //   "id": "6120fddcb815261715fc2a73"
    // },
    // {},
  ],
  loading: false
}

const playlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_PLAYLIST: return {
      ...state,
      data: action.payload
    };

    case type.SET_LOADING_PLAYLIST: return {
      ...state,
      loading: true
    };

    case type.UNSET_LOADING_PLAYLIST: return {
      ...state,
      loading: false
    }
    default: return state;
  }
}

export default playlistReducer;