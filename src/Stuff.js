import React, { Children } from "react";
import Paragraph from "./Paragraph";
import Square from "./Square"; 
import Toggle from "./Toggle"; 
import CountThings from "./CountThings"; 
import StepCounter from "./StepCounter"; 
import PasswordStrength from "./PasswordRename"; 
import TempConverter from "./TempConverter"; 
// import List from "./List";
// import CatchMeIfYouCan from "./CatchMeIfYouCan"; 

let Stuff = ( {square} ) => (
    <>
    <Paragraph text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quamquam tu hanc copiosiorem etiam soles dicere. Ubi ut eam caperet aut quando? Videmus igitur ut conquiescere ne infantes quidem possint. Magna laus. Bonum patria: miserum exilium. Sed tu istuc dixti bene Latine, parum plane. Duo Reges: constructio interrete. Ergo hoc quidem apparet, nos ad agendum esse natos." />
    {square ? <Square color = "green" /> : null}
    <Toggle initial="Hello" alternate="World" />
    <CountThings initial={ 50 } max={ 100 } />
    <StepCounter max={ 100 } step={ 5 } />
    {/* <CatchMeIfYouCan jump={ 100 }></CatchMeIfYouCan> */}
    <PasswordStrength />
    <TempConverter />
    {/* <List />  */}
    </>
);
    export default Stuff;

