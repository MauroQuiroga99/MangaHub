import { Box, Grid2 } from "@mui/material";
import Card from "app/components/Card";
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
        height={"auto"}
        sx={{
          padding: {
            md: "0 1rem",
            lg: "0 8rem",
          },
        }}
      >
        <Box flexGrow={1} padding={2}>
          <Grid2
            container
            columnSpacing={{ xs: 1, sm: 2, md: 4 }}
            rowSpacing={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
          >
            <Card />
            <Card />
            <Card />
            <Card />
          </Grid2>
        </Box>
      </Box>
    </div>
  );
};

export default page;
