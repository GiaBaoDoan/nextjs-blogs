import { AvatarFormType } from "@/components/account/AvatarForm";
import AccountServices from "@/services/account.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateAvatar = createAsyncThunk(
  "/account/avatar/put/",
  async (data: AvatarFormType, { rejectWithValue }) => {
    try {
      const res = await AccountServices.updateAvatar(data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
