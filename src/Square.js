import React from "react";
import "./App.css"; 

function Square ({colour}) {

  const style = { 
        backgroundColor: colour,
        width: '200px',
        height: '200px'
      }; 
      return (
        <div style = { style}></div>
      );
    }; 
      
    
export default Square;
