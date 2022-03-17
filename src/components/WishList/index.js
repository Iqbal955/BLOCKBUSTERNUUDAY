import React from "react";
import { useSelector } from "react-redux";
import { selectUserWishList } from "../../features/user/userSlice";
import { Container, ContentItems, Content, Wrap } from "./StyledWishListElements";
import Header from "../Header";

import ImgSlider from "../ImgSlider";
import { Link } from "react-router-dom";


// the useSelector hook is used to access the state of the store. The state is stored in the store as a plain JavaScript object, and we can navigate to the detail page by using the Link component.

// if the wishList is empty, we display a message. if not we map over the wishList and return the movie id and the movie title. In order to get the movies, we use useSelector.

const WishList = () => {
  const wishList = useSelector(selectUserWishList);
  return (
    <>
      <Header />
      <ImgSlider />
      <Container>
        {wishList.length ? (
          <Content>
            {wishList.map((movie, key) => (
              <ContentItems key={key}>
                <Wrap>
                  <Link to={{ pathname: "/detail/" + movie.id, state: { movie } }}>
                    <img src={movie.thumbnail.plprogram$url} alt={movie.title} />
                  </Link>
                </Wrap>
                <p style={{ textAlign: "center" }}>{movie.plprogram$titleLocalized.da}</p>
              </ContentItems>
            ))}
          </Content>
        ) : (
          <p>Intet at se her, tilføj for at se.</p>
        )}
      </Container>
    </>
  );
};

export default WishList;
