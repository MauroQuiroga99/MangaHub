import { Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link
      href={"/home"}
      style={{
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
      }}
    >
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
    </Link>
  );
};

export default Logo;
