"use client";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AnimeManga } from "app/types";
import Link from "next/link";
import React from "react";

type CardProps = {
  animeManga: AnimeManga;
};

const CardHome = ({ animeManga }: CardProps) => {
  return (
    <Link href={`/post/${animeManga.id}`}>
      <Card
        sx={{
          zIndex: 2,
          height: "300px",
          minWidth: "200px",
          position: "relative",
          transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          ":hover": {
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "rgba(0, 0, 0, 0.4) 5px 5px 20px",
            cursor: "pointer",
          },
        }}
      >
        <CardMedia
          component="img"
          height="300px"
          image={animeManga.attributes.posterImage.small}
          alt="Title"
          sx={{
            borderRadius: "5px 5px 0 0 ",
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
        <Box
          sx={{
            zIndex: 1,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            opacity: 1,
            transition: "opacity 0.3s ease, background-color 0.3s ease",
            ":hover": {
              opacity: 0,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            },
          }}
        />
        <CardContent sx={{ color: "white", bottom: "0", position: "absolute" }}>
          <Typography
            sx={{
              zIndex: 3,
              position: "relative",
              color: "white",
            }}
            display={"flex"}
            variant="h6"
            fontWeight={"bold"}
          >
            {animeManga.attributes.titles.en}
            {animeManga.attributes.titles.ja_jp}
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
            color="white"
          >
            <span style={{ fontWeight: "bold" }}></span>
            {animeManga.attributes.synopsis}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardHome;
