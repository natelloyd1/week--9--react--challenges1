import React, { Component } from "react";

class PasswordStrength extends Component {
  
    constructor(props) {
    super(props);
    // add the value of the input to the state
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    // e.currentTarget: DOM element we attached the event handler to
    // use the value property to read its current value
    this.setState({ input: e.currentTarget.value });
}

// here we're defining colourChange 

  colourChange() {

    if (this.state.input.length < 9) { 
      return 'red' 
    } else if (this.state.input.length < 16) { 
      return 'orange' 
    } 
      return 'green' 
  }

  render() {

    // everytime the text alters it re-renders and the colourChange function is called and run 
    
    let colour = this.colourChange() 

    return (
            
      <div className="form-group">

          <label>{ this.props.label }</label>
          
          { /* use the value of the state */ }
        
      <input
          onChange={ this.handleChange }
          value={ this.state.input }
          name={ this.props.name }
          className="form-control"
      />

      <p className="form-text text-muted" style = {{ backgroundColor: this.state.input.length ? colour : 'white' }} >
        Password: { this.state.input.length } characters
      </p>
          
      </div> 
    
    
    ); 
  }; 
};

export default PasswordStrength;