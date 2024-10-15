"use client";
import { Box, Typography, Skeleton } from "@mui/material";
import CardHome from "app/components/CardHome";
import HomeCover from "app/components/HomeCover";
import React, { useEffect } from "react";
import api from "app/utils/api";
import { AnimeManga } from "app/types";
import { setContent, setLoading } from "app/store/slices/animeMangaSlice";
import { useDispatch, useSelector } from "react-redux";
import { getContent } from "app/store/selector/selectors";

const HomePage = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContent) as AnimeManga[];

  useEffect(() => {
    getAnimeData();
  }, []);

  const totalResul = 20805;

  const totalRandom = Math.floor((totalResul - 12) / 12);

  const stepRandom = Math.floor(Math.random() * (totalRandom + 1));

  const randomOffset = stepRandom * 12;

  async function getAnimeData() {
    dispatch(setLoading(true));
    const response = await api.get(
      `/anime?page[limit]=12&page[offset]=${randomOffset}`
    );
    dispatch(setContent(response.data.data));
    dispatch(setLoading(false));
  }
  return (
    <>
      <HomeCover />
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100%"}
        height={"auto"}
        sx={{
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
          flexDirection={"column"}
          padding={2}
        >
          <Typography
            textAlign={"center"}
            variant="h6"
            marginY={2}
            fontWeight={"bold"}
          >
            {content.length === 0 ? (
              <Skeleton
                sx={{
                  width: { xs: "320px", sm: "570px" },
                  backgroundColor: "#e6e6e6",
                }}
                variant="text"
                height="35px"
                animation="wave"
              />
            ) : (
              "TODA LA INFORMACIÓN DEL MUNDO DEL ANIME Y MANGA"
            )}
          </Typography>

          <Box
            gap={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            flexWrap={"wrap"}
            width={"100%"}
          >
            {content.length
              ? content.map((animeManga) => (
                  <Box width={"280px"} key={animeManga.id}>
                    <CardHome animeManga={animeManga} />
                  </Box>
                ))
              : Array.from({ length: 12 }).map((_, index) => (
                  <Skeleton
                    key={index}
                    animation="wave"
                    variant="rounded"
                    width={280}
                    height={300}
                    sx={{
                      backgroundColor: "#e6e6e6",
                      borderRadius: "8px",
                    }}
                  />
                ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
