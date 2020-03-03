import React from "react";
import "./App.css"; 

let Square = ({colour}) => (
    <div style={{
        backgroundColor: colour,
        width: '200px',
        height: '200px'
      }}>
    </div>
);
    
export default Square;
