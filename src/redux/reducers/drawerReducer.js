import * as type from '../actions/actionTypes'
const initialState = {
  open: false
}

const drawerReducer = (state = initialState, action) => {
  switch(action.type){
    case type.TOGGLE_DRAWER_OPEN: return {
      ...state,
      open: !state.open
    };
    default: return state
  }
}

export default drawerReducer