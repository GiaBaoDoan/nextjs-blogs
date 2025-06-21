import TagServices from "@/services/tag.service";
import { TagSchemaType } from "@/schema/tag.schema";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const postTag = createAsyncThunk(
  "/tags/post",
  async (data: TagSchemaType, { rejectWithValue }) => {
    try {
      const res = await TagServices.post(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
