const initialState = {
    addedData: []
};

function AddItemReducer(state = initialState, action) {
    switch (action.type) {
        // console.log('Add Item Is working');
        // console.log(action);
        // console.log(state);
        case 'ADD_ITEM':
            return Object.assign({}, state, {
                addedData: state.addedData.concat(action.payload)
            })
        default: return state;
    }
}

export default AddItemReducer;