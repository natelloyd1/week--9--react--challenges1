import reducer, {
    addItem,
    removeItem,
    updateItem,
    completeItem
} from './reducer';

const initial = {
    items: []
};

it('adds items', () => {


    const result = addItem(initial, {value: "Hello"}); 

    expect(result.items[0]).toEqual({ task: "Hello", completed: false }); 

        // passing in the previous result, which already had one item
    // should be two items
    }); 
    

    it('value can be changed', () => {
    
        const result = addItem(initial, { value: "Mum" });
        expect ((result.items)).toEqual([{task: "Mum", completed: false }]);
    })




        it('removes items', () => {



});

it('updates items', () => {
    // Updating tests here
});

it('completes items', () => {
    // Completing tests here
});

it('reduces', () => {
    // Reducer tests here
}); 