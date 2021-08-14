import React from "react"
import MovieList from "./MovieList"
import Search from "./Search"

function MovieContainer( {movieData} ){

    return (
        <div>
            <MovieList movieData={movieData}/>
        </div>
    )
}

export default MovieContainer