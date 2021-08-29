import * as type from './actionTypes';

export const getSongLyricAction = (songId, callback = () => { }) => ({type: type.GET_SONG_LYRIC, payload: songId, callback});
export const setSongLyricAction = (songLyric) => ({type: type.SET_SONG_LYRIC, payload: songLyric});
export const setLoadingSongLyricAction = () => ({type: type.SET_LOADING_SONG_LYRIC});
export const unsetLoadingSongLyricAction = () => ({type: type.UNSET_LOADING_SONG_LYRIC});