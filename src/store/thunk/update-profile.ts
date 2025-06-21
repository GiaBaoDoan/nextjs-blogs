import { ProfileType } from "@/components/account/ProfileForm";
import AccountServices from "@/services/account.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateProfile = createAsyncThunk(
  "/account/profile/put/",
  async (data: ProfileType, { rejectWithValue }) => {
    try {
      const res = await AccountServices.updateProfile(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
