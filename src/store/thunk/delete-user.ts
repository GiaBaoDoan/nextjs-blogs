import UserServices from "@/services/user.service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteUser = createAsyncThunk(
  "/users/delete/:id",
  async (id: string, { rejectWithValue }) => {
    try {
      const res = await UserServices.delete(id);
      return res.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
