import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthServices from "@/services/auth.service";

export const verifyThunk = createAsyncThunk(
  "/verify/:id/:token",
  async ({ id, token }: { id: string; token: string }, { rejectWithValue }) => {
    try {
      const res = await AuthServices.verify(id, token);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
