import React, { Children } from "react";
import Square from "./Square"; 
// import Square2 from "./Square2"; 

// import List from "./List";
// import CatchMeIfYouCan from "./CatchMeIfYouCan"; 

let Stuff = ( {square} ) => (
    <>
    {square ? <Square color = "green" /> : null}
    </>
);
    export default Stuff;

