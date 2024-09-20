import { Box } from "@mui/material";
import HomeCover from "app/components/HomeCover";
import React from "react";

const page = () => {
  return (
    <div>
      <HomeCover />
      <Box
        display={"flex"}
        alignItems={"center"}
        component="header"
        justifyContent="space-between"
        width={"100%"}
        height={"80px"}
        sx={{
          padding: {
            md: "0 1rem",
            lg: "0 8rem",
          },
        }}
      ></Box>
    </div>
  );
};

export default page;
