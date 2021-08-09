import React from "react"
import Movie from "./Movie"

function MovieList( {movieData} ){

    const displayMovies = movieData.map((movie) => {
        return <Movie key={movie._id} 
        name={movie.name} 
        awards={movie.academyAwardWins} 
        score={movie.rottenTomatoesScore} 
        budget={movie.budgetInMillions}
        revenue={movie.boxOfficeRevenueInMillions}
        time={movie.runtimeInMinutes}   />
    })

    return (
        <ul className="list" style={{ display: "flex", flexWrap: "wrap" }}>
            {displayMovies}
        </ul>
    )
}

export default MovieList