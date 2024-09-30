"use client";
import { Box, Typography } from "@mui/material";
import CardHome from "app/components/CardHome";
import HomeCover from "app/components/HomeCover";
import React, { useEffect } from "react";
import api from "app/utils/api";
import { AnimeManga } from "app/types";
import { setContent, setLoading } from "app/store/slices/animeMangaSlice";
import { useDispatch, useSelector } from "react-redux";
import { getContent, getLoading } from "app/store/selector/selectors";
import Spinner from "app/components/Spinner";

const HomePage = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContent) as AnimeManga[];
  const loading = useSelector(getLoading);

  useEffect(() => {
    getAnimeData();
  }, []);

  async function getAnimeData() {
    dispatch(setLoading(true));
    const response = await api.get("/anime?page[limit]=12&page[offset]=0");
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
            TODA LA INFORMACIÓN DEL MUNDO DEL ANIME Y MANGA
          </Typography>

          {loading ? (
            <Box
              gap={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent="center"
              flexWrap={"wrap"}
              width={"100%"}
            >
              <Spinner />
            </Box>
          ) : (
            <Box
              gap={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent="center"
              flexWrap={"wrap"}
              width={"100%"}
            >
              {content.map((animeManga) => (
                <Box width={"280px"} key={animeManga.id}>
                  <CardHome animeManga={animeManga} />
                </Box>
              ))}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default HomePage;
