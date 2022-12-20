import React from 'react';
import Movie from '../components/Movie'

const MovieList = ({ movies }) => {
    const movieNodes = movies.map((movie) => {
        return (
            <Movie key={movie.id} name={movie.name} url={movie.url}/>
        )
    });
    return (
        <>
        <ul>
        {movieNodes}
        </ul>
        </>
    )
}

export default MovieList;