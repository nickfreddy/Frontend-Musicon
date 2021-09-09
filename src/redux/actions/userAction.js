import * as type from './actionTypes';

//used by saga
export const signUpUserAction = (username, fullName, email, password, callback = () => { }) => ({ type: type.REGISTER_USER, payload: { username, fullName, email, password }, callback });
export const signInUserAction = (username, password, callback = () => { }) => ({ type: type.SIGN_IN_USER, payload: { username, password }, callback })
export const getLogedInUserAction = (callback = () => { }) => ({ type: type.GET_USER, callback });

export const updateUserAction = (fullname, photo, callback = () => { }) => ({
  type: type.UPDATE_USER,
  payload: {
    fullname,
    photo
  },
  callback
});


//use by reducer
export const setUserAction = (payload) => ({ type: type.SET_USER, payload })
export const setLoadingUserAction = () => ({ type: type.SET_LOADING_USER });
export const unsetLoadingUserAction = () => ({ type: type.UNSET_LOADING_USER });
export const openInfoLoginModalAction = (info) => ({ type: type.OPEN_LOGIN_INFO_MODAL, payload: info });
export const closeInfoLoginModalAction = () => ({ type: type.CLOSE_LOGIN_INFO_MODAL });
export const openRegisterInfoAction = (info) => ({ type: type.OPEN_REGISTER_INFO_MODAL, payload: info });
export const closeRegisterInfoAction = () => ({ type: type.CLOSE_REGISTER_INFO_MODAL });
export const logOutUserAction = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user_id');
  return { type: type.UNSET_USER };
}
export const updateLocalUserAction = (fullname, photo) => ({type: type.UPDATE_LOCAL_USER, payload: {fullname, photo}});

export const setGoogleDataUserAction = (googleDataUser) => ({type: type.SET_GOOGLE_DATA_USER, payload: googleDataUser});
export const unsetGoogleDataUserAction = () => ({type: type.UNSET_GOOGLE_DATA_USER});
export const postGoogleDataUserAction = (googleDataUser, callback=()=>{}) => ({type: type.POST_GOOGLE_DATA_USER, payload: googleDataUser, callback});
export const setLoadingGoogleLoginAction = () => ({type: type.SET_LOADING_GOOGLE_LOGIN});
export const unsetLoadingGoogleLoginAction = () => ({type: type.UNSET_LOADING_GOOGLE_LOGIN}); 

export const setFacebookDataUserAction = (facebookDataUser) => ({type: type.SET_FACEBOOK_DATA_USER, payload: facebookDataUser});
export const unsetFacebookDataUserAction = () => ({type: type.UNSET_FACEBOOK_DATA_USER});
export const postFacebookDataUserAction = (facebookDataUser, callback=()=>{}) => ({type: type.POST_FACEBOOK_DATA_USER, payload: facebookDataUser, callback})
export const setLoadingFacebookLoginAction = () => ({type: type.SET_LOADING_FACEBOOK_LOGIN});
export const unsetLoadingFacebookLoginAction = () => ({type: type.UNSET_LOADING_FACEBOOK_LOGIN}); 
