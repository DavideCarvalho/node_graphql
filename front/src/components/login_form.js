import React, { Component } from 'react';
import { connect } from 'react-redux';
import { doLogin, loginFormInputChange } from '../actions/login';
import { withRouter } from "react-router-dom";
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';

const titleStyle = {
  color: 'black'
}

class LoginForm extends Component {
  async doLogin(person, e){
    e.preventDefault();
    try {
    const response = await this.props.doLogin(person);
    this.props.history.push(`/admin/${response.login.person.cid}`)
    // response.login.person.isAdmin ? this.props.history.push(`/admin/${response.login.person.cid}`) : this.props.history.push(`/usuario/${response.login.person.cid}`);
    //response.login.person.isAdmin ? <Redirect to={`/admin/${response.login.person.cid}`}/> : <Redirect to={`/usuario/${response.login.person.cid}`}/>
    } catch (e) {
      console.log(e);
      iziToast.show({
        title: 'Erro',
        message: 'Tivemos um problema, por favor, tente novamente',
        color: 'red'
      });
    }
  }

  render(){
    return (
    <div>
      <form>
        <h1 className="title has-text-centered" style={titleStyle}>
          Login
        </h1>
        <p className="control has-icon">
          <input 
          className="input" 
          type="text" 
          placeholder="Email"
          value={this.props.login.loginForm.username}
          onChange={(e) => this.props.loginFormInputChange(e.target.value, 'cid')}
          />
          <i className="fa fa-envelope"></i>
        </p>
        <br />
        <p className="control has-icon">
          <input 
          className="input" 
          type="password"
          placeholder="Password"
          value={this.props.login.loginForm.password}
          onChange={(e) => this.props.loginFormInputChange(e.target.value, 'password')}
          />
          <i className="fa fa-lock"></i>
        </p>
        <br />
        <p className="control">
          <button type="submit" className="button is-primary is-medium is-fullwidth" onClick={(e) => this.doLogin(this.props.login.loginForm, e)}>
            <i className="fa fa-user"></i>
            Login
          </button>
        </p>
      </form>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}


const LoginFormConnected = connect(mapStateToProps, {
  doLogin,
  loginFormInputChange
})(LoginForm);

export default withRouter(LoginFormConnected);