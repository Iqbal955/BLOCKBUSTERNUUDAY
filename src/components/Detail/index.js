import React from "react";
import { useLocation } from "react-router-dom";
import {
  AddList,
  Background,
  CloseBtn,
  Container,
  ContentMeta,
  Controls,
  Description,
  ImageTitle,
  Player,
  PopContainer,
  PopContent,
  SubTitle,
  Trailer,
} from "./StyledDetailElements";
import {
  addToWishList,
  removeFromWishList,
  selectUserWishList,
  selectUserName,
} from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Popup from "reactjs-popup";

{/*
 Detail component is used to display the details of a movie. It is used in the Detail page. 
 It is also used in the Wishlist page. useLocation is used to get the movie object from the state. we use the movie object to get the background image, trailer, title and description.
 we use dispatch to add the movie to the wishlist. we use dispatch to remove the movie from the wishlist.
  we use selectUserWishList to get the wishlist from the state. we use selectUserName to get the username from the state.
  get the background image, trailer, title and description.
  add the movie to the wishlist.
  remove the movie from the wishlist.
  we use the movie object to get the background image, trailer, title and description.



*/}

const Detail = () => {
  const { state } = useLocation();
  const movie = state?.movie;
  console.log(movie, "movieeee");
  const backgroundImg = movie?.background.plprogram$url
    ? movie?.background.plprogram$url
    : "https://static.vecteezy.com/system/resources/thumbnails/001/615/918/original/soft-little-particles-floating-and-fading-on-4k-dark-background-video.jpg";
  const trailer = movie?.trailer ? movie.trailer : "https://www.youtube.com/embed/zpOULjyy-n8?rel=0";
  const title = movie?.title ? movie.title : "";

  const userName = useSelector(selectUserName);

  const dispatch = useDispatch();
  const wishList = useSelector(selectUserWishList);
  let genre = movie?.plprogram$tags[0].plprogram$titleLocalized.da;
  let genre2 = movie?.plprogram$tags[1].plprogram$titleLocalized.da;
  let spilletid = movie?.plprogram$runtime && movie?.plprogram$runtime.toString() / 60 + " min";


  let director = movie?.plprogram$credits
    .filter((credit) => credit.plprogram$creditType === "director")
    .map((credit) => credit.plprogram$personName)
    .join(", ");

  let actors = movie?.plprogram$credits
    .filter((credit) => credit.plprogram$creditType === "actor")
    .map((credit) => credit.plprogram$personName)
    .join(", ");

  return (
    <Container>
      <Background>
        <img src={backgroundImg} alt={title} />
      </Background>
      <ImageTitle>
        {/* <img src={title} alt={title} /> */}
        {title}
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
            <span>&nbsp;KØB </span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <span>Trailer</span>
            </a>
          </Trailer>

          {userName ? (
            wishList?.findIndex((list) => list.id === movie.id) === -1 ? (
              <AddList onClick={() => dispatch(addToWishList(movie))}>
                <span />
                <span />
              </AddList>
            ) : (
              <AddList onClick={() => dispatch(removeFromWishList(movie))}>
                <span />
              </AddList>
            )
          ) : (
            <Popup
              trigger={
                <AddList onClick={() => dispatch(addToWishList(movie))}>
                  <span />
                  <span />
                </AddList>
              }
              modal
            >
              {(close) => (
                <PopContainer>
                  <PopContent>
                    <CloseBtn className="close" onClick={close}>
                      &times;
                    </CloseBtn>
                    <h1>Øv, men du skal være logget ind for at tilføje til din liste</h1>
                  </PopContent>
                </PopContainer>
              )}
            </Popup>
          )}
        </Controls>
        <SubTitle>{movie?.subTitle}</SubTitle>
        <Description>{movie?.description}</Description>
      </ContentMeta>
      <ContentMeta>
        <Description>
          <p>
            <SubTitle>Genre: </SubTitle>

            {genre ? genre : "Unknown"}
            {genre2 ? " / " + genre2 : ""}
          </p>
          <p>
            <SubTitle>Udgivelsesdato: </SubTitle>
            {movie?.plprogram$year ? movie.plprogram$year : "Unknown"}
          </p>
          <p>
            <SubTitle>Spilletid: </SubTitle>
            {spilletid ? spilletid : "Ukendt"}
          </p>
          <p>
            <SubTitle>Direktør: </SubTitle>
            {director ? director : "Unknown"}
          </p>
          <p>
            <SubTitle>Skuespillere: </SubTitle>
            {actors ? actors : "Unknown"}
          </p>
        </Description>
      </ContentMeta>
    </Container>
  );
};

export default Detail;
