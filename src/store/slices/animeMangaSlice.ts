"use client";
import { createSlice } from "@reduxjs/toolkit";
import { AnimeManga } from "../../types";

type ContentState = {
  content: AnimeManga[];
  loading: boolean;
  filterTerm: string;
};

const initialState: ContentState = {
  content: [],
  loading: false,
  filterTerm: "",
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
    setFilterTerm: (state, action) => {
      state.filterTerm = action.payload;
    },
  },
});

export const { setContent, setLoading, setFilterTerm } =
  animeMangaSlice.actions;
export default animeMangaSlice.reducer;
