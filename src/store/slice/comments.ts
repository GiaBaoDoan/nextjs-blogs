import { getCommentList } from "@/store/thunk/get-list-comments";
import { HttpError } from "@/types";
import { Comment } from "@/types/comment.type";
import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface CommentsState {
  comments: Comment[] | [];
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: CommentsState = {
  comments: [],
  isLoading: false,
  error: null,
};

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCommentList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCommentList.fulfilled, (state, action) => {
        state.comments = action.payload.data as any;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getCommentList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default commentsSlice.reducer;
