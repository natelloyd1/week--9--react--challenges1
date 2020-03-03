import React, { Component } from "react";

class Paragraph extends Component {

render() {
    let { text } = this.props;
    return (
        <header>
        <p>{ text }</p>
        </header>
        );
    }
}

export default Paragraph;

