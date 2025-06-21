import { createSlice } from "@reduxjs/toolkit";
import { getAllTags } from "@/store/thunk/get-list-tags";
import { Tag } from "@/types/tag.type";
import { AxiosError } from "axios";
import { HttpError } from "@/types";
import { getTagById } from "@/store/thunk/get-detail-tag";

interface TagState {
  tag: Tag | null;
  isLoading: boolean;
  error: AxiosError<HttpError> | null;
}

const initialState: TagState = {
  tag: null,
  isLoading: false,
  error: null,
};

const tagSlice = createSlice({
  name: "tag",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTagById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTagById.fulfilled, (state, action) => {
        state.tag = action.payload.data as Tag;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getTagById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<HttpError>;
      });
  },
});

export default tagSlice.reducer;
