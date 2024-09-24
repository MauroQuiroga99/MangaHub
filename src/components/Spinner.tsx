import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

const Spinner = () => {
  return (
    <Box sx={{ height: "50px", width: "50px", bg: "red", display: "flex" }}>
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
