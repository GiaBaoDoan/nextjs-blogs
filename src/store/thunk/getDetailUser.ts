import UserServices from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserById = createAsyncThunk(
  "/user/get-detail",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await UserServices.getUserById(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
