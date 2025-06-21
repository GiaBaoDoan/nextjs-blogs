import BlogServices from "@/services/blog.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBlogById = createAsyncThunk(
  "/blogs/get/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await BlogServices.getById(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
