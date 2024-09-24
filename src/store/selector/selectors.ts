import { RootState } from "../index";

export const getContent = (state: RootState) => {
  return state.anime.content;
};

export const getSelectedPair = (state: RootState) => {
  return state.anime.loading;
};
