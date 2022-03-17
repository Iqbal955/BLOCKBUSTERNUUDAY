import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel, Wrap } from "./StyledImgSliderElements";
import { Link } from "react-router-dom";


// the image slider component is a carousel with images

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <Link to="/home">
        <img src="/images/slides/banner1.jpg" alt="" />
        
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/home">
          <img src="/images/slides/banner3.png" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/home">
        <img src="/images/slides/banner2.jpg" alt="" />
        </Link>
      </Wrap>
      <Wrap>
        <Link to="/home">
        <img src="/images/slides/banner5.jpg" alt="" />
        </Link>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;
