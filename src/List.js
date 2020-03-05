// import React, { Component } from "react";

// class List extends Component {
//   constructor(props) {
//     super(props);
//     // add the value of the input to the state
//     this.state = { input: "" };
//     this.handleChange = this.handleChange.bind(this);
//     }
 
//     createLi(list) {
//         let button = list.getElementById("button");

//         button.addEventListener("click", () => {
//             const p = list.createElement("p")
//             button.after(p);
//          }); 
//     }

//     handleChange(e) {
//         this.setState({ input: e.currentTarget.value });
//     }

//     handleClick(p) {
//         this.setState({createLi(this.state.input)});
//     }

//     render() {
//         return (
//         <div className="form-group">
//             <label>{ this.props.label }</label>
//             { /* use the value of the state */ }
//             <input
//             onChange={ this.handleChange }
//             value={ this.state.input }
//             name={ this.props.name }
//             className="form-control"
//             />

//             <ul className="form-text text-muted">
//             <li>{ this.state.input } </li>
//             </ul>
//             <button onClick={ this.handleClick }> Add </button>
//         </div> 
//         );
//     } 
// };
// export default List;