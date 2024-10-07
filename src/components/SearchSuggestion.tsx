import { Box, CardMedia, Typography } from "@mui/material";
import { AnimeManga } from "app/types";
import React from "react";

type SearchSuggestionsProps = {
  animeManga: AnimeManga;
};

const SearchSuggestions = ({ animeManga }: SearchSuggestionsProps) => {
  return (
    <div>
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          borderRadius: "6px ",
          padding: "4px",
        }}
        width={"398px"}
        height={"auto"}
      >
        <CardMedia
          component="img"
          image={animeManga.attributes.posterImage.large}
          alt="Title"
          sx={{
            backgroundColor: "white",
            borderRadius: "6px ",
            width: "60px",
            height: "70px",
          }}
        />
        <Box marginX={1} alignContent={"flex-start"} display={"wrap"}>
          <Typography fontSize={13} fontWeight={"bold"}>
            {animeManga.attributes.titles.en}
            {animeManga.attributes.titles.ja_jp}
          </Typography>
          <Typography alignContent={"space-between"} fontSize={12}>
            {" "}
            • {animeManga.attributes.status} •{" "}
            {animeManga.attributes.averageRating} • Anime
          </Typography>
          <Typography fontSize={12}>
            Acción, Comedia, Drama, magia,Acción
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default SearchSuggestions;
