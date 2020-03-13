import React, { Component } from "react";

export default class SquareLift extends Component {

    constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this); 
    }

    handleClick() {
        this.props.onChange( this.props.color )
    }

    render() {

      let {color, selected} = this.props; 

      const style = { 
        width: '200px',
        height: '200px',
        backgroundColor: selected ? color : "grey"
      };           
      
      return ( 
        <div onClick={ this.handleClick } style = { style }></div>
        ); 
    }
}
    
    SquareLift.defaultProps = {
      color: 'hotpink',
    }
  
