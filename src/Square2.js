
import React, { useState } from "react";


const Square2 = ({ color }) => {

    const [clicked, setClicked ] = useState(false); 
    const handleClick = () => {
        setClicked(!clicked) 
    }

    // const updateColour = () => changeColour(true); 

    //   let {clicked} = this.state; 
    //   let {color} = this.props; 

      const style = { 
        width: '200px',
        height: '200px',
        backgroundColor: clicked ? color : "hotpink", 
      };           
      
      return ( 
        <div onClick={ handleClick } style = { style }></div>
        ); 
    }

    // Square.defaultProps = {
    //   color: 'hotpink',
    // }

export default Square2;
