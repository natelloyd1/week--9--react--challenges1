import React, { Component } from "react";

class People extends Component {
    
    handleClick() {
        console.log("Hello World"); 
    }

    render() {

        let { names } = this.props; 
            
        return (
            names ? 
                (<ul onClick={ this.handleClick }>
                {
                    names.map((name, i) => (
                        <li key={i}> {name} </li>
                    ))
                }
                </ul>) 
                : 
                <p>Nothing to see here!</p> 
        )
    }
}

export default People;