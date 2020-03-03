import React from "react";
import Header from "./Header";
import Paragraph from "./Paragraph";
import Square from "./Square"; 
import People from "./People"; 

let Stuff = (Square) => (
    <>
    <Header text="Hello Props"/>
    <Paragraph text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos." />
    {Square ? <Square colour = 'red' /> : null};
    <People names = {["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"]}/>
    <People />
    </>
);
    export default Stuff;

