import { CategorySchemaType } from "@/schema/category.schema";
import CategoryServices from "@/services/category.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postCategory = createAsyncThunk(
  "/category/post",
  async (data: CategorySchemaType, { rejectWithValue }) => {
    try {
      const res = await CategoryServices.post(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
