import { Box, Divider, IconButton, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import Logo from "./Logo";

const Footer = () => {
  return (
    <Box
      width={"100%"}
      bottom={0}
      left={0}
      top={0}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      zIndex={2}
      boxShadow={"rgba(13, 38, 76, 0.19) 0px -9px 20px"}
      sx={{
        backgroundColor: "#f7f7f7",
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
        sx={{
          transform: "scale(0.6)",
          transformOrigin: "center",
        }}
      >
        <Logo />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={2}
      >
        <IconButton component="a" href="#" sx={{ color: "#3b5998" }}>
          <FacebookIcon fontSize="large" />
        </IconButton>
        <IconButton component="a" href="#" sx={{ color: "#E1306C" }}>
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Box>
      <Divider sx={{ width: "90%", height: "2px" }} />
      <Typography
        mt={2}
        textAlign={"center"}
        color={"text.secondary"}
        fontWeight={"bold"}
        fontSize={"0.875rem"}
      >
        © 2024 MangaHub. Todos los derechos reservados
      </Typography>
    </Box>
  );
};

export default Footer;
