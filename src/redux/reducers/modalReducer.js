import * as type from '../actions/actionTypes'
const initialState = {
  openAuthModal: false,
  openCreatePlaylistModal: false,
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
    }
    default: return state;
  }
}

export default modalReducer
