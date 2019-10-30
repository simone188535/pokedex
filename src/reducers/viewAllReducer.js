const initialState = {
    allData: []
  };
  function viewAllReducer(state = initialState, action) {
    if (action.type === "TESTING") {
     console.log("simple reducer is working");
    }
    return state;
  }
  export default viewAllReducer;