import * as type from '../actions/actionTypes'
const initialState = {
  openAuthModal: false,
  openCreatePlaylistModal: false,
  openLyricModal: false
}


const modalReducer = (state = initialState, action) => {
  switch(action.type){
    case type.OPEN_MODAL_AUTH: return {
      ...state,
      openAuthModal: true
    };
    case type.CLOSE_MODAL_AUTH: return {
      ...state,
      openAuthModal: false
    };
    case type.OPEN_CREATE_PLAYLIST_MODAL: return {
      ...state,
      openCreatePlaylistModal: true,
    };
    case type.CLOSE_CREATE_PLAYLIST_MODAL: return {
      ...state,
      openCreatePlaylistModal: false
    };
    case type.OPEN_LYRIC_MODAL: return {
      ...state,
      openLyricModal: true
    };
    case type.CLOSE_LYRIC_MODAL: return {
      ...state,
      openLyricModal: false
    }
    default: return state;
  }
}

export default modalReducer
