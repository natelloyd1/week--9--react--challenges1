import React, { useReducer, useState } from 'react';

const CountThingsReduce = () => {

const initialState = { count: 50, };

const reducer = (state, action) => {  //reducer takes state and action 
	switch (action.type) { // takes the value of action type below
		case 'ADD': return { 
			...state, //this takes the state of how it currently is
			count: state.count +1 // changes clicked to true
        }
        case 'MINUS': return {
            ...state,
            count: state.count -1 
        }
		default: return state;
        }
    }; 

    const [state, dispatch] = useReducer(reducer, initialState); // dispatch is a function given to by useReducer 
    // and we provide it a action and it takes care of calling the reducer for us. Where we write state it's always 
    // the state as it currently is

    const handleClickAdd = () => {
        dispatch({type: 'ADD' });
        //dispatch will call the reducer with the state and the action, 
        // we provide dispatch with an action and that gets passed to action above the reducer function. 
    };
    const handleClickSubtract = () => {
        dispatch({type: 'MINUS' });
        //dispatch will call the reducer with the state and the action, 
        // we provide dispatch with an action and that gets passed to action above the reducer function. 
    };
    return (
        
        <>
            <button onClick={ handleClickAdd }> + </button>
            <button onClick={ handleClickSubtract }> - </button>
            <p> 
                {state.count}
            </p>  
            </> 
        );
    }; // End of render ()

export default CountThingsReduce; 