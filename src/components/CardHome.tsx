import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AnimeManga } from "app/types";
import React from "react";

type CardProps = {
  animeManga: AnimeManga;
};

const CardHome = ({ animeManga }: CardProps) => {
  return (
    <Card
      sx={{
        height: "360px",
        minWidth: "200px",
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image={animeManga.attributes.posterImage.small}
        alt="Title"
        sx={{ borderRadius: "5px 5px 0 0 ", width: "100%" }}
      />
      <CardContent>
        <Typography
          display={"flex"}
          variant="h6"
          component="div"
          fontWeight={"bold"}
        >
          {animeManga.attributes.titles.en}
          {""} {animeManga.attributes.titles.ja_jp}
        </Typography>
        <Typography fontSize={"13px"} color="text.secondary">
          <span style={{ fontWeight: "bold" }}> Rating: </span>
          {animeManga.attributes.averageRating}
        </Typography>
        <Typography fontSize={"13px"} color="text.secondary">
          <span style={{ fontWeight: "bold" }}>Status: </span>
          {animeManga.attributes.status}
        </Typography>
        <Typography fontSize={"13px"} color="text.secondary">
          <span style={{ fontWeight: "bold" }}>Popularity Rank: </span>
          {animeManga.attributes.popularityRank}
        </Typography>
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
          textAlign={"justify"}
          fontSize={"13px"}
          color="text.secondary"
        >
          <span style={{ fontWeight: "bold" }}>Synopsis: </span>
          {animeManga.attributes.synopsis}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardHome;
