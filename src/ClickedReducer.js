import React, { useReducer, useState } from 'react';

const ClickedReducer = () => {

const initialState = { clicked: false }; // setting the initial state how it starts

const reducer = (state, action) => {  //reducer takes state and action 
	switch (action.type) { // takes the value of action type below
		case 'CLICK': return { 
			...state, //this takes the state of how it currently is
			clicked: true // changes clicked to true
		}
		default: return state;
	}
};

const [state, dispatch] = useReducer(reducer, initialState); // dispatch is a function given to by useReducer 
// and we provide it a action and it takes care of calling the reducer for us. Where we write state it's always 
// the state as it currently is

const handleClick = () => {
	dispatch({type: 'CLICK' });
	//dispatch will call the reducer with the state and the action, 
	// we provide dispatch with an action and that gets passed to action above the reducer function. 
};
	return (
		<p onClick={ handleClick }>{ state.clicked ? 'Clicked' : 'Click Me' }</p>
	);
};

export default ClickedReducer;