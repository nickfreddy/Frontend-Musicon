import * as type from './actionTypes';

export const getPlaylistDetailAction = (playlistId) => ({ type: type.GET_PLAYLIST_DETAIL, payload: playlistId }) // user token will be provided in saga worker, it can be used both get user playlist details and other playlist detail, the owner of the playlist will be checked later in the detail playlist page by comparing the author id of playlist and id of logged in user
export const setPlaylistDetailAction = (data) => ({ type: type.SET_PLAYLIST_DETAIL, payload: data });
export const setLoadingPlaylistDetailAction = () => ({ type: type.SET_LOADING_PLAYLIST_DETAIL });
export const unsetLoadingPlayistDetailAction = () => ({ type: type.UNSET_LOADING_PLAYLIST_DETAIL });
export const resetPlaylistDetailAction = () => ({ type: type.RESET_PLAYLIST_DETAIL });