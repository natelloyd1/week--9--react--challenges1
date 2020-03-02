// import the React library
import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square"; 
// create our component: just a function that returns JSX

const App = () => (
  <>
  <Header />
  <Paragraph /> 
  <Square />
  </> 
  ); 

// export our component
export default App;