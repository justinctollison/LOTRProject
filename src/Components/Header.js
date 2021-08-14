import React from "react"
import TheOneRing from "./TheOneRing.jpg"
import MiddleEarthMap from "./MiddleEarthMap.jpeg"

function Header(){
    return (
        <header>
            <h1 className="font">
                Lord of the Rings <img src={TheOneRing}/>
            </h1>
        </header>
    )
}

export default Header