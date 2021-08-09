import React from "react"
import CharacterList from "./CharacterList"
import Search from "./Search"

function CharacterContainer( {characterData, search, setSearch, category, setCategory} ){

    const filterCharacter = characterData.filter((character) => {
        return (character.name.toLowerCase().includes(search.toLowerCase()) || character.race.toLowerCase().includes(search.toLowerCase()))
        && (category === "All" || character.race == category)
    })

    const races = ["All", "Human", "Elf", "Hobbit", "Orc", "Dwarf", "Maiar"]

    const raceButtons = races.map((race) => {
        const raceName = race === category ? "selected" : null;
        return (
            <button
                key={race}
                className={raceName}
                onClick={() => setCategory(race)}
            >
                {race}
            </button>
        )
    })

    console.log(category)

    return (
        <div>
            <header>{raceButtons}</header>
            <Search search={search} setSearch={setSearch}/>
            <CharacterList characterData={filterCharacter}/>
        </div>
    )
}

export default CharacterContainer