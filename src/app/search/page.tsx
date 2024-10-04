"use client";
import { useSearchParams } from "next/navigation";
import { Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import api from "app/utils/api";
import { useDispatch, useSelector } from "react-redux";
import { getContent, getCurrentPage } from "app/store/selector/selectors";
import { AnimeManga } from "app/types";
import {
  setContent,
  setTotalPages,
  setCurrentPage,
} from "app/store/slices/animeMangaSlice";
import CardHome from "app/components/CardHome";
import PaginationContent from "app/components/PaginationContent";

const PageResults = () => {
  const dispatch = useDispatch();
  const content = useSelector(getContent) as AnimeManga[];
  const currentPage = useSelector(getCurrentPage);
  const searchParams = useSearchParams();
  const search = searchParams.get("q");

  const LIMIT = 12;
  const offset = currentPage * LIMIT;

  useEffect(() => {
    getFilteredAnimeData();
  }, [currentPage, search]);

  async function getFilteredAnimeData() {
    const response = await api.get(
      `/anime?page[limit]=${LIMIT}&page[offset]=${offset}&filter[text]=${search}`
    );

    const totalResults = response.data.meta.count;
    const totalPages = Math.ceil(totalResults / LIMIT);

    console.log(response.data);

    dispatch(setContent(response.data.data));
    dispatch(setTotalPages(totalPages));
    console.log("CurrentPage:", currentPage);
    console.log("Offset:", offset);
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
        {content.length > 0 ? (
          <Typography
            textAlign={"center"}
            variant="h6"
            marginY={2}
            fontWeight={"bold"}
          >
            Resultados de "{search}"
          </Typography>
        ) : (
          <Typography
            textAlign={"center"}
            variant="h6"
            marginY={2}
            fontWeight={"bold"}
          >
            {" "}
            {content.length === 0 ? (
              <Skeleton
                sx={{
                  width: { xs: "300px", sm: "320px" },
                  backgroundColor: "#e6e6e6",
                }}
                variant="text"
                height="35px"
              />
            ) : (
              `No hay resultados de la busqueda "{search}"`
            )}
          </Typography>
        )}
        <Box
          gap={2}
          display={"flex"}
          alignItems={"center"}
          justifyContent="center"
          alignContent={"column"}
          flexWrap={"wrap"}
          width={"100%"}
        >
          {content.length
            ? content.map((animeManga) => (
                <Box width={"280px"} key={animeManga.id}>
                  <CardHome animeManga={animeManga} />
                </Box>
              ))
            : Array.from({ length: 8 }).map((_, index) => (
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

        <Box marginY={2}>
          <PaginationContent />
        </Box>
      </Box>
    </Box>
  );
};

export default PageResults;
