// import React, { useReducer, useState } from "react"

// const initial = { clicked : false };

// const reducer = (state, action) => {
//         switch (action.type) {
//         case 'click': return {
//             ...state,
//             clicked: !state.clicked,
//         }
//         default: return state;
//         }
//     };

//     const squareReduce = () => {
//     const [state, dispatch] = useReducer(reducer, initial);
//     const handleClick = () => {
//         dispatch({ type: 'click' });
//     }
//     const style = {
//         height: 200,
//         width: 200,
//         backgroundColor: state.clicked ? 'green' : 'pink'
//     };
//     return <div onClick={ handleClick } style={style} />
// }
// export default squareReduce;