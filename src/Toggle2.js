import React, { useState } from "react";

const Toggle2 = ({alternate, initial}) => {

const [clicked, setClicked ] = useState(false); 

const handleClick = () => {
    setClicked(!clicked) 
}
    return (
        <div>
        <button onClick={ handleClick }>Toggle</button>
        <p>{clicked ? alternate : initial} </p>
        </div>
    ); 
}

export default Toggle2; 