import {combineReducers} from 'redux';
// import viewAllReducer from '../reducers/viewAllReducer';
import AddItemReducer from '../reducers/addItemReducer';

const rootReducer = combineReducers({
    // viewAllReducer,
    AddItemReducer
});

export default rootReducer;