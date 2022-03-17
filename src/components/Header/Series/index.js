import React, { useEffect, useState } from "react";
import {
  Container,
  Content,
  ContentHeader,
  ContentItems,
  ContentWrapper,
  Description,
  LoadMore,
  Wrap,
} from "./StyledSeriesElements";
import { Link, useParams } from "react-router-dom";
import Progress from "../../../features/Loader/Progress";

const Series = () => {

const { genre } = useParams();
const [queryGenre, setQueryGenre] = useState([]);
const [genreLength, setGenreLength] = useState(0);
const [loading, setLoading] = useState(true);
const [range, setRange] = useState({ prev: 20 });
const [loadMore, setLoadMore] = useState(false);

useEffect(() => {
    fetch(
      `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series&range=1-20`
    )
      .then((res) => res.json())
      .then((data) => {
        setGenreLength(data.entryCount);
      })
      .then(() =>
        fetch(
          `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series&range=1-20`
        )
          .then((response) => response.text())
          .then((data) => {
            const parsedData = JSON.parse(data);
            const apiData = parsedData.entries;

            const genreData = apiData.map((value, key) => {
              let thumbnail = "";
              let background = "";
              if (Object.keys(value.plprogram$thumbnails).length) {
                Object.keys(value.plprogram$thumbnails).forEach((key) => {
                  if (key === "orig-300x533") {
                    thumbnail = value.plprogram$thumbnails[key];
                  } else if (key === "orig-1080x1920") {
                    // console.log(key);
                    background = value.plprogram$thumbnails[key];
                  } else if (key === "orig-720x1280" || key !== "orig-1080x1920") {
                    background = value.plprogram$thumbnails[key];
                  }
                });
              } else {
                background =
                  "https://static.vecteezy.com/system/resources/thumbnails/001/615/918/original/soft-little-particles-floating-and-fading-on-4k-dark-background-video.jpg";
              }
              return { id: value.id, ...value, thumbnail, background };
            });
            setQueryGenre(genreData);
            console.log(genreData);
          })
      )
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [genre]);

  const handleLoadMore = async () => {
    setLoadMore(true);
    const req = await fetch(
      `
      https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&lang=da&byProgramType=series&range=${
        1 - (range.prev + 20)
      }`
    );
    const data = await req.json();

    const update = data.entries.map((value, key) => {
      let thumbnail = "";
      let background = "";
      if (Object.keys(value.plprogram$thumbnails).length) {
        Object.keys(value.plprogram$thumbnails).forEach((key) => {
          if (key === "orig-300x533") {
            thumbnail = value.plprogram$thumbnails[key];
          } else if (key === "orig-1080x1920") {
            // console.log(key);
            background = value.plprogram$thumbnails[key];
          } else if (key === "orig-720x1280" || key !== "orig-1080x1920") {
            background = value.plprogram$thumbnails[key];
          }
        });
      } else {
        background =
          "https://static.vecteezy.com/system/resources/thumbnails/001/615/918/original/soft-little-particles-floating-and-fading-on-4k-dark-background-video.jpg";
      }
      return { id: value.id, ...value, thumbnail, background };
    });
    setQueryGenre(update);
    setRange({ prev: range.prev + 20 });
    setLoadMore(false);
  };

  return (
    <Container>
      {loading ? (
        <Progress isAnimating={loading} />
      ) : (
        <>
          <ContentHeader>
            <h1 style={{ textTransform: "capitalize" }}>{genre}</h1>
            <h6>Series Count: {genreLength}</h6>
          </ContentHeader>
          {queryGenre?.length === 0 ? (
            <div style={{ textAlign: "center" }}> 
            
              <h1>Well.. This is pretty akward.. </h1>
              <img src="/videos/nomovie.gif"></img>
            <Description>
              Ingen film i katerogien&nbsp;
              <span style={{   }}>{genre}</span>
              </Description>
            </div>
          ) : (
            <ContentWrapper>
              <Content>
                {queryGenre?.map((movie, key) => (
                  <ContentItems key={key}>
                    <Wrap>
                      <Link to={{ pathname: "/detail/" + movie.id, state: { movie } }}>
                        <img
                          src={movie?.thumbnail?.plprogram$url || movie?.background}
                          alt={movie?.title}
                        />
                      </Link>
                    </Wrap>
                    <p style={{ textAlign: "center" }}>{movie?.plprogram$titleLocalized?.da}</p>
                  </ContentItems>
                ))}
              </Content>
              <div>
                {loadMore ? (
                  <Progress isAnimating={true} />
                ) : (
                  <LoadMore onClick={handleLoadMore}>Load More</LoadMore>
                )}
              </div>
            </ContentWrapper>
          )}
        </>
      )}
    </Container>
  );
}

export default Series;
