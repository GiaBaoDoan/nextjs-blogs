import { combineReducers } from "@reduxjs/toolkit";
import UserListReducer from "@/store/slice/users";
import UserReducer from "@/store/slice/user";
const rootReducer = combineReducers({
  UserListReducer,
  UserReducer,
});

export default rootReducer;
