import { BlogSchemaType } from "@/schema/blog.schema";
import BlogServices from "@/services/blog.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postBlog = createAsyncThunk(
  "/blog/post",
  async (data: BlogSchemaType, { rejectWithValue }) => {
    try {
      const res = await BlogServices.post(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
