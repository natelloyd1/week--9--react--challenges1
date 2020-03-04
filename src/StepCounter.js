import React, { Component } from "react";

class StepCounter extends Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0
            };
        this.handleClickAdd = this.handleClickAdd.bind(this);
        this.handleClickSubtract = this.handleClickSubtract.bind(this);
    };
    // In here we are setting up the response from an event.
    // The set state is altered every time we click on the button.
    handleClickAdd() {
        if (this.state.counter < this.props.max) { 
            this.setState({ 
                counter: this.state.counter + this.props.step
            })
        } 
    };
    handleClickSubtract() {
        if (this.state.counter > 0) { 
            this.setState({ 
                counter: this.state.counter - this.props.step
            })
        }
    };
    render() {
        const { counter } = this.state;
        
        return (
            <>
            <button onClick={ this.handleClickAdd }> + </button>
            <button onClick={ this.handleClickSubtract }> - </button>
            <p> 
                { counter }
            </p>  
            </> 
            );
    }; // End of render ()
};
export default StepCounter;