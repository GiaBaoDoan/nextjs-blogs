import CategoryServices from "@/services/category.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteCategory = createAsyncThunk(
  "/category/delete/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.delete(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
