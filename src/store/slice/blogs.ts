import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { HttpError, PaginationTypes } from "@/types";
import { Blog } from "@/types/blog.type";
import { getListBlogs } from "@/store/thunk/get-list-blogs";

interface BlogsState {
  blogs: Blog[];
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
  pagination?: PaginationTypes | null;
}

const initialState: BlogsState = {
  blogs: [],
  isLoading: false,
  error: null,
  pagination: null,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getListBlogs.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getListBlogs.fulfilled, (state, action) => {
        state.blogs = action.payload.data as Blog[];
        state.pagination = action.payload.pagination;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getListBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default blogSlice.reducer;
