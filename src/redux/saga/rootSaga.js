import { all } from "redux-saga/effects";
import { getAlbumDetailsWatcher } from "./sagaWatcher/albumDetailsWatcher";
import { getArtistAlbumWatcher } from "./sagaWatcher/getArtistAlbumWatcher";
import { getNewReleaseSongWatcher } from "./sagaWatcher/newReleaseSongWatcher";
import { 
  addSongToPlaylistWatcher, 
  deleteSongFromPlaylistWatcher, 
  getPlaylistDetailWatcher, 
  updatePlaylistDetailWatcher
} from "./sagaWatcher/playlistDetailWatcher";
import { getPlaylistWatcher } from "./sagaWatcher/playlistWatcher";
import { getRatingCurrentPlaylistWatcher, postRatingCurrentPlaylistWatcher } from "./sagaWatcher/ratingCurrentPlaylistWatcher";
import { getRecomendedSongWatcher } from "./sagaWatcher/recomendedSongWatcher";
import { getSongLyricWatcher } from "./sagaWatcher/songLyricWatcher";
import { 
  deleteUserPlaylistWatcher, 
  getUserPlaylistWatcher, 
  postUserPlaylistWatcer 
} from "./sagaWatcher/userPlaylistWatcher";
import { getUserTopArtistWatcher } from "./sagaWatcher/userTopArtistWatcher";
import { getUserTopSongsWatcher } from "./sagaWatcher/userTopSongsWatcher";
import { 
  getLogedInUserWatcher, 
  postFacebookDataUserWatcher, 
  postGoogleDataUserWatcher, 
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
    updateUserWatcher(),
    postGoogleDataUserWatcher(),
    postFacebookDataUserWatcher(),
    getUserPlaylistWatcher(),
    getPlaylistDetailWatcher(),
    postUserPlaylistWatcer(),
    deleteUserPlaylistWatcher(),
    addSongToPlaylistWatcher(),
    deleteSongFromPlaylistWatcher(),
    updatePlaylistDetailWatcher(),

    getUserTopArtistWatcher(),

    getUserTopSongsWatcher(),

    getRatingCurrentPlaylistWatcher(),
    postRatingCurrentPlaylistWatcher(),

    getPlaylistWatcher(),
    getNewReleaseSongWatcher(),
    getRecomendedSongWatcher(),

    getSongLyricWatcher(),
    
    getArtistAlbumWatcher(),
    getAlbumDetailsWatcher(),
  ])
}