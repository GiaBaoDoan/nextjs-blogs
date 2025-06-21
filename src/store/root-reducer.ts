import { combineReducers } from "@reduxjs/toolkit";
import UserListReducer from "@/store/slice/users";
import UserReducer from "@/store/slice/user-detail";
import CategoryListReducer from "@/store/slice/categories";
import categoryReducer from "@/store/slice/category-detail";
import TagListReducer from "@/store/slice/tags";
import TagReducer from "@/store/slice/tag-detail";
import BlogListReducer from "@/store/slice/blogs";
import BlogReducer from "@/store/slice/blog-detail";
import CommentListReducer from "@/store/slice/comments";
import AccountReducer from "@/store/slice/account";

const rootReducer = combineReducers({
  UserListReducer,
  UserReducer,
  CategoryListReducer,
  TagListReducer,
  BlogListReducer,
  BlogReducer,
  categoryReducer,
  TagReducer,
  CommentListReducer,
  AccountReducer,
});

export default rootReducer;
