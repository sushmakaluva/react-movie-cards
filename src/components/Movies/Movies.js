import React from 'react';
import data from "../../services/movies.json";
import MovieList from './MovieList';

function Movies() {
    console.log(data);
    return (
        <MovieList movies={data}/>
    )
}


export default Movies;