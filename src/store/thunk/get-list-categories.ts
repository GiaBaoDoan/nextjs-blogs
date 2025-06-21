import CategoryServices from "@/services/category.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllCategory = createAsyncThunk(
  "/category/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.get();
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
