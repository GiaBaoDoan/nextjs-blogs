import { LoginType } from "@/schema/login.schema";
import AuthServices from "@/services/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const LoginThunk = createAsyncThunk(
  "/login",
  async (data: LoginType, { rejectWithValue }) => {
    try {
      const res = await AuthServices.login(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
