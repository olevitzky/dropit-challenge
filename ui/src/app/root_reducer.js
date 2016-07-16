import { combineReducers } from 'redux';
import masterAppState from './main_routes/master/master_app_reducer';

const rootReducer = combineReducers({
    masterAppState
});

export default rootReducer;
