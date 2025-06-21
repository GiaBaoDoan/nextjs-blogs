import { CommentSchemaType } from "@/schema/comment.schema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import CommentServices from "@/services/comment.service";

export const postComment = createAsyncThunk(
  "/comment/post",
  async (
    { blogId, data }: { blogId: string; data: CommentSchemaType },
    { rejectWithValue }
  ) => {
    try {
      const res = await CommentServices.post(blogId, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
