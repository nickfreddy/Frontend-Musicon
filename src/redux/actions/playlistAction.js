import * as type from './actionTypes';

export const getPlaylistAction = (callback=()=>{}) => ({type: type.GET_PLAYLIST, callback});
export const setPlaylistAction = (data) => ({type: type.SET_PLAYLIST, payload: data});
export const setLoadingPlaylistAction = () => ({type: type.SET_LOADING_PLAYLIST});
export const unsetLoadingPlaylistAction = () => ({type: type.UNSET_LOADING_PLAYLIST}); 