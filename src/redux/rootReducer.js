import { combineReducers} from "redux";
import modalReducer from "./reducers/modalReducer";
import playlistDetailReducer from "./reducers/playlistDetailReducer";
import userPlaylistReducer from "./reducers/userPlaylistReducer";
import userReducer from "./reducers/userReducer";
//Import Reducer here

const rootReducer = combineReducers({
  //Aliasing Reducer Here
  user: userReducer,
  modals: modalReducer,
  userPlaylist: userPlaylistReducer,
  playlistDetail: playlistDetailReducer
})

export default rootReducer;