import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const Card = () => {
  return (
    <Box
      borderRadius={"5px"}
      maxWidth="345"
      bgcolor={"gray"}
      sx={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        backgroundColor: "#fff",
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
        <Typography variant="h5" component="div">
          Title
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: N/A
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Status: airing
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Popularity Rank: N/A
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a synopsis of the anime/manga.
        </Typography>
      </CardContent>
    </Box>
  );
};

export default Card;
