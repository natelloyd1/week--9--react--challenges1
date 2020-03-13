import React, { Children, Component } from "react";
import SquareLift from "./SquareLift"; 
// import Square2 from "./Square2"; 

// import List from "./List";
// import CatchMeIfYouCan from "./CatchMeIfYouCan"; 

class SquareParent extends Component {

    constructor (props) {
    super(props)
    this.state = { currentColor: "blue" }
    this.onChangeColor=this.onChangeColor.bind(this); 
    }


    onChangeColor(color) { 
    
    this.setState({currentColor: color})        

    }


    render() {
        return (
        <>
        <SquareLift color="blue" selected={ this.state.currentColor === "blue"} onChange={this.onChangeColor}/>
        <SquareLift color="green" selected={ this.state.currentColor === "green"} onChange={this.onChangeColor}/>
        </>    
        )}

}; 

export default SquareParent;