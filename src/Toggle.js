import React, { Component } from "react";

class Toggle extends Component {

    constructor(props) {
        super(props);

        this.state = { clicked: false}; 

        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        this.setState({ clicked:!this.state.clicked })
    }
    
    render() {

        let { clicked } = this.state; 
        let { initial } = this.props; 
        let { alternate } = this.props; 
            
        return ( 
            <>
            <button onClick={ this.handleClick }> Toggle </button>
            <p> { clicked ? initial : alternate }</p>
            </>
        );  
    }
}

export default Toggle;