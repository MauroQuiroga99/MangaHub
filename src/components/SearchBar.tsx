"use client";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useRef, useState } from "react";
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
  const [isSuggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const filterTerm = useSelector(getFilterTerm);
  const searchAnime = useSelector(getSearchAnime) as AnimeManga[];
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (filterTerm !== "") {
      getFilteredAnimeData();
    }

    if (filterTerm === "") {
      dispatch(setSearchAnime([]));
    }
  }, [filterTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterTerm(e.target.value));
    setSuggestion(true);
  };

  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(setCurrentPage(1));
  };

  async function getFilteredAnimeData() {
    const response = await api.get(
      `/anime?page[limit]=${12}&page[offset]=${0}&filter[text]=${filterTerm}`
    );

    dispatch(setSearchAnime(response.data.data));
    console.log(response);
  }

  const handleClickOutside = (event: MouseEvent) => {
    searchRef.current && !searchRef.current.contains(event.target as Node);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Box
      ref={searchRef}
      position={"relative"}
      sx={{
        width: {
          lg: "450px",
          md: "370px",
          sm: "360px",
        },
      }}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
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
              zIndex: 6,
            }}
          >
            <SearchIcon />
          </IconButton>
        </Link>
      </Box>

      <Box
        sx={{
          width: {
            lg: "450px",
            md: "370px",
            sm: "360px",
            xs: "258.4px",
          },
          maxHeight: "521px",
          overflowY: "auto",
          backgroundColor: "#e6e6e6",
          borderRadius: "6px ",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
        display="flex"
        flexDirection="column"
        position={"absolute"}
      >
        {filterTerm &&
          searchAnime.map((animeManga) => (
            <SearchSuggestions
              onClick={() => dispatch(setFilterTerm(""))}
              key={animeManga.id}
              animeManga={animeManga}
            />
          ))}
      </Box>
    </Box>
  );
};

export default SearchBar;
