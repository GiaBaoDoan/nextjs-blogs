import { CategorySchemaType } from "@/schema/category.schema";
import CategoryServices from "@/services/category.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCategory = createAsyncThunk(
  "/category/put/:id",
  async (
    { id, data }: { id: string; data: CategorySchemaType },
    { rejectWithValue }
  ) => {
    try {
      const res = await CategoryServices.put(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
