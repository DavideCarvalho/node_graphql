import { LoginTypes } from '../actions/login';
import { createReducer } from 'reduxsauce';
import update from 'immutability-helper';

const INITIAL_STATE = {
  authentication: null,
  person: {
    cid: '',
    name: '',
    isAdmin: null
  }
}

const doLogin = (state = INITIAL_STATE, {type, payload}) => {
  return update(state, {
    authentication: {$set: payload.headers.authentication},
    person: {$set: payload.data.login}
  });
}

const HANDLERS = {
  [LoginTypes.DO_LOGIN]: doLogin
}

export default createReducer(INITIAL_STATE, HANDLERS);