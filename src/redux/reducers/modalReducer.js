import * as type from '../actions/actionTypes'
const initialState = {
  openAuthModal: false,
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
    }
    default: return state;
  }
}

export default modalReducer
