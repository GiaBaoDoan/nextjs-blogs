import { createSlice } from "@reduxjs/toolkit";
import { Blog } from "@/types/blog.type"; // Đảm bảo import type Blog đúng từ file của bạn.
import { getBlogById } from "@/store/thunk/get-detail-blog";
import { AxiosError } from "axios";
import { HttpError } from "@/types";

interface BlogState {
  blog: Blog | null;
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: BlogState = {
  blog: null,
  isLoading: false,
  error: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload.data as Blog;
        state.error = null;
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>; // Gán thông báo lỗi nếu có
      });
  },
});

export default blogSlice.reducer;
