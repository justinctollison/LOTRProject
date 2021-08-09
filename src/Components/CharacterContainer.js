import React from "react"
import CharacterList from "./CharacterList"
import Search from "./Search"

function CharacterContainer( {characterData, search, setSearch} ){

    const filterCharacter = characterData.filter((character) => {
        return character.name.toLowerCase().includes(search.toLowerCase()) || character.race.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div>
            <Search search={search} setSearch={setSearch}/>
            <CharacterList characterData={filterCharacter}/>
        </div>
    )
}

export default CharacterContainer