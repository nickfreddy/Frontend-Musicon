import * as type from './actionTypes';

export const getRecomendedSongAction = (limit, callback = () => {}) => ({type: type.GET_RECOMENDED_SONG, payload: limit, callback});
export const setRecomendedSongAction = (songs) => ({type: type.SET_RECOMENDED_SONG, payload: songs});
export const setLoadingRecomendedSongAction = () => ({type: type.SET_LOADING_RECOMENDED_SONG});
export const unsetLoadingRecomendedSongAction = () => ({type: type.UNSET_LOADING_RECOMENDED_SONG});
export const resetRecomendedSongAction =() => ({type: type.RESET_RECOMENDED_SONG});