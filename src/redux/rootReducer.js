import { combineReducers} from "redux";
import modalReducer from "./reducers/modalReducer";
import userReducer from "./reducers/userReducer";
//Import Reducer here

const rootReducer = combineReducers({
  //Aliasing Reducer Here
  user: userReducer,
  modals: modalReducer
})

export default rootReducer;