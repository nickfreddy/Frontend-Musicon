import { all } from "redux-saga/effects";
import { getLogedInUserWatcher, signInUserWatcher, signUpUserWatcher } from "./sagaWatcher/userWatcher";
//Import Wathcer Here

export default function* rootSaga(){
  yield all([
    signUpUserWatcher(),
    signInUserWatcher(),
    getLogedInUserWatcher()
  ])
}