
import React, { Component } from "react";

class Square extends Component {

    constructor(props) {
      super(props);

      this.state = { clicked: false}; 

      this.handleClick = this.handleClick.bind(this); 
    }
    handleClick() {
        this.setState({ clicked:!this.state.clicked })
    }

    render() {

      let {clicked} = this.state; 
      let {color} = this.props; 

      const style = { 
        width: '200px',
        height: '200px',
        backgroundColor: clicked ? color : "hotpink"
      };           
      
      return ( 
        <div onClick={ this.handleClick } style = { style }></div>
        ); 
    }
  }
    Square.defaultProps = {
      color: 'hotpink',
    }
  
export default Square;
