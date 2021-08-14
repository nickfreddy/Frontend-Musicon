import * as type from './actionTypes';

export const logOutUser = () => {
  localStorage.removeItem('token')
  return{type: type.UNSET_USER};
}
export const signUpUser = ( username, fullname, email, password, image = null) =>({
  type: type.REGISTER_USER,
  payload:{
    fullname, 
    username,
    email,
    password,
    image
  }
});

export const setUserAction = (payload) => ({type: type.SET_USER, payload})
export const getLogedInUser = () => ({type: type.GET_USER});
export const setLoadingUserAction = () => ({type: type.SET_LOADING_USER});
export const unsetLoadingUserAction = () => ({type: type.UNSET_LOADING_USER});
export const signInUserAction = (payload) => ({type: type.SIGN_IN_USER, payload}) //payload berisi {email, password};
export const updateUserAction = (id, data) => ({type: type.UPDATE_USER, payload:{id, data}});
export const openInfoLoginModalAction = () => ({type: type.OPEN_LOGIN_INFO_MODAL});
export const closeInfoLoginModalAction = () => ({type: type.CLOSE_LOGIN_INFO_MODAL});
export const openRegisterInfoAction = () => ({type: type.OPEN_REGISTER_INFO});
export const closeRegisterInfoAction = () => ({type: type.CLOSE_REGISTER_INFO});