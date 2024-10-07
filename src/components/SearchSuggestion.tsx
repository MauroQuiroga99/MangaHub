import { Box, CardMedia, Rating, Stack, Typography } from "@mui/material";
import { AnimeManga } from "app/types";
import Link from "next/link";
import React from "react";

type SearchSuggestionsProps = {
  animeManga: AnimeManga;
};

const SearchSuggestions = ({ animeManga }: SearchSuggestionsProps) => {
  const ratingValue = Number(animeManga?.attributes.averageRating) / 20;
  return (
    <div>
      <Link
        href={`/post/${animeManga.id}`}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          sx={{
            borderRadius: "6px ",
            padding: "4px",
            cursor: "pointer",
          }}
          width={"auto"}
          height={"auto"}
        >
          <CardMedia
            component="img"
            image={animeManga.attributes.posterImage.large}
            alt="Title"
            sx={{
              backgroundColor: "white",
              borderRadius: "6px ",
              width: "50px",
              height: "auto",
            }}
          />
          <Box marginX={1} alignContent={"flex-start"} display={"wrap"}>
            <Typography
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 3,
                overflow: "hidden",
                textOverflow: "ellipsis",
                lineHeight: "1.5",
                maxHeight: "4.5em",
              }}
              fontSize={13}
              fontWeight={"bold"}
            >
              {animeManga.attributes.titles.en
                ? animeManga.attributes.titles.en
                : animeManga.attributes.titles.en_jp}
            </Typography>
            <Typography alignContent={"space-between"} fontSize={12}>
              {" "}
              • {animeManga.attributes.status} •{" "}
              {animeManga.attributes.averageRating} • Anime
              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  value={ratingValue}
                  precision={0.5}
                  readOnly
                  size="small"
                />
              </Stack>
            </Typography>
            <Typography fontSize={12}>Acción, Comedia, Drama</Typography>
          </Box>
        </Box>
      </Link>
    </div>
  );
};

export default SearchSuggestions;
