import * as type from '../actions/actionTypes';
const initialState = {
  data: {
    //it got from response.data.loggedUser, token response.data.token
    "playlists": [],
    "photo": "",
    "deleted": false,
    "_id": "",
    "username": "",
    "fullname": "",
    "email": "",
    "createdAt": "",//"2021-08-17T13:08:45.169Z",
    "updatedAt": "",//"2021-08-17T13:08:45.169Z",
    "id": ""
  },
  isLoggedIn: false,
  openRegisterInfoModal: false,
  openLoginInfoModal: false,
  info: '',
  loading: false, 
}


const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SET_USER: return {
      ...state,
      data: action.payload,
      isLoggedIn: true,
    };

    case type.UNSET_USER: return initialState; //delete user info and set LoggedIn status to false

    case type.SET_LOADING_USER: return {
      ...state,
      loading: true,
    };
    case type.UNSET_LOADING_USER: return {
      ...state,
      loading: false
    };
    case type.OPEN_LOGIN_INFO_MODAL: return{
      ...state,
      openLoginInfoModal: true,
      info: action?.payload
    };
    case type.CLOSE_LOGIN_INFO_MODAL: return {
      ...state,
      openLoginInfoModal: false,
      info: ''
    };
    case type.OPEN_REGISTER_INFO_MODAL: return {
      ...state,
      openRegisterInfoModal: true,
      info: action?.payload
    };
    case type.CLOSE_REGISTER_INFO_MODAL: return {
      ...state,
      openRegisterInfoModal: false,
      info: ''
    }
    default: return state
  }
}

export default userReducer
