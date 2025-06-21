import TagServices from "@/services/tag.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteTag = createAsyncThunk(
  "/tags/delete/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await TagServices.delete(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
