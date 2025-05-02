import UserServices from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllUsers = createAsyncThunk(
  "/users/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await UserServices.getAllUsers();
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
