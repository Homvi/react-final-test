import React from 'react'
import { useState, useEffect } from "react"

const Subscription = () => {

    const [isEmailValid, setEmailValidity] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [postBody, setPostBody] = useState({})

    const mailValidator = (mail) => {
        let inputValueArr = mail.split("")
        if (inputValueArr.indexOf("@") !== -1 && inputValueArr.indexOf(".") !== -1) {
            setEmailValidity(true)
        }
        else {
            setEmailValidity(false)
        }

    }
    useEffect(() => {
        mailValidator(inputValue)

    }, [inputValue])

    const sendData = (e) => {

e.preventDefault();

        async function postData(url = 'http://localhost:3000/api/hotels/subscribe', data = {
            "email": inputValue,
            "hotel": "Hotel name"
        }) {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            return response.json();
        }
        postData("http://localhost:3000/api/hotels/subscribe", {
            "email": inputValue,
            "hotel": "Hotel name"
        })
            .then(res => { res.json() }).then(data => console.log(data))
    }


    return (
        <div>
            <h1>Request more info about</h1>
            <form action="#">
                <input onChange={e => setInputValue(e.target.value)} type="email" name="mail" id="mail" />
                {isEmailValid ? <button onClick={sendData} >Send</button> : <button disabled>Send</button>}
            </form>
        </div>
    )
}

export default Subscription
