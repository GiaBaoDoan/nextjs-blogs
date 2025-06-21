import BlogServices from "@/services/blog.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListBlogs = createAsyncThunk(
  "/blogs/get",
  async (params: any, { rejectWithValue }) => {
    try {
      const res = await BlogServices.get(params);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
