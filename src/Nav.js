import React, { Component } from "react";
import { Link } from 'react-router-dom'; 

function Nav() {
 
    return (
        <nav>
            <h2>My second App</h2>
                <ul className="nav-links" >
                    <Link to="/clicked">
                    <li className="nav-links">Clicked</li>
                    </Link>
                    <Link to="/clicked2">
                        <li className="nav-links">Clicked2</li>
                    </Link>
                    <Link to="/clickedreducer">
                        <li className="nav-links">Clicked Reducer </li>
                    </Link>
                    <Link to="/CountThings">
                    <li className="nav-links">Count Things</li>
                    </Link>
                    <Link to="/countthingsreducer">
                        <li className="nav-links">Count Things Reducer</li>
                    </Link>
                    <Link to="/Header">
                    <li className="nav-links">Header</li>
                    </Link>
                    <Link to="/length">
                    <li className="nav-links">Length</li>
                    </Link>
                    <Link to="/Paragraph">
                    <li className="nav-links">Paragraph</li>
                    </Link>
                    <Link to="/PasswordStrength"> 
                    <li className="nav-links">Password Rename</li>
                    </Link>
                    <Link to="/allpeople">
                    <li className="nav-links">People</li>
                    </Link>
                    <Link to="/Square">
                    <li className="nav-links">Square</li>
                    </Link>
                    <Link to="/square2">
                        <li className="nav-links">Square 2</li>
                    </Link>
                    <Link to="/squarereduce">
                        <li className="nav-links">Square Reduce</li>
                    </Link>
                    <Link to="/squareparent">
                        <li className="nav-links">Square Parent</li>
                    </Link>
                    <Link to="/StepCounter">
                    <li className="nav-links">Step Counter</li>
                    </Link>
                    <Link to="/stepcounter2">
                        <li className="nav-links">Step Counter2</li>
                    </Link>
                    <Link to="/TempConverter">
                    <li className="nav-links">Temp Converter</li>
                    </Link> 
                    <Link to="/toggle">
                    <li className="nav-links">Toggle</li>
                    </Link>
                    <Link to="/toggle2">
                        <li className="nav-links">Toggle2</li>
                    </Link>
                </ul>
        </nav> 
    )
};


export default Nav; 
 
