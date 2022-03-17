import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../../features/movie/movieSlice";
import { selectUserName, selectUserWishList } from "../../features/user/userSlice";
import { useState } from "react";
import db from "../../firebase";

import { Container } from "./StyledHomeElements";
import Header from "../Header";

import ImgSlider from "../ImgSlider";
import Recommends from "../Recommends";
import Viewers from "../Viewers";
import NewBlockBuster from "../NewBlockBuster";
import Trending from "../Trending";
import Progress from "../../features/Loader/Progress";


//Dispatch is used to dispatch actions to the redux store and useSelector is used to get the state from the store 
//and useEffect is used to run a function after the component is rendered. 

const HOME = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const wishList = useSelector(selectUserWishList);
  let recommends = useMemo(() => [], []);
  let newOnBlockBusters = useMemo(() => [], []);
  let originals = useMemo(() => [], []);
  let trending = useMemo(() => [], []);
  let thumbnail = "";
  let background = "";

  const [apiData, setapiData] = useState({});
// We use useEffect to fetch the data from the api and set it to the state.
  useEffect(() => {
    fetch(
      `https://feed.entertainment.tv.theplatform.eu/f/jGxigC/bb-all-pas?form=json&range=1-12&lang=da`
    )
      .then((response) => response.text())
      .then((data) => {
        const parsedData = JSON.parse(data);
        const apiData = parsedData.entries;

        setapiData(apiData);


        // we use map to loop through the apiData and set the data to the variables. Based on the key we set the data to the variables. That, is the thumbnail and background.
        apiData.map((recommended, key) => {
          Object.keys(recommended.plprogram$thumbnails).forEach((key) => {
            if (key === "orig-300x533") {
              thumbnail = recommended.plprogram$thumbnails[key];
            }

            if (key === "orig-1080x1920") {
              background = recommended.plprogram$thumbnails[key];
            }

            else if (key === "orig-720x1280" || key !== "orig-1080x1920") {
              background = recommended.plprogram$thumbnails[key];
            }
            // if we dont have data we set the background to the default image.

            else {
              background =
                "https://static.vecteezy.com/system/resources/thumbnails/001/615/918/original/soft-little-particles-floating-and-fading-on-4k-dark-background-video.jpg";
            }
          });
            // we set the data to the array.
          recommends = [
            ...recommends,
            { id: recommended.id, ...recommended, thumbnail, background },
          ];
        });

        // we continue doing this for the other arrays.

        apiData.map((newOnBlockBuster, key) => {
          Object.keys(newOnBlockBuster.plprogram$thumbnails).forEach((key) => {
            if (key === "orig-300x533") {
              thumbnail = newOnBlockBuster.plprogram$thumbnails[key];
            }
            if (key === "orig-1080x1920") {
              background = newOnBlockBuster.plprogram$thumbnails[key];
            }
            else if (key === "orig-720x1280" || key !== "orig-1080x1920") {
              background = newOnBlockBuster.plprogram$thumbnails[key];
            }
            else {
              background =
                "https://static.vecteezy.com/system/resources/thumbnails/001/615/918/original/soft-little-particles-floating-and-fading-on-4k-dark-background-video.jpg";
            }
          });
          newOnBlockBusters = [
            ...newOnBlockBusters,
            { id: newOnBlockBuster.id, ...newOnBlockBuster, thumbnail, background },
          ];
        });

        apiData.map((trend, key) => {
          Object.keys(trend.plprogram$thumbnails).forEach((key) => {
            if (key === "orig-300x533") {
              thumbnail = trend.plprogram$thumbnails[key];
            }
            else if (key === "orig-1080x1920") {
              // console.log(key);
              background = trend.plprogram$thumbnails[key];
            } else if (key === "orig-720x1280" || key !== "orig-1080x1920") {
              background = trend.plprogram$thumbnails[key];
            }
            else {
              background =
                "https://static.vecteezy.com/system/resources/thumbnails/001/615/918/original/soft-little-particles-floating-and-fading-on-4k-dark-background-video.jpg";
            }
          });
          trending = [...trending, { id: trend.id, ...trend, thumbnail, background }];
        });

       
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            break;
          default:
            break;
        }
      });

      // we dispatch the setMovies action to the redux store.
      dispatch(
        setMovies({
          recommend: recommends,
          newOnBlockBuster: newOnBlockBusters,
          original: originals,
          trending: trending,
        })
      );
    });
    // we return all of the arrays to the component

  }, [ dispatch, newOnBlockBusters, originals, recommends, trending]);

  return (
    <Container>
      <Header />
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewBlockBuster />
      <Trending />
    </Container>
  );
};

export default HOME;
