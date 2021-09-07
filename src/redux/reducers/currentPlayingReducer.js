import * as type from '../actions/actionTypes'
const initialState = {
  songDetail: {},
  isPlaying: false,
  disablePlayer: false,
  isShuffleOn: false,
  isRepeatOn: false,
}


const currentPlayingReducer = (state = initialState, action)=>{
  switch(action.type){
    case type.SET_CURRENT_PLAYING: return {
      ...state,
      songDetail: action.payload
    };
    case type.SET_PLAY_CURRENT_PLAYING: return {
      ...state,
      isPlaying: true
    };
    case type.UNSET_PLAY_CURRENT_PLAYING: return {
      ...state,
      isPlaying: false
    };
    case type.ENABLE_PLAYER: return {
      ...state,
      disablePlayer: false
    };
    case type.DISABLE_PLAYER: return {
      ...state,
      disablePlayer: true
    }
    case type.ENABLE_SHUFFLE_PLAYING: return {
      ...state,
      isShuffleOn: true
    };
    case type.DISABLE_SHUFFLE_PLAYING: return {
      ...state,
      isShuffleOn: false
    };
    case type.ENABLE_REPEAT_PLAYING: return {
      ...state,
      isRepeatOn: true
    };
    case type.DISABLE_REPEAT_PLAYING: return {
      ...state,
      isRepeatOn: false
    };
    case type.SET_LIKE_CURRENT_PLAYING: return {
      ...state,
      //change like status
      songDetail: {
        ...state.songDetail,
        isLiked: true
      }
    };
    case type.UNSET_LIKE_CURRENT_PLAYING: return {
      ...state,
      //change like status
      songDetail: {
        ...state.songDetail,
        isLiked: false
      }
    }
    case type.RESET_CURRENT_PLAYING: return initialState;
    default: return state
  }
}

export default currentPlayingReducer;