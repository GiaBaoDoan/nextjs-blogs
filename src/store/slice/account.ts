import { getAccount } from "@/store/thunk/get-account";
import { HttpError } from "@/types";
import { User } from "@/types/user.type";
import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface AccountState {
  account: User | null;
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: AccountState = {
  account: null,
  isLoading: false,
  error: null,
};

const accountSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAccount.fulfilled, (state, action) => {
        state.account = action.payload.data as User;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAccount.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAccount.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default accountSlice.reducer;
