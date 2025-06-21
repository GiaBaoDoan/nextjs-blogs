import CommentServices from "@/services/comment.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteComment = createAsyncThunk(
  "/comment/delete/:id",
  async (
    { blogId, id }: { blogId: string; id: string },
    { rejectWithValue }
  ) => {
    try {
      const res = await CommentServices.delete(blogId, id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
