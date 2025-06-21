import BlogServices from "@/services/blog.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteBlog = createAsyncThunk(
  "/blog/delete/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await BlogServices.delete(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
