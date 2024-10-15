"use client";
import { useSearchParams } from "next/navigation";
import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import api from "app/utils/api";
import { useDispatch, useSelector } from "react-redux";
import {
  getContent,
  getCurrentPage,
  getLoading,
} from "app/store/selector/selectors";
import { AnimeManga } from "app/types";
import {
  setContent,
  setTotalPages,
  setLoading,
} from "app/store/slices/animeMangaSlice";
import CardHome from "app/components/CardHome";
import PaginationContent from "app/components/PaginationContent";

const PageResults = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContent) as AnimeManga[];
  const currentPage = useSelector(getCurrentPage);
  const loading = useSelector(getLoading);
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const LIMIT = 12;
  const offset = currentPage * LIMIT;

  useEffect(() => {
    getFilteredAnimeData();
  }, [currentPage, search]);

  async function getFilteredAnimeData() {
    dispatch(setLoading(true));
    const response = await api.get(
      `/anime?page[limit]=${LIMIT}&page[offset]=${offset}&filter[text]=${search}`
    );

    const totalResults = response.data.meta.count;
    const totalPages = Math.ceil(totalResults / LIMIT);

    dispatch(setContent(response.data.data));
    dispatch(setTotalPages(totalPages));

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
      minHeight={"100vh"}
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
          {loading ? (
            <Skeleton
              sx={{
                width: { xs: "300px", sm: "320px" },
                backgroundColor: "#e6e6e6",
              }}
              variant="text"
              height="35px"
            />
          ) : content.length > 0 ? (
            `Resultados de "${search}"`
          ) : (
            `No hay resultados de la búsqueda "${search}"`
          )}
        </Typography>
        <Box
          gap={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          alignContent={"column"}
          flexWrap={"wrap"}
          width={"100%"}
        >
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
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
              ))
            : content.length > 0
            ? content.map((animeManga) => (
                <Box width={"280px"} key={animeManga.id}>
                  <CardHome animeManga={animeManga} />
                </Box>
              ))
            : null}
        </Box>

        <Box marginY={2}>
          {loading ? (
            <Skeleton
              sx={{
                width: { xs: "300px", sm: "340px" },
                backgroundColor: "#e6e6e6",
              }}
              variant="text"
              height="50px"
              animation="wave"
            />
          ) : (
            <PaginationContent />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PageResults;
