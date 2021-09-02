import * as type from "./actionTypes";

export const getAlbumDetailsAction = (albumId) => ({type: type.GET_ALBUM_DETAILS, payload: albumId});
export const setAlbumDetailsAction = (data) => ({type: type.SET_ALBUM_DETAILS, payload: data});
export const setLoadingAlbumDetailsAction = () => ({type: type.SET_LOADING_ALBUM_DETAILS});
export const unsetLoadingAlbumDetailsAction = () => ({type: type.UNSET_LOADING_ALBUM_DETAILS});
export const resetAlbumDetailsAction = () => ({type: type.RESET_ALBUM_DETAILS});