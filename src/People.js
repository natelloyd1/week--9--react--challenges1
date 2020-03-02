import React from "react";

    let names = ["James P. Sullivan", "Mike Wazowski", "Boo", "Randall Boggs", "Roz", "Fungus"];

    let People = () => (
        <div>
          <ul>{names.map(name => <li key={name}> {name} </li>)}</ul>
        </div>
      );

export default People;