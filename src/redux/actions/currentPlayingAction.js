import * as type from './actionTypes';

export const setCurrentPlayingAction = (songData) => ({type: type.SET_CURRENT_PLAYING, payload: songData});
export const setPlayCurrentPlayingAction = () => ({type: type.SET_PLAY_CURRENT_PLAYING});
export const unsetPlayCurrentPlayingAction = () => ({type: type.UNSET_PLAY_CURRENT_PLAYING});
export const resetCurrentPlayingAction =() => ({type: type.RESET_CURRENT_PLAYING});
export const enablePlayerAction = () => ({type: type.ENABLE_PLAYER});
export const disablePlayerAction = () => ({type: type.DISABLE_PLAYER});
export const enableShufflePlayingAction = () => ({type: type.ENABLE_SHUFFLE_PLAYING});
export const disableShufflePlayingAction = () => ({type: type.DISABLE_SHUFFLE_PLAYING});
export const enableRepeatPlayingAction = () => ({type: type.ENABLE_REPEAT_PLAYING});
export const disableRepeatPlayingAction = () => ({type: type.DISABLE_REPEAT_PLAYING});

export const setLikeCurrentPlayingAction = () => ({type: type.SET_LIKE_CURRENT_PLAYING});
export const unsetLikeCurrentPlaylingAction = () => ({type: type.UNSET_LIKE_CURRENT_PLAYING});