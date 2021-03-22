import React from 'react'
import { useState } from "react";
import Subscription from "./Subscription"

const Hotel = ({ name, city, stars }) => {
    const [isNameVisible, setNameVisibility] = useState(false)
    const [buttonContent, setButtonContent] = useState("show more")
    const [isSubscribeVisible, setSubscribeVisibility] = useState(false)


    let toggleData = () => {
        setNameVisibility(!isNameVisible)
        if (buttonContent == "show more") {
            setButtonContent("show less")
        }
        else {
            setButtonContent("show more")
        }
    }


    return (
        <div>
           <div>{name}</div>
           {isNameVisible && <div>{city}</div>}
           {isNameVisible && <div>{stars}</div>}
           <button onClick={toggleData} >{buttonContent}</button>
            {isSubscribeVisible && <Subscription />}
            {isNameVisible && <button onClick={e => setSubscribeVisibility(true)} >Request more info</button>}
        </div>
    )
}

export default Hotel
