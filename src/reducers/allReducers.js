const initialState = {
    allData: [],
    addedData: [],
    filteredValues: []
};
export function viewAllReducer(state = initialState, action) {
    if (action.type === "TESTING") {
        console.log("simple reducer is working");
    }
    return state;
};

export function AddItemReducer(state = initialState, action) {
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
export function filterSearchReducer(state = initialState, action) {
    switch (action.type) {
        case 'FILTER_SEARCH':
                return console.log("is this working");
            // return console.log(action);

        default: return state;
    }
}