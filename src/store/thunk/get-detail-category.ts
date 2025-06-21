import CategoryServices from "@/services/category.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoryById = createAsyncThunk(
  "/category/get/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.getById(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
