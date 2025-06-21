import UserServices from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserById = createAsyncThunk(
  "/user/get/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await UserServices.getById(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
