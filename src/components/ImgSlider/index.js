import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Carousel, Wrap } from "./StyledImgSliderElements";
import { Link } from "react-router-dom";


// the image slider component is a carousel with images that are linked to the home page. The images are imported from the src\images\slides folder.
// we use the styled-components library to style the carousel. We use the Wrap component to wrap the images in a div. We use the Link component to link the images to the home page. 

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
