import { BlogSchemaType } from "@/schema/blog.schema";
import BlogServices from "@/services/blog.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateBlog = createAsyncThunk(
  "/blog/put/:id",
  async (
    { id, data }: { id: string; data: BlogSchemaType },
    { rejectWithValue }
  ) => {
    try {
      const res = await BlogServices.put(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
