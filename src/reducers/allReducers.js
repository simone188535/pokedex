const initialState = {
    // allData: [],
    listItems: [],
    // filteredValues: []
};

export function AddItemReducer(state = initialState, action) {
    switch (action.type) {
        // console.log('Add Item Is working');
        // console.log(action);
        // console.log(state);
        case 'ADD_ITEM':
            return Object.assign({}, state, {
                listItems: state.listItems.concat(action.payload)
            })
        default: return state;
    }
 }
export function filterSearchReducer(state = initialState, action) {
    switch (action.type) {
        case 'FILTER_LIST':
                return console.log("is this working");
            // return console.log(action);

        default: return state;
    }
}