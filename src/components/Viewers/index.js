import React from "react";
import { Link } from "react-router-dom";
import { Container, ContentItems, Wrap } from "./StyledViewersElements";

const data = [
  {
    name: "comedy",
    imgSrc: "https://i.gifer.com/W7jQ.gif",
    videoSrc: "https://i.gifer.com/W7jQ.gif",
    type: "video/gif",
  },
  {
    name: "horror",
    imgSrc: "/videos/horror.gif",
    videoSrc: "/videos/horror.gif",
    type: "video/gif",
  },
  {
    name: "action",
    imgSrc: "/videos/action.gif",
    videoSrc: "/videos/action.gif",
    type: "video/gif",
  },
  {
    name: "war",
    imgSrc: "https://i.pinimg.com/originals/86/a6/14/86a614a40c4c6ae3baf47d84ddd80e12.gif",
    videoSrc: "https://i.pinimg.com/originals/86/a6/14/86a614a40c4c6ae3baf47d84ddd80e12.gif",
    type: "video/gif",
  },
  {
    name: "thriller",
    imgSrc: "https://media0.giphy.com/media/Z4IXspU3iCHlK/giphy.gif",
    videoSrc: "https://media0.giphy.com/media/Z4IXspU3iCHlK/giphy.gif",
    type: "video/gif",
  },
  {
    name: "romance",
    imgSrc: "/videos/romance.gif",
    videoSrc: "/videos/romance.gif",
    type: "video/gif",
  },
  {
    name: "drama",
    imgSrc: "/videos/drama.gif",
    videoSrc: "/videos/drama.gif",
    type: "video/gif",
  },
  {
    name: "crime",
    imgSrc: "/videos/crime.gif",
    videoSrc: "/videos/crime.gif",
    type: "video/gif",
  },
  {
    name: "fantasy",
    imgSrc: "/videos/fantasy.gif",
    videoSrc: "/videos/fantasy.gif",
    type: "video/gif",
  },
  {
    name: "documentary",
    imgSrc: "/videos/documentary.gif",
    videoSrc: "/videos/documentary.gif",
    type: "video/gif",
  },

];
// the component will display the gifs and the videos and be linkable. We map the data array to the component. and based on the genre we will display the gifs or the videos.
const Viewers = () => {
  return (
    <Container>
      {data.map(({ name, imgSrc, type, videoSrc }) => (
        <ContentItems key={name}>
        <Wrap key={name}>
          <Link to={`/genre/${name}`}>
            <img src={imgSrc} alt={`alt-${name}`} />
            <video autoPlay={true} loop={true} playsInline={true}>
              <source src={videoSrc} type={type} />
            </video>
          </Link>
         
        </Wrap>
      <h4  style={{ textAlign: "center" , textTransform: "uppercase" , margin: "30px"}} >{name}</h4>      </ContentItems>
      ))}
    </Container>
  );
};

export default Viewers;
