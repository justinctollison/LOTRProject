import React from "react"

function Movie( {name, awards, score, budget, revenue, time} ){
    return (
        <li className="card">
            <h1>{name}</h1>
            <h3>Awards: {awards}</h3>
            <h3>Score: {score.toFixed(0)}</h3>
            <h3>Budget: ${budget} Million</h3>
            <h3>Revenue: ${revenue} Million</h3>
            <h3>Runtime: {time} Minutes</h3>
        </li>
    )
}

export default Movie