//import axios from 'axios';
import { createActions } from 'reduxsauce';
import graphqlRequest from './graphql_request';


export const LOGIN_FORM_INPUT_CHANGE = 'LOGIN_FORM_INPUT_CHANGE'
export const loginFormInputChange = (text, field) => (dispatch) => {
  const payload = { text, field }
  dispatch({
    type: LOGIN_FORM_INPUT_CHANGE,
    payload
  })
}

const DO_LOGIN = 'DO_LOGIN';
export const doLogin = ({cid, password}) => async(dispatch) => {
  const query = `
  query($login: LoginInput) {
    login(login: $login) {
      cid
      name
      isAdmin
    }
  }
  `;
  const variables = {
    login: {
      cid,
      password
    }
  };
  try {
    const response = await graphqlRequest('http://localhost:8057/login', query, variables)
    dispatch({
      type: DO_LOGIN,
      payload: response
    })
    return Promise.resolve(response);
  } catch (e) {
    console.log(e);
    return Promise.reject(e)
  }
}


const { Types, Creators } = createActions({
  loginFormInputChange,
  doLogin
}, {});

export const LoginTypes = Types;
export default Creators;