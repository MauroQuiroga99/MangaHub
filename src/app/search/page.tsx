"use client";
import { useSearchParams } from "next/navigation";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import api from "app/utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  getContent,
  getFilterTerm,
  getLoading,
} from "app/store/selector/selectors";
import { AnimeManga } from "app/types";
import { setContent, setLoading } from "app/store/slices/animeMangaSlice";
import CardHome from "app/components/CardHome";
import Spinner from "app/components/Spinner";

const PageResults = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContent) as AnimeManga[];
  const loading = useSelector(getLoading);
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  useEffect(() => {
    getFilteredAnimeData();
  }, [search]);

  async function getFilteredAnimeData() {
    dispatch(setLoading(true));
    const response = await api.get(
      `/anime?page[limit]=12&page[offset]=0&filter[text]=${search}`
    );
    dispatch(setContent(response.data.data));
    dispatch(setLoading(false));
  }

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"auto"}
      marginTop={"80px"}
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
        flexGrow={1}
      >
        <Typography
          textAlign={"center"}
          variant="h6"
          marginY={2}
          fontWeight={"bold"}
        >
          RESULTADOS DE "{search}"
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
  );
};

export default PageResults;
