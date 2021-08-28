import * as type from './actionTypes';

export const getNewReleaseSongAction = (limit, callback = () => {}) => ({type: type.GET_NEW_RELEASE_SONG, payload: limit, callback}); // USED BY SAGA
export const setNewReleaseSongAction = (songs) => ({type: type.SET_NEW_RELEASE_SONG, payload: songs});
export const setLoadingNewReleaseSongAction = () => ({type: type.SET_LOADING_NEW_RELEASE_SONG});
export const unsetLoadingNewReleaseSongAction = () => ({type: type.UNSET_LOADING_NEW_RELEASE_SONG});
export const resetNewReleaseSongAction = () => ({type: type.RESET_NEW_RELEASE_SONG});
