import { Box, CardMedia, Rating, Stack, Typography } from "@mui/material";
import { AnimeManga } from "app/types";
import Link from "next/link";
import React from "react";

type SearchSuggestionsProps = {
  animeManga: AnimeManga;
  onClick: () => void;
};

const SearchSuggestions = ({ animeManga, onClick }: SearchSuggestionsProps) => {
  const ratingValue = Number(animeManga?.attributes.averageRating) / 20;

  return (
    <>
      <Link
        href={`/post/${animeManga.id}`}
        style={{
          cursor: "pointer",
          textDecoration: "none",
          color: "inherit",
          margin: "2px",
        }}
        onClick={onClick}
      >
        <Box
          component="div"
          alignItems={"center"}
          sx={{
            backgroundColor: "rgb(247, 247, 247)",
            borderRadius: "6px",
            padding: "4px",
            cursor: "pointer",
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            transition: "box-shadow 0.3s ease, background-color 0.3s ease",
            ":hover": {
              backgroundColor: "#e6e6e6",
              boxShadow: "rgba(0, 0, 0, 0.4) 5px 5px 20px",
            },
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
              borderRadius: "6px",
              width: "50px",
              height: "auto",
              transition: "transform 0.3s ease",
              ":hover": {
                transform: "scale(1.05)",
              },
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
              • {animeManga.attributes.status} • Anime
            </Typography>
            <Typography alignContent={"space-between"} fontSize={12}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Typography fontSize={12}>
                  {animeManga.attributes.averageRating}
                </Typography>
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
    </>
  );
};

export default SearchSuggestions;
