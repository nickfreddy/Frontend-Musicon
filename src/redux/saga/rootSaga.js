import { all } from "redux-saga/effects";
import { getPlaylistDetailWatcher } from "./sagaWatcher/playlistDetailWatcher";
import { getUserPlaylistWatcher } from "./sagaWatcher/userPlaylistWatcher";
import { getLogedInUserWatcher, signInUserWatcher, signUpUserWatcher } from "./sagaWatcher/userWatcher";
//Import Wathcer Here

export default function* rootSaga(){
  yield all([
    signUpUserWatcher(),
    signInUserWatcher(),
    getLogedInUserWatcher(),
    getUserPlaylistWatcher(),
    getPlaylistDetailWatcher(),
  ])
}