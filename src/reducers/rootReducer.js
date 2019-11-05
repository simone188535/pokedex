import {combineReducers} from 'redux';
import { AddItemReducer, filterSearchReducer } from '../reducers/allReducers';

const rootReducer = combineReducers({
    AddItemReducer,
    filterSearchReducer
});

export default rootReducer;