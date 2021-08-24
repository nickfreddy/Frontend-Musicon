import * as type from './actionTypes';

export const getRatingCurrentPlaylistAction = (playlistId, callback = () => {}) => ({
  type: type.GET_RATING_CURRENT_PLAYLIST,
  payload: playlistId,
  callback
}) // USED BY SAGA

export const postRatingCurrentPlaylistAction = (playlistId, rating, callback =() => {}) => ({
  type: type.POST_RATING_CURRENT_PLAYLIST, payload: {playlistId, rating}, callback
}) // USED BY SAGA

export const setRatingCurrentPlaylistAction = (playlistId, rating) => ({
  type: type.SET_RATING_CURRENT_PLAYLIST,
  payload: {
    playlistId,
    rating
  }
})


export const setLoadingRatingCurrentPlaylistAction = () => ({
  type: type.SET_LOADING_RATING_CURRENT_PLAYLIST
})

export const unsetLoadingRatingCurrentPlaylistAction = () => ({
  type: type.UNSET_LOADING_RATING_CURRENT_PLAYLIST
})