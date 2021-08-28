import { combineReducers} from "redux";
import currentPlayingReducer from "./reducers/currentPlayingReducer";
import currentPlaylistRatingReducer from "./reducers/currentPlaylistRatingReducer";
import drawerReducer from "./reducers/drawerReducer";
import modalReducer from "./reducers/modalReducer";
import playlistDetailReducer from "./reducers/playlistDetailReducer";
import playlistReducer from "./reducers/playlistReducer";
import userPlaylistReducer from "./reducers/userPlaylistReducer";
import userReducer from "./reducers/userReducer";
import userTopArtistReducer from "./reducers/userTopArtistsReducer";
import userTopSongsReducer from "./reducers/userTopSongsReducer";
//Import Reducer here

const rootReducer = combineReducers({
  //Aliasing Reducer Here
  user: userReducer,
  modals: modalReducer,
  userPlaylist: userPlaylistReducer,
  playlistDetail: playlistDetailReducer,
  drawer: drawerReducer,
  userTopArtist: userTopArtistReducer,
  userTopSongs: userTopSongsReducer,
  currentPlaylistRating: currentPlaylistRatingReducer,
  playlist: playlistReducer,
  currentPlaying: currentPlayingReducer
})

export default rootReducer;