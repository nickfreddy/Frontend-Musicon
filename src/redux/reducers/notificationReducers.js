import * as type from '../actions/actionTypes';

const initialState = {
  data: {},
  isOpen: false,
  variant: 'info'
}

const notificationReducers = (state = initialState, action) => {
  switch(action.type){
    case type.SET_NOTIFICATION: return {
      ...state,
      data: action.payload
    };
    case type.SET_OPEN_NOTIFICATION: return {
      ...state,
      isOpen: true
    };
    case type.UNSET_OPEN_NOTIFICATION: return {
      ...state,
      isOpen: false
    };
    case type.SET_VARIANT_NOTIFICATION: return {
      ...state,
      variant: action.payload
    };
    case type.UNSET_VARIANT_NOTIFICATION: return {
      ...state,
      variant: 'info'
    };
    case type.RESET_NOTIFICATION: return initialState;
    default: return state;
  }
}

export default notificationReducers