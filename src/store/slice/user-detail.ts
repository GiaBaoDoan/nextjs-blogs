import { getUserById } from "@/store/thunk/get-detail-user";
import { HttpError } from "@/types";
import { User } from "@/types/user.type";
import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: UserState = {
  user: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload.data as User;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default userSlice.reducer;
