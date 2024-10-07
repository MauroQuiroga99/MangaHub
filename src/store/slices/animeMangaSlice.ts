"use client";
import { createSlice } from "@reduxjs/toolkit";
import { AnimeManga } from "../../types";

type ContentState = {
  content: AnimeManga[];
  loading: boolean;
  filterTerm: string;
  currentPage: number;
  totalPages: number;
  selectedAnime: AnimeManga | null;
  searchAnime: AnimeManga[];
};

const initialState: ContentState = {
  content: [],
  loading: true,
  filterTerm: "",
  currentPage: 1,
  totalPages: 1,
  selectedAnime: null,
  searchAnime: [],
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
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setTotalPages: (state, action) => {
      state.totalPages = action.payload;
    },
    setSelectedAnime: (state, action) => {
      state.selectedAnime = action.payload;
    },
    setSearchAnime: (state, action) => {
      state.searchAnime = action.payload;
    },
  },
});

export const {
  setContent,
  setLoading,
  setFilterTerm,
  setCurrentPage,
  setTotalPages,
  setSelectedAnime,
  setSearchAnime,
} = animeMangaSlice.actions;
export default animeMangaSlice.reducer;
