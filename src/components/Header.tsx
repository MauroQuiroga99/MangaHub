import { Box, Typography } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "80px",
        backgroundColor: "var(--bg-color)",
        boxShadow: "rgba(13, 38, 76, 0.19) 0px 9px 20px",
        zIndex: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: "1300px",
          height: "80px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          className="logo"
          sx={{
            height: "80px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "20px ",
            paddingRight: "10px  ",
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
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            width: "auto",
          }}
        >
          <SearchBar />
        </Box>
        <NavBar />
      </Box>
    </Box>
  );
};

export default Header;
