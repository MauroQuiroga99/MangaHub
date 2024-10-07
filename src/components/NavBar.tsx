"use client";
import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const open = Boolean(anchor);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchor(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const linkId = event.currentTarget.getAttribute("data-link") || "";
    setActiveLink(linkId);
  };

  return (
    <Box
      top={0}
      left={0}
      height={"80px"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"end"}
      paddingRight={"20px"}
      zIndex={1100}
    >
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "center",
          width: "auto",
        }}
      >
        <Box
          component="nav"
          sx={{
            display: "flex",
            gap: 2,
          }}
        >
          <Typography
            variant="body1"
            component="a"
            href="#"
            onClick={handleClick}
            sx={{
              textDecoration: "none",
              color: activeLink === "news" ? "black" : "text.secondary",
              fontWeight: "600",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Noticias
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="#"
            onClick={handleClick}
            sx={{
              textDecoration: "none",
              color: activeLink === "reviews" ? "black" : "text.secondary",
              fontWeight: "600",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Reseñas
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="#"
            onClick={handleClick}
            sx={{
              textDecoration: "none",
              color: activeLink === "articles" ? "black" : "text.secondary",
              fontWeight: "600",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Artículos
          </Typography>
          <Typography
            variant="body1"
            component="a"
            href="#"
            onClick={handleClick}
            sx={{
              textDecoration: "none",
              color: activeLink === "more" ? "black" : "text.secondary",
              fontWeight: "600",
              "&:hover": {
                color: "black",
              },
            }}
          >
            Más
          </Typography>
        </Box>
      </Box>

      <IconButton
        color="primary"
        sx={{ display: { xs: "flex", md: "none" } }}
        onClick={handleMenuOpen}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        anchorEl={anchor}
        open={open}
        onClose={handleMenuClose}
        sx={{ display: { xs: "flex", md: "none" } }}
      >
        <Box
          sx={{
            display: { xs: "flex", sm: "none" }, //
            width: "100%",
          }}
        >
          <MenuItem>
            <SearchBar />
          </MenuItem>
        </Box>

        <MenuItem onClick={handleMenuClose}>Noticias</MenuItem>
        <MenuItem onClick={handleMenuClose}>Reseñas</MenuItem>
        <MenuItem onClick={handleMenuClose}>Artículos</MenuItem>
        <MenuItem onClick={handleMenuClose}>Más</MenuItem>
      </Menu>
    </Box>
  );
};

export default NavBar;
