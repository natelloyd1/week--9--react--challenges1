import React, { Children } from "react";
import Square from "./Square"; 
import Toggle from "./Toggle"; 
// import List from "./List";
// import CatchMeIfYouCan from "./CatchMeIfYouCan"; 

let Stuff = ( {square} ) => (
    <>
    {square ? <Square color = "green" /> : null}
    <Toggle initial="Hello" alternate="World" />
    </>
);
    export default Stuff;

