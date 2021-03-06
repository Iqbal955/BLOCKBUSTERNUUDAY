import React from 'react';

import { useSelector } from "react-redux";
import { selectTrending } from "../../features/movie/movieSlice";

import { Link } from "react-router-dom";
import { Container, Content, Wrap } from "./StyledTrendingElements";

const Trending = () => {
    
    const movies = useSelector(selectTrending);

    {/*

// we use the movies variable to map over the movies array and return the movie id and the movie title. In order to get the movies, we use useSelector.
// The useSelector hook is used to access the state of the store. The state is stored in the store as a plain JavaScript object, and we can navigate to the detail page by using the Link component.
// The Link component is used to navigate to a new page. 


*/}


    return (
        <Container>
            <h4>Hot lige nu!</h4>
            <Content>
                {movies &&
                    movies.map((movie, key) => (
                        <Wrap key={key}>
                        {movie.id}
                        <Link to={{ pathname: "/detail/" + movie.id, state: { movie } }}>
                        {console.log(movie.thumbnail.plprogram$url)}
                            <img src={movie.thumbnail.plprogram$url} alt={movie.title}/>
                        </Link>
                    </Wrap>
                    ))
                }
            </Content>
        </Container>
    );
}

export default Trending;
