import * as type from '../actions/actionTypes'
const initialState = {
  data: [
    // {
    //   "playlistTitle": "Surya songs",
    //   "songs": [],
    //   "playlistDuration": "6969",
    //   "playlistImage": "/images/playlists/1629446281800.jpg",
    //   "playlistRating": 0,
    //   "deleted": false,
    //   "_id": "611f608a647dbad63ed08984",
    //   "description": "some text dfasdf asdf asdf asdfa sdfasdfasd fasdf asdfasdfsa fasdf asdf asdfasdf asdfasdf asdfa sdfasdf asdf asdfasdf asdfasdf asdfasd fasd fasdf ",
    //   "author": "611bb4dd06fc048697b00189",
    //   "createdAt": "2021-08-20T07:58:02.209Z",
    //   "updatedAt": "2021-08-20T07:58:02.209Z",
    //   "__v": 0,
    //   "id": "611f608a647dbad63ed08984"
    // }
  ],
  loading: false,
  info:{
    open: false,
    message: '',
    isFail: false,
  }
}

const userPlaylistReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_USER_PLAYLIST: return {
      ...state,
      data: action.payload
    };
    case type.SET_LOADING_USER_PLAYLIST: return {
      ...state,
      loading: true
    };
    case type.UNSET_LOADING_USER_PLAYLIST: return {
      ...state,
      loading: false
    };
    case type.SET_FAILED_INFO_USER_PLAYLIST: return {
      ...state,
      info: {
        ...state.info,
        open: true,
        message: action.payload,
        isFail: true
      }
    };
    case type.SET_SUCCESS_INFO_USER_PLAYLIST: return {
      ...state,
      info: {
        ...state.info,
        open: true,
        message: action.payload,
        isFail: false
      }
    };
    case type.UNSET_INFO_USER_PLAYLIST: return {
      ...state,
      info: {
        ...state.info,
        open: false,
        message: '',
        isFail: false
      }
    };
    case type.DELETE_LOCAL_USER_PLAYLIST: return {
      ...state,
      data: [...state.data].filter(playlist => playlist._id !== action.payload)
    }
    default: return state 
  }
}

export default userPlaylistReducer;