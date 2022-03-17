import React from 'react';

import { useSelector } from "react-redux";
import { selectnewBlockBuster } from "../../features/movie/movieSlice";

import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./StyledNewBlockBusterElements";
import Progress from '../../features/Loader/Progress';

const NewBlockBuster = () => {
    const movies = useSelector(selectnewBlockBuster);


// we use the movies variable to map over the movies array and return the movie id and the movie title. In order to get the movies, we use useSelector.
// The useSelector hook is used to access the state of the store. The state is stored in the store as a plain JavaScript object, and we can navigate to the detail page by using the Link component.



    return (
        <Container>
            <h4>Nyt på Blockbuster</h4>
            <Content>
                {console.log(movies, "movies")}
                {movies ? (
                    movies.map((movie, key) => (
                        <Wrap key={key}>
                        {movie.id}
                        <Link to={{ pathname: "/detail/" + movie.id, state: { movie } }}>
                            <img src={movie.thumbnail.plprogram$url} alt={movie.title}/>
                        </Link>
                    </Wrap>
                    ))
                    )
                    : (
                       <Progress  isAnimating={true} />
                    )}
                    
            </Content>
        </Container>
    );
}

export default NewBlockBuster;
