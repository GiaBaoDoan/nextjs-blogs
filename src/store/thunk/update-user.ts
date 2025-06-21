import { UserSchemaType } from "@/schema/user.schema";
import UserServices from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk(
  "/user/put/:id",
  async (
    { id, data }: { id: string; data: UserSchemaType },
    { rejectWithValue }
  ) => {
    try {
      const res = await UserServices.put(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
