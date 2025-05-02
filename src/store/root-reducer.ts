import { combineReducers } from "@reduxjs/toolkit";
import UserReducer from "@/store/slice/users";
const rootReducer = combineReducers({
  UserReducer,
});

export default rootReducer;
