import { Box, Typography } from "@mui/material";
import React from "react";

const HomeCover = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        position: "relative",
        marginTop: "80px",
        padding: "40px 20px",
        backgroundImage: "url(/img/portada_bocchi-the-rock-26.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        "&::before": {
          content: '""',
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(81, 177, 255, 0.326)",
          position: "absolute",
          top: 0,
          left: 0,
        },
      }}
    >
      <Box maxWidth={"1200px"} margin={"auto"} textAlign={"center"}>
        <Typography
          variant="h1"
          component="h1"
          fontSize={"2.5rem"}
          fontWeight={"bold"}
          marginBottom="16px"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          marginTop={"40px"}
          sx={{ overflowY: "auto" }}
        >
          ¡El mundo del manga en tus manos!
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{
            fontSize: "1rem",
            color: "#666",
            lineHeight: "1.6",
            margin: "0 auto",
            maxWidth: "800px",
            overflowY: "auto",
            height: "80px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores modi
          eum beatae deleniti ab illo itaque, architecto, culpa dignissimos
          fugit hic facere sit. Dolorem ea praesentium facilis unde minus
          obcaecati?
        </Typography>
      </Box>
    </Box>
  );
};

export default HomeCover;
