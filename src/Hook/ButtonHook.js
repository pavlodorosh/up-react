import React, { useState } from "react"

export default function ButtonHook(){
    const [buttonText, setButtonText] = useState('Click Hook');
    return(
        <button onClick={ () => setButtonText('On clicked Hook')}>{buttonText}</button>
    )
}