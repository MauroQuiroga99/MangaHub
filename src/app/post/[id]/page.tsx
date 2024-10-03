"use client";
import { Box, Rating, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getContent, getSelectedAnime } from "app/store/selector/selectors";
import { useEffect, useState } from "react";
import api from "app/utils/api";
import { setContent, setSelectedAnime } from "app/store/slices/animeMangaSlice";
import ReactPlayer from "react-player/youtube";
import { AnimeManga } from "app/types";
import CardHome from "app/components/CardHome";

const PostPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const selectedAnime = useSelector(getSelectedAnime);
  const content = useSelector(getContent) as AnimeManga[];

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    getAnimeData();
    getAnimeDataSuggested();
  }, [id]);

  async function getAnimeData() {
    const response = await api.get(`/anime/${id}`);
    dispatch(setSelectedAnime(response.data.data));
    console.log(response);
  }

  async function getAnimeDataSuggested() {
    const respuesta = await api.get("/anime?page[limit]=6&page[offset]=0");
    dispatch(setContent(respuesta.data.data));
    console.log(respuesta);
  }
  const ratingValue = Number(selectedAnime?.attributes.averageRating) / 20;

  return (
    <>
      <Box
        display={"flex"}
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
          alignItems={"flex-end"}
          sx={{
            width: "100%",
            height: "300px",
            position: "relative",
            backgroundImage: `url(${
              selectedAnime?.attributes.coverImage?.small ||
              selectedAnime?.attributes.posterImage.small
            })`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
          }}
        >
          <Box margin={2}>
            <Stack spacing={2} direction="row">
              <Button variant="contained" style={{ fontWeight: "bold" }}>
                Anime
              </Button>
            </Stack>
            <Typography variant="h4" marginY={2} fontWeight={"bold"}>
              {selectedAnime?.attributes.titles.en}
              {selectedAnime?.attributes.titles.ja_jp}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        width={"100%"}
        height={"auto"}
        marginY={"15px"}
        gap={2}
        sx={{
          padding: {
            md: "0 1rem",
            lg: "0 8rem",
            sm: "0 1rem",
          },
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            textAlign: "justify",
            padding: "5px",
            width: {
              lg: "70%",
              md: "70%",
              sm: "auto",
              xs: "auto",
            },
            height: "auto",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "1rem",
              lineHeight: "1.6",
              marginTop: "0 auto",
              height: "auto",
            }}
          >
            <span style={{ fontWeight: "bold" }}></span>
            <br />

            {selectedAnime?.attributes.synopsis}
          </Typography>

          <Box
            display={"flex"}
            flexWrap={"wrap"}
            gap={2}
            sx={{
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginTop: "10px",
                  height: "auto",
                }}
              >
                <span style={{ fontWeight: "bold" }}>RATING</span>
                <br />
              </Typography>

              <Stack spacing={1}>
                <Rating
                  name="half-rating-read"
                  value={ratingValue}
                  precision={0.5}
                  readOnly
                />
              </Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginTop: "10px",
                  height: "auto",
                }}
              >
                <span style={{ fontWeight: "bold" }}>POPULARIDAD</span>
                <br />#{selectedAnime?.attributes.popularityRank}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginTop: "10px",
                  height: "auto",
                }}
              >
                <span style={{ fontWeight: "bold" }}>EPISODIOS</span>
                <br />
                {selectedAnime?.attributes.episodeCount}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginTop: "10px",
                  height: "auto",
                }}
              >
                <span style={{ fontWeight: "bold" }}>ESTADO</span>
                <br />
                {selectedAnime?.attributes.status}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginTop: "10px",
                  height: "auto",
                }}
              >
                <span style={{ fontWeight: "bold" }}>FECHA DE EMISIÓN</span>
                <br />
                {selectedAnime?.attributes.startDate}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginTop: "10px",
                  height: "auto",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  FECHA DE FINALIZACIÓN
                </span>
                <br />
                {selectedAnime?.attributes.endDate}
              </Typography>
            </Box>
            <Box
              sx={{
                marginTop: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "60%",
              }}
            >
              {isClient && (
                <ReactPlayer
                  controls
                  url={`https://www.youtube.com/watch?v=${selectedAnime?.attributes.youtubeVideoId}`}
                  width="400px"
                  height="260px"
                />
              )}
              <Button
                variant="contained"
                color="primary"
                href={`https://www.youtube.com/watch?v=${selectedAnime?.attributes.youtubeVideoId}`}
                target="_blank"
                sx={{ marginTop: 2 }}
              >
                <Typography
                  variant="body1"
                  sx={{ fontSize: "1rem", lineHeight: "1.6" }}
                >
                  <span style={{ fontWeight: "bold" }}>Ver Trailer</span>
                </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            padding: "5px",
            width: {
              lg: "30%",
              md: "30%",
              sm: "auto",
              xs: "auto",
            },
            height: "auto",
          }}
        >
          <Typography
            textAlign={"center"}
            variant="h6"
            marginY={2}
            fontWeight={"bold"}
          >
            ANIMES RELACIONADOS
          </Typography>
          <Box
            gap={2}
            display={"flex"}
            alignItems={"center"}
            justifyContent="center"
            alignContent={"column"}
            flexWrap={"wrap"}
            width={"100%"}
            sx={{
              maxHeight: "560px",
              overflowY: "auto",
            }}
          >
            {content.map((animeManga) => (
              <Box width={"280px"} key={animeManga.id}>
                <CardHome animeManga={animeManga} />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PostPage;
