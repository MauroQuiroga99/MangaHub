import { Box } from "@mui/material";
import React from "react";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent="space-between"
      position="fixed"
      zIndex={4}
      top={0}
      left={0}
      width={"100%"}
      height={"80px"}
      bgcolor={"#f7f7f7"}
      boxShadow={"rgba(13, 38, 76, 0.19) 0px 9px 20px"}
      sx={{
        padding: {
          md: "0 1rem",
          lg: "0 8rem",
        },
      }}
    >
      <Box
        height={"80px"}
        display={"flex"}
        alignItems={"center"}
        paddingLeft={"20px"}
        paddingRight={"10px"}
      >
        <Logo />
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
  );
};

export default Header;
