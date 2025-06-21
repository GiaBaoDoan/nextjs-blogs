import AccountServices from "@/services/account.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAccount = createAsyncThunk(
  "/account/get",
  async (_, { rejectWithValue }) => {
    try {
      const res = await AccountServices.getAccount();
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
