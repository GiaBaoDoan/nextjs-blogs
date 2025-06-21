import { TagSchemaType } from "@/schema/tag.schema";
import { createAsyncThunk } from "@reduxjs/toolkit";
import TagServices from "@/services/tag.service";

export const updateTag = createAsyncThunk(
  "/tags/put/:id",
  async (
    { id, data }: { id: string; data: TagSchemaType },
    { rejectWithValue }
  ) => {
    try {
      const res = await TagServices.put(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
