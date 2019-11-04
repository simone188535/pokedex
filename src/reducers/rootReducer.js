import {combineReducers} from 'redux';
// import viewAllReducer from '../reducers/viewAllReducer';
import { AddItemReducer
    // , filterSearchReducer
 } from '../reducers/allReducers';

const rootReducer = combineReducers({
    // viewAllReducer,
    AddItemReducer,
    // filterSearchReducer
});

export default rootReducer;