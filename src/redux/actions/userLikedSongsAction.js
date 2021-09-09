import * as type from './actionTypes';

/**
 * Getting user liked song by user id
 * @param {string} userId
 * @param {function} callback 
 * @returns 
 */
export const getUserLikedSongsAction = (userId, callback = () => {}) => ({type: type.GET_USER_LIKED_SONGS, payload: userId, callback});

/**
 * Set liked songs that we had fetched from server to the reducers
 * @param {[]}} likedSongs 
 * @returns 
 */
export const setUserLikedSongsAction = (likedSongs) => ({type: type.SET_USER_LIKED_SONGS, payload: likedSongs});


