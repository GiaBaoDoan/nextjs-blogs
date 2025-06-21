import TagServices from "@/services/tag.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllTags = createAsyncThunk(
  "/tags/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await TagServices.get();
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
