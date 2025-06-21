import { createAsyncThunk } from "@reduxjs/toolkit";
import TagServices from "@/services/tag.service";

export const getTagById = createAsyncThunk(
  "/tags/get/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await TagServices.getById(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
