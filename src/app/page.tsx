import { Box, Typography } from "@mui/material";
import CardHome from "app/components/CardHome";
import React from "react";

const page = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"auto"}
      marginTop={"80px"}
      sx={{
        padding: {
          md: "0 1rem",
          lg: "0 8rem",
        },
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        padding={2}
      >
        <Typography
          textAlign={"center"}
          variant="h6"
          marginY={2}
          fontWeight={"bold"}
        >
          RESULTADOS DE ""
        </Typography>
        <Box
          gap={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          flexWrap={"wrap"}
          width={"100%"}
        ></Box>
      </Box>
    </Box>
  );
};

export default page;
