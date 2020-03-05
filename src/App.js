// import the React library
import React from "react";
import Stuff from "./Stuff";
import Header from "./Header";
import People from "./People"; 
import Clicked from "./Clicked";
import Length from "./Length"; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 

// create our component: just a function that returns JSX

const App = () => ( 
  <Router>
    <Switch>
      <Route path="/header">
        <Header text="Hello Props" exact component={Header} />
      </Route> 
      <Route path="/length" exact component={Length} /> 
      <Route path="/people" exact component={People} />
      <Route path="/allpeople">
        <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
      </Route>
      <Route path="/clicked" exact component={Clicked} />
      <Route path="/all" exact >
        <Stuff square = {true}/>
      </Route>
    </Switch>
  </Router>
  );  

// export our component
export default App;