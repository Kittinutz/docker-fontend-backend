import {combineReducers} from 'redux';
import usersReducer from './usersReducers';
import authReducer from './authReducer';
import adminReducer from './adminReducer';
const rootReducer = combineReducers({
    users: usersReducer,
    auth:authReducer,
    admins:adminReducer
});
export default rootReducer;