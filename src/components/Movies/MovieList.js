import React from 'react'
import MovieCard from './MovieCard'

export default function MovieList(props) {
    return (
        <div className="row">
            {props.movies.map(movie =>
                < MovieCard movie={movie} key={movie.id} />
            )

            }
        </div>
    )
}
