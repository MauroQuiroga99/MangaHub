"use client";
import { Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilterTerm } from "app/store/selector/selectors";
import { setFilterTerm } from "app/store/slices/animeMangaSlice";
import Link from "next/link";

const SearchBar = () => {
  const dispatch = useDispatch();
  const filterTerm = useSelector(getFilterTerm);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterTerm(e.target.value));
  };

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={1}
        maxWidth={"800px"}
        justifyContent={"center"}
        width={"350px "}
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
            sx={{
              borderRadius: "4px",
              padding: "10px",
            }}
          >
            <SearchIcon />
          </IconButton>
        </Link>
      </Box>
    </>
  );
};

export default SearchBar;
