
export const addItem = (state,  action ) => {
    return { ...state,
        items: [
            ...state.items, 
            { task: action.value, completed: false }
        ]
    } 
};

const reducer = (state, action) => {  
	switch (action.type) { 
		case 'ADD': return addItem(state, action)
        default: return state;
    }
};

