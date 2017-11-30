import { LoginTypes } from '../actions/login';
import { createReducer } from 'reduxsauce';
import update from 'immutability-helper';

const INITIAL_STATE = {
  loginForm: {
    cid: '',
    password: ''
  }
}

const loginFormInputChange = (state = INITIAL_STATE, {type, payload}) => {
  return update(state, {
    loginForm: {
      [payload.field]: {$set: payload.text}
    }
  })
}

const HANDLERS = {
  [LoginTypes.LOGIN_FORM_INPUT_CHANGE]: loginFormInputChange
}

export default createReducer(INITIAL_STATE, HANDLERS);