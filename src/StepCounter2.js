import React, { useState } from "react";

const StepCounter2 = ({initial, max}) => {

    const [count, setCount] = useState(0); 

    const handleClickAdd = () => { setCount(count + 50 )
    }
    
    const  handleClickMinus = () => { if (count > 0) { setCount(count - 50 ) 
    }}

return (
    <>
    <p>{count} </p>
    <button onClick={ handleClickAdd }> + </button>
    <button onClick={ handleClickMinus }> - </button>
    </> 
    );
}

export default StepCounter2; 