import * as type from './actionTypes';

export const getArtistAlbumAction = (artistId) => ({type: type.GET_ARTIST_ALBUM, payload: artistId}); // SAGA
export const setArtistAlbumAction = (data) => ({type: type.SET_ARTIST_ALBUM, payload: data});
export const setLoadingArtistAlbumAction = () => ({type: type.SET_LOADING_ARTIST_ALBUM});
export const unsetLoadingArtistAlbumAction = () => ({type: type.UNSET_LOADING_ARTIST_ALBUM});
export const resetArtistAlbumAction = () => ({type: type.RESET_ARTIST_ALBUM});