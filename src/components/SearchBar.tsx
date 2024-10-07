"use client";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterTerm, getSearchAnime } from "app/store/selector/selectors";
import {
  setCurrentPage,
  setFilterTerm,
  setSearchAnime,
} from "app/store/slices/animeMangaSlice";
import Link from "next/link";
import SearchSuggestions from "./SearchSuggestion";
import api from "app/utils/api";
import { AnimeManga } from "app/types";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(getFilterTerm);
  const searchAnime = useSelector(getSearchAnime) as AnimeManga[];

  useEffect(() => {
    getFilteredAnimeData();
  }, [filterTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterTerm(e.target.value));
  };

  const handleSearchClick = () => {
    dispatch(setCurrentPage(1));
  };

  async function getFilteredAnimeData() {
    const response = await api.get(
      `/anime?page[limit]=${12}&page[offset]=${0}&filter[text]=${filterTerm}`
    );

    dispatch(setSearchAnime(response.data.data));
    console.log(response);
  }

  return (
    <>
      <Box
        position={"relative"}
        sx={{
          width: {
            lg: "450px",
            md: "370px",
            sm: "300px",
          },
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          gap={1}
          maxWidth={"800px"}
          justifyContent={"center"}
        >
          <TextField
            onChange={handleSearchChange}
            value={filterTerm}
            variant="outlined"
            placeholder="Anime, Manga, comics ..."
            fullWidth
            sx={{
              borderRadius: "4px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "4px",
              },
              "& input": {
                padding: "10px",
              },
            }}
          />
          <Link href={filterTerm ? `/search?q=${filterTerm}` : "#"}>
            <IconButton
              disabled={!filterTerm}
              color="primary"
              onClick={handleSearchClick}
              sx={{
                borderRadius: "4px",
                padding: "10px",
              }}
            >
              <SearchIcon />
            </IconButton>
          </Link>
        </Box>

        <Box
          sx={{
            width: {
              lg: "398px",
              md: "318px",
              sm: "300px",
            },
            maxHeight: "521px",
            overflowY: "auto",
            backgroundColor: "#e6e6e6",
            borderRadius: "6px ",
          }}
          display="flex"
          flexDirection="column"
          position={"absolute"}
        >
          {filterTerm &&
            searchAnime.map((animeManga) => (
              <SearchSuggestions key={animeManga.id} animeManga={animeManga} />
            ))}
        </Box>
      </Box>
    </>
  );
};

export default SearchBar;
