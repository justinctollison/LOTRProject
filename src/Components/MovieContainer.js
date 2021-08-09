import React from "react"
import MovieList from "./MovieList"
import Search from "./Search"

function MovieContainer( {movieData, search, setSearch} ){

    const filterMovie = movieData.filter((movie) => {
        return movie.name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <MovieList movieData={filterMovie}/>
        </div>
    )
}

export default MovieContainer