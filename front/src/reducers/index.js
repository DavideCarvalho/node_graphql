import { combineReducers } from 'redux';
import LoginReducer from './login_reducer';
import UserReducer from './user_reducer';

const rootReducer = combineReducers({
    login: LoginReducer,
    user: UserReducer
})

export default rootReducer;