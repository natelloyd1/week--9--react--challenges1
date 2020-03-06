// import the React library
import React from "react";
import Nav from "./Nav"; 
import Stuff from "./Stuff";
import Header from "./Header";
import People from "./People"; 
import Clicked from "./Clicked";
import Length from "./Length"; 
import Paragraph from "./Paragraph";
import TempConverter from "./TempConverter";
import PasswordStrength from "./PasswordRename"; 
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import "./App.css"; 
import 'bootstrap/dist/css/bootstrap.min.css';
import CountThings from "./CountThings";
import StepCounter from "./StepCounter";
import FourOhFour from './FourOhFour';


// create our component: just a function that returns JSX

function App() {  
  return (
  <Router>
    <Nav /> 
    <Switch>
      <Route path="/StepCounter">
        <StepCounter max={ 100 } step={ 5 } exact component={StepCounter} />
      </Route>
      <Route path="/Paragraph">
        <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos." exact component={Paragraph}/>
      </Route> 
      <Route path="/header">
        <Header text="Hello Props" exact component={Header} />
      </Route> 
      <Route path="/CountThings">
        <CountThings initial={ 50 } max={ 100 } />
      </Route>
      <Route path="/TempConverter" exact component={TempConverter}/>
      <Route path="/" exact component={Home} /> 
      <Route path="/length" exact component={Length} /> 
      <Route path="/people" exact component={People} />
      <Route path="/allpeople">
        <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
      </Route>
      <Route path="/clicked" exact component={Clicked} />
      <Route path="/all" exact >
        <Stuff square = {true}/>
      </Route>
      <Route path="/PasswordStrength" exact component={PasswordStrength} />
      <FourOhFour path="/404" component={FourOhFour}/>
      <FourOhFour />

    </Switch>
  </Router>
  );  
  }

  const Home = () => (
    <div>
      <h1>My first homepage on React</h1>
    </div>
  ); 

// export our component
export default App;