import { all } from "redux-saga/effects";
import { 
  addSongToPlaylistWatcher, 
  deleteSongFromPlaylistWatcher, 
  getPlaylistDetailWatcher, 
  updatePlaylistDetailWatcher
} from "./sagaWatcher/playlistDetailWatcher";
import { getPlaylistWatcher } from "./sagaWatcher/playlistWatcher";
import { getRatingCurrentPlaylistWatcher, postRatingCurrentPlaylistWatcher } from "./sagaWatcher/ratingCurrentPlaylistWatcher";
import { 
  deleteUserPlaylistWatcher, 
  getUserPlaylistWatcher, 
  postUserPlaylistWatcer 
} from "./sagaWatcher/userPlaylistWatcher";
import { getUserTopArtistWatcher } from "./sagaWatcher/userTopArtistWatcher";
import { getUserTopSongsWatcher } from "./sagaWatcher/userTopSongsWatcher";
import { 
  getLogedInUserWatcher, 
  signInUserWatcher, 
  signUpUserWatcher, 
  updateUserWatcher
} from "./sagaWatcher/userWatcher";
//Import Wathcer Here

export default function* rootSaga(){
  yield all([
    signUpUserWatcher(),
    signInUserWatcher(),
    getLogedInUserWatcher(),
    getUserPlaylistWatcher(),
    getPlaylistDetailWatcher(),
    postUserPlaylistWatcer(),
    deleteUserPlaylistWatcher(),
    addSongToPlaylistWatcher(),
    deleteSongFromPlaylistWatcher(),
    updatePlaylistDetailWatcher(),
    updateUserWatcher(),
    getUserTopArtistWatcher(),
    getUserTopSongsWatcher(),
    getRatingCurrentPlaylistWatcher(),
    postRatingCurrentPlaylistWatcher(),
    getPlaylistWatcher()
  ])
}