import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducers';

const RootReducer = combineReducers({
    session,
    errors
});

export default RootReducer;