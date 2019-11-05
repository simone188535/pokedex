const initialState = {
    // allData: [],
    listItems: [],
    // filteredValues: []
};

export function DisplayListReducer(state = initialState, action) {
    switch (action.type) {
        // console.log('Add Item Is working');
        // console.log(action);
        // console.log(state);
        case 'ADD_ITEM':
            return Object.assign({}, state, {
                listItems: state.listItems.concat(action.payload)
            })
        case 'FILTER_LIST':
                let payload = action.payload;
        // console.log(state);
                return {...state, listItems: state.listItems.filter((action)=>{
                    console.log(payload);
                    // console.log(action);
                    return action.name.includes(payload);
                     
                })}
                // return  {...state};
        
       
        default: return state;
    }
 }