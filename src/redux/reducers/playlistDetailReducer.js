import * as type from '../actions/actionTypes'

const initialState = {
  data: {
    // "playlistTitle": "Surya songs",
    // "songs": [
    //   {
    //     "songTitle": "Theme For The People",
    //     "songDuration": "116",
    //     "songImage": "https://i.scdn.co/image/ab67616d0000b2731a37c926465567557e294c51",
    //     "audio": "https://i.scdn.co/image/ab67616d0000b273c04e45a5961ed74625c7c03a",
    //     "_id": "611fb596f343941863d7458f",
    //     "albumId": {
    //       "albumTitle": "Sunset di Tanah Anarki",
    //       "id": "611fb589f343941863d74333",
    //       "_id": "611fb589f343941863d74333"
    //      }
    //     "artistId": {
    //       "_id": "611fb589f343941863d74326",
    //       "name": "Logic",
    //       "id": "611fb589f343941863d74326"
    //     },
    //     "id": "611fb596f343941863d7458f"
    //   }
    // ],
    // "playlistDuration": "6969",
    // "playlistImage": "/images/playlists/1629446281800.jpg",
    // "playlistRating": 0,
    // "deleted": false,
    // "_id": "611f608a647dbad63ed08984",
    // "description": "some text dfasdf asdf asdf asdfa sdfasdfasd fasdf asdfasdfsa fasdf asdf asdfasdf asdfasdf asdfa sdfasdf asdf asdfasdf asdfasdf asdfasd fasd fasdf ",
    // "author": {
    //   "_id": "611bb4dd06fc048697b00189",
    //   "username": "gedesurya125",
    //   "fullname": "gede surya surya",
    //   "id": "611bb4dd06fc048697b00189"
    // },
    // "createdAt": "2021-08-20T07:58:02.209Z",
    // "updatedAt": "2021-08-20T15:22:06.283Z",
    // "__v": 4,
    // "id": "611f608a647dbad63ed08984"
  },
  loading: false
}

const playlistDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_PLAYLIST_DETAIL: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_PLAYLIST_DETAIL: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_PLAYLIST_DETAIL: return {
      ...state,
      loading: false
    };
    case type.ADD_SONG_TO_LOCAL_PLAYLIST_DETAIL: return {
      ...state,
      data: {
        ...state.data,
        songs: [
          ...state.data.songs,
          action.payload // payload is an object of song details
        ]
      }
    }
    case type.DELETE_SONG_FROM_LOCAL_PLAYLIST_DETAIL: return {
      ...state,
      data: {
        ...state.data,
        songs: [...state.data.songs].filter(song => song._id !== action.payload)
      }
    };
    case type.UPDATE_LOCAL_PLAYLIST_DETAIL: return {
      ...state,
      data: {
        ...state.data,
        ...action.payload // it contain {playlistTitle, playlistImage, playlistRating, description}
      }
    }
    
    case type.SET_LIKE_SONG_IN_PLAYLIST_DETAIL: return {
      ...state,
      data:{
        ...state.data,
        songs: state.data.songs.map(song => {
          if(song._id !== action.payload) return song; //song is object inside songs
          return {
            ...song,
            isLiked: true
          }
        })
      }
    };

    case type.UNSET_LIKE_SONG_IN_PLAYLIST_DETAIL: return {
      ...state,
      data:{
        ...state.data,
        songs: state.data.songs.map(song => {
          if(song._id !== action.payload) return song; //song is object inside songs
          return {
            ...song,
            isLiked: false
          }
        })
      }
    };
    case type.SET_USER_LIKED_SONGS: return {
      ...state,
      data:{
        songs: action.payload
      }
    };
    case type.SET_SONG_ONLY_TO_PLAYLIST_DETAIL: return {
      ...state,
      data: {
        songs: action.payload
      }
    }
    case type.RESET_PLAYLIST_DETAIL: return initialState
    default: return state
  }
}
export default playlistDetailReducer;