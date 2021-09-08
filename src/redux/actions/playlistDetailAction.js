import * as type from './actionTypes';

export const getPlaylistDetailAction = (playlistId, callback=()=>{}) => ({ type: type.GET_PLAYLIST_DETAIL, payload: playlistId, callback }) // user token will be provided in saga worker, it can be used both get user playlist details and other playlist detail, the owner of the playlist will be checked later in the detail playlist page by comparing the author id of playlist and id of logged in user
export const setPlaylistDetailAction = (data) => ({ type: type.SET_PLAYLIST_DETAIL, payload: data });
export const setLoadingPlaylistDetailAction = () => ({ type: type.SET_LOADING_PLAYLIST_DETAIL });
export const unsetLoadingPlayistDetailAction = () => ({ type: type.UNSET_LOADING_PLAYLIST_DETAIL });
export const resetPlaylistDetailAction = () => ({ type: type.RESET_PLAYLIST_DETAIL });

//ADD SONG TO PLAYLIST ACTION================================
export const addSongToPlaylistAction = (songDetail, playlistId, callback = () => {}) => ({
  type: type.ADD_SONG_TO_PLAYLIST_DETAIL, 
  payload:{
    songDetail, //SONG DETAIL IS AN OBJECT OF SONG DATA THAT RECEIVED FROM SEARCH RESULT
    playlistId, //playlist IS AN STRING ID OF PLAYLIST
  },
  callback
});
export const addSongToLocalPlaylistAction = (songDetail) => ({type: type.ADD_SONG_TO_LOCAL_PLAYLIST_DETAIL, payload: songDetail})

//DELETE SONG FROM PLAYLIST ACTION============================
export const deleteSongFromPlaylistAction = (playlistId, songId, callback = () => {}) => ({
  type: type.DELETE_SONG_FROM_PLAYLIST_DETAIL,
  payload:{
    playlistId,
    songId
  },
  callback
})
export const deleteSongFromLocalPlaylistDetailAction = (songId) => ({type: type.DELETE_SONG_FROM_LOCAL_PLAYLIST_DETAIL, payload: songId});

//UPDATE PLAYLIST DETAIL ACTION==============================
export const updatePlaylistDetailAction = (playlistId, playlistTitle, playlistImage, description, callback = ()=> {}) => ({
  type: type.UPDATE_PLAYLIST_DETAIL,
  payload:{
    playlistId,
    playlistTitle,
    playlistImage,
    description
  },
  callback
})
export const updateLocalPlaylistDetailAction = ( playlistTitle, playlistImage, description) => ({
  type: type.UPDATE_LOCAL_PLAYLIST_DETAIL,
  payload:{
    playlistTitle,
    playlistImage,
    description
  }
}) //used to update local playlist detail


export const setLikeSongInPlaylistDetailAction = (songId) => ({
  type: type.SET_LIKE_SONG_IN_PLAYLIST_DETAIL,
  payload: songId
});

export const unsetLikeSongInPlaylistDetailAction = (songId) => ({
  type: type.UNSET_LIKE_SONG_IN_PLAYLIST_DETAIL,
  payload: songId
})

/**
 * 
 * @param {array} songs 
 * @returns 
 */
export const setSongOnlyToPlaylistDetailAction = (songs) => ({
  type: type.SET_SONG_ONLY_TO_PLAYLIST_DETAIL,
  payload: songs
})