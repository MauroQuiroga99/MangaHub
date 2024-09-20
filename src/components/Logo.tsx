import { Typography } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Typography variant="h4" component="h4" sx={{ fontWeight: "bold" }}>
      Manga
      <b
        style={{
          color: "var(--bg-color)",
          WebkitTextStrokeWidth: "1.5px",
          WebkitTextStrokeColor: "var(--primary-color)",
          WebkitTextFillColor: "transparent",
        }}
      >
        Hub
      </b>
    </Typography>
  );
};

export default Logo;
