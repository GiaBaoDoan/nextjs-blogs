import { createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { getAllCategory } from "@/store/thunk/get-list-categories";
import { HttpError } from "@/types";
import { Category } from "@/types/category.type";

interface CategoriesState {
  categories: Category[];
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllCategory.fulfilled, (state, action) => {
        state.categories = action.payload.data as Category[];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default categorySlice.reducer;
