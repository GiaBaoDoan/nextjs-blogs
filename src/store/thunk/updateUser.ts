import { UserFormType } from "@/schema/user.schema";
import UserServices from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUser = createAsyncThunk(
  "/user/update",
  async (
    { id, data }: { id: string; data: UserFormType },
    { rejectWithValue }
  ) => {
    try {
      const res = await UserServices.updateUser(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
