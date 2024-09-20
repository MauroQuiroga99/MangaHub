import { Box, Button, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const SearchBar = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      gap={1}
      maxWidth={"800px"}
      justifyContent={"center"}
      width={"350px "}
    >
      <TextField
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
      <IconButton
        color="primary"
        sx={{
          borderRadius: "4px",
          padding: "10px",
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  );
};

export default SearchBar;
