const initialState = {
    listItems: [],
    detailData: []

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

 export const DetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_DATA':
            return state;
       
        default: return state;
    }
 }