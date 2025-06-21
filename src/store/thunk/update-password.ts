import { SecuritySchemaType } from "@/components/account/SecurityForm";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AccountServices from "@/services/account.service";

export const updatePassword = createAsyncThunk(
  "/account/password/put/",
  async (data: SecuritySchemaType, { rejectWithValue }) => {
    try {
      const res = await AccountServices.updatePassword(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
