//import axios from 'axios';
import { createActions } from 'reduxsauce';
import client from 'simple-graphql-client'


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
  const query = client('http://localhost:8057/login');
  try {
    const data = await query(`
    query($login: LoginInput) {
      login(login: $login) {
        person {
          cid
          name
          isAdmin
        }
        authentication
      }
    }
    `, { 
      login: {
        cid,
        password
      } 
    })
    dispatch({
      type: DO_LOGIN,
      payload: data
    })
    return Promise.resolve(data);
  } catch (e) {
    console.log(e)
    return Promise.reject(e)
  }
}


const { Types, Creators } = createActions({
  loginFormInputChange,
  doLogin
}, {});

export const LoginTypes = Types;
export default Creators;