import { SignupType } from "@/schema/signup.schema";
import AuthServices from "@/services/auth.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const SignupThunk = createAsyncThunk(
  "/signup",
  async (data: SignupType, { rejectWithValue }) => {
    try {
      const res = await AuthServices.signup(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
