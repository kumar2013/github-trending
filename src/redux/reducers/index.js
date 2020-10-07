import { combineReducers } from 'redux';

import trending from './trending';
import starred from './starred';


const rootReducer = combineReducers({
    trending,
    starred
});


export default rootReducer;