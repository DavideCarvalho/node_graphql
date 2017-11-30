import { combineReducers } from 'redux';
import LoginReducer from './login_reducer';

const rootReducer = combineReducers({
    login: LoginReducer
})

export default rootReducer;