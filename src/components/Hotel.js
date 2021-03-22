import React from 'react'
import { useState } from "react";

const Hotel = ({ data }) => {
    const [isNameVisible, setNameVisibility] = useState(false)
    const [buttonContent, setButtonContent] = useState("show more")
    const [isSubscribeVisible, setSubscribeVisibility] = useState(false)


    let toggleData = () => {
        setNameVisibility(!isNameVisible)
        if(buttonContent == "show more"){
            setButtonContent("show less")
        }
        else {
            setButtonContent("show more")
        }
    }


    return (
        <div>
            {data.map((hotel, id) => {
                return (
                    <div className="hotel-card">
                        <div className="hotel-name">{hotel.name}</div>
                        { isNameVisible && <div>City:{hotel.city}</div>}
                        { isNameVisible && <div>Stars:{hotel.stars}</div>}
                        <button onClick={toggleData} >{buttonContent}</button>
                    </div>
                )
            })}
            {isNameVisible && <button>Request more info</button>} 
        </div>
    )
}

export default Hotel
