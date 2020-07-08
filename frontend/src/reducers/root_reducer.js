import { combineReducers } from 'redux';
import session from './session_reducer';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';

const RootReducer = combineReducers({
    entities: entitiesReducer,
    session,
    errors: errorsReducer,
});

export default RootReducer;