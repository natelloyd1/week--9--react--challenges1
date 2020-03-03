import React from "react";

    const People = ({names}) => {
        return names ?
        <ul>
            {
                names.map((name, i) => 
                    <li key={i}> {name}</li>
                )
            }
        </ul> 
        : 
        <p>Nothing to see here!</p>  
    }; 

export default People;