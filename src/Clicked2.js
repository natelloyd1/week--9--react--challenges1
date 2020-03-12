import React, { useState } from "react";

const Clicked2 = () => {

    const [ clicked, changeClicked ] = useState(false);

    const updateClicked2 = () => changeClicked(true);

    return (
      <p onClick={ updateClicked2 }>
      { clicked ? "clicked" : "non clicked"}
      </p>
    )
  }

export default Clicked2;