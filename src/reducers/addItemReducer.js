const initialState = {
    addedData: []
  };

  function AddItemReducer(state = initialState, action){
    if(action.type === 'ADD_ITEM'){
        console.log('Add Item Is working');
        console.log(action);
    }
    return state;
  }

  export default AddItemReducer;