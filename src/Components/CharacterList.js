import React from "react"
import Character from "./Character"

function CharacterList( {characterData} ){

    const displayCharacters = characterData.map((character) => {
        return <Character key={character._id} name={character.name} gender={character.gender} race={character.race} realm={character.realm} link={character.wikiUrl}   />
    })

    return (
        <ul className="list" style={{ display: "flex", flexWrap: "wrap" }}>
            {displayCharacters}
        </ul>
    )
}

export default CharacterList