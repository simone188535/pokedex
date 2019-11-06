import {combineReducers} from 'redux';
import { DisplayListReducer,DetailReducer } from '../reducers/allReducers';

const rootReducer = combineReducers({
    DisplayListReducer,
    DetailReducer
});

export default rootReducer;