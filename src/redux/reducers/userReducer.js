import * as type from '../actions/actionTypes';
const initialState = {
  data:{},
  isLoggedIn: false,
}


const userReducer = (state = initialState, action) => {
  switch(action.type){
    case type.SET_USER: return {
      ...state,
      data: action.payload
    };
    default: return state
  }
}

export default userReducer
