const initialState = {
    listItems: []

};

export const DisplayListReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return Object.assign({}, state, {
                listItems: state.listItems.concat(action.payload)
            })
       
        default: return state;
    }
 }

