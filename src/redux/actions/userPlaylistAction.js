import * as type from './actionTypes';

export const getUserPlaylistAction = (callback = () => { }) => ({ type: type.GET_USER_PLAYLIST, callback });
export const setUserPlaylistAction = (data, callback = () => { }) => ({ type: type.SET_USER_PLAYLIST, payload: data, callback });
export const setLoadingUserPlaylistAction = () => ({ type: type.SET_LOADING_USER_PLAYLIST });
export const unsetLoadingUserPlaylistAction = () => ({ type: type.UNSET_LOADING_USER_PLAYLIST });
export const setFailedInfoUserPlaylistAction = (message) => ({ type: type.SET_FAILED_INFO_USER_PLAYLIST, payload: message });
export const setSuccesInfoUserPlaylistAction = (message) => ({ type: type.SET_SUCCESS_INFO_USER_PLAYLIST, payload: message });
export const unsetInfoUserPlaylistAction = () => ({ type: type.UNSET_INFO_USER_PLAYLIST });

export const postUserPlaylistAction = (playlistTitle, playlistImage, description, callback = () => { }) => ({
  type: type.POST_USER_PLAYLIST,
  payload: {
    playlistTitle,
    playlistImage,
    description
  },
  callback
}); //CREATE NEW PLAYLIST

export const deleteUserPlaylistAction = (playlist_id, callback = () => { }) => ({ type: type.DELETE_USER_PLAYLIST, payload: playlist_id, callback});
export const deleteLocalUserPlaylistAction = (playlist_id) => ({type: type.DELETE_LOCAL_USER_PLAYLIST, payload: playlist_id});