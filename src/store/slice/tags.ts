import { createSlice } from "@reduxjs/toolkit";
import { getAllTags } from "@/store/thunk/get-list-tags";
import { Tag } from "@/types/tag.type";
import { AxiosError } from "axios";
import { HttpError } from "@/types";

interface TagState {
  tags: Tag[];
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: TagState = {
  tags: [],
  isLoading: false,
  error: null,
};

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTags.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllTags.fulfilled, (state, action) => {
        state.tags = action.payload.data as Tag[];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAllTags.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default tagSlice.reducer;
