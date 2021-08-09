import {useEffect, useState} from "react"
import CharacterContainer from "./CharacterContainer"
import Header from "./Header"

//Routing for About, Home
//better search functionality
//better styling
//placeholder pictures based on race?
//NEED MORE IDEAS

function App(){
    const [characterData, setCharacterData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch("https://the-one-api.dev/v2/character", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer kJcWVV91XgdgiJkJu8OF"
            }
        })
            .then((response) => response.json())
                .then((data) => {
                    setCharacterData(data.docs)
                })
    }, [])

    console.log(characterData)

        return (
            <div className="App">
                <Header />
                <CharacterContainer characterData={characterData} search={search} setSearch={setSearch}/>
            </div>         
        )
    }

export default App