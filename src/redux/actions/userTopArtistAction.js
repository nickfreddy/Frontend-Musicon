import * as type from './actionTypes';

export const getUserTopArtistAction = (page, limit) =>({type: type.GET_USER_TOP_ARTIST, payload:{page, limit}}); //used by saga
export const setUserTopArtistAction = (artists) => ({type: type.SET_USER_TOP_ARTIST, payload: artists});
export const setLoadingUserTopArtistAction = () => ({type: type.SET_LOADING_USER_TOP_ARTIST});
export const unsetLoadingUserTopArtistAction = () => ({type: type.UNSET_LOADING_USER_TOP_ARTIST});
