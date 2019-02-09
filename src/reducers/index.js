import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  forcast: searchReducer
});
