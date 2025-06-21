import { createSlice } from "@reduxjs/toolkit";
import { getCategoryById } from "@/store/thunk/get-detail-category";
import { Category } from "@/types/category.type";
import { AxiosError } from "axios";
import { HttpError } from "@/types";

interface CategoryState {
  category: Category | null;
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: CategoryState = {
  category: null,
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoryById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCategoryById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.category = action.payload.data as Category;
        state.error = null;
      })
      .addCase(getCategoryById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default categorySlice.reducer;
