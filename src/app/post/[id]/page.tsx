"use client";
import { Box, Typography } from "@mui/material";
import { useParams } from "next/navigation";
import React from "react";

const PostPage = () => {
  const { id } = useParams();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"auto"}
      marginTop={"80px"}
      minHeight={"100vh"}
      sx={{
        padding: {
          md: "0 1rem",
          lg: "0 8rem",
        },
      }}
    >
      <Box></Box>
      <Typography
        textAlign={"center"}
        variant="h6"
        marginY={2}
        fontWeight={"bold"}
      >
        RESULTADOS RESULTADOS RESULTADOS RESULTADOS RESULTADOS Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Doloremque placeat ab, explicabo
        nesciunt eveniet magnam sunt maiores quae veritatis animi! Rem maiores
        ut dolor ea officiis expedita quis eaque soluta.
      </Typography>
    </Box>
  );
};

export default PostPage;
