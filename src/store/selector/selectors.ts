import { RootState } from "../index";

export const getContent = (state: RootState) => {
  return state.anime.content;
};

export const getLoading = (state: RootState) => {
  return state.anime.loading;
};

export const getFilterTerm = (state: RootState) => {
  return state.anime.filterTerm;
};

export const getCurrentPage = (state: RootState) => {
  return state.anime.currentPage;
};

export const getTotalPages = (state: RootState) => {
  return state.anime.totalPages;
};
