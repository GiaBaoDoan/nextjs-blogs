import { createAsyncThunk } from "@reduxjs/toolkit";
import CommentServices from "@/services/comment.service";

export const getCommentList = createAsyncThunk(
  "/comments/get",
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await CommentServices.get(params);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
