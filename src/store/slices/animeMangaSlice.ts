"use client";
import { createSlice } from "@reduxjs/toolkit";
import { AnimeManga } from "../../types";

type ContentState = {
  content: AnimeManga[];
  loading: boolean;
};

const initialState: ContentState = {
  content: [],
  loading: true,
};

const animeMangaSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    setContent: (state, action) => {
      state.content = action.payload;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setContent, setLoading } = animeMangaSlice.actions;
export default animeMangaSlice.reducer;
