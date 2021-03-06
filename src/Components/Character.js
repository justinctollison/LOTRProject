import React from "react"

function Character( {name, gender, race, realm, link, death, birth} ){
    return (
        <li className="card">
            <h1>{name}</h1>
            <h3>Gender: {gender}</h3>
            <h3 className="label">Race: {race}</h3>
            <h3>Realm: {realm}</h3>
            <h3>Birth: {birth}</h3>
            <h3>Death: {death}</h3>
            <a href={link} target="_blank"><h4>Wiki Link</h4></a>
        </li>
    )
}

export default Character