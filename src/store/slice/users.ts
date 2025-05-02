import { getAllUsers } from "@/store/thunk/getAllUsers";
import { HttpError } from "@/types";
import { User } from "@/types/user.type";
import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";

interface UsersState {
  users: User[];
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: UsersState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.data as User[];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default usersSlice.reducer;
