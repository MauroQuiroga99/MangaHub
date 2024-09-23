import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { AnimeManga, animeMangaDatabase } from "app/db/data";

type CardProps = {
  animeManga: AnimeManga;
};

const CardHome = ({ animeManga }: CardProps) => {
  return (
    <Card
      sx={{
        height: "360px",
        marginBottom: "10px",
        minWidth: "200px",
      }}
    >
      <CardMedia
        component="img"
        height="160"
        image="/img/portada_bocchi-the-rock-26.jpg"
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
          {animeManga.title}
        </Typography>
        <Typography fontSize={"13px"} color="text.secondary">
          <span style={{ fontWeight: "bold" }}> Rating: </span>
          {animeManga.averageRating}
        </Typography>
        <Typography fontSize={"13px"} color="text.secondary">
          <span style={{ fontWeight: "bold" }}>Status: </span>
          {animeManga.status}
        </Typography>
        <Typography fontSize={"13px"} color="text.secondary">
          <span style={{ fontWeight: "bold" }}>Popularity Rank: </span>
          {animeManga.popularityRank}
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
          {animeManga.synopsis}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardHome;
