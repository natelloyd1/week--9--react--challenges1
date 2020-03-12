import React, { Component } from "react";

class Clicked extends Component {

    constructor(props) {
        super(props);

        this.state = { clicked: false }; 

        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        this.setState({ clicked:!this.state.clicked })
    }
    
    render() {

        let { clicked } = this.state; 
            
        return ( 
                <p onClick={ this.handleClick }>
                { clicked ? "clicked" : "non clicked"}
                </p>
        );  
    }
}

export default Clicked;