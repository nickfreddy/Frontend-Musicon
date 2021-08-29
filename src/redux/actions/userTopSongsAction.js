import * as type from './actionTypes';

export const getUserTopSongsAction = (page, limit) => ({type: type.GET_USER_TOP_SONGS, payload:{
  page,
  limit
}}); //used by saga

export const setUserTopSongsAction = (songs) => ({type: type.SET_USER_TOP_SONGS, payload: songs});
export const setLoadingUserTopSongsAction = () => ({type: type.SET_LOADING_USER_TOP_SONGS});
export const unsetLoadingUserTopSongsAction = () => ({type: type.UNSET_LOADING_USER_TOP_SONGS});