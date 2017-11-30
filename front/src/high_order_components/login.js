import React, { Component } from 'react';
import { connect } from 'react-redux'
// import LoginActions from '../actions/login';
import { doLogin, loginFormInputChange } from '../actions/login';

const titleStyle = {
  color: 'black'
}

class Login extends Component {
  render () {
    return (
      <div>
        <section className="hero is-light is-fullheight is-medium is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <article className="card is-rounded">
                  <div className="card-content">
                    <h1 className="title has-text-centered" style={titleStyle}>
                      Login
                    </h1>
                    <p className="control has-icon">
                      <input 
                      className="input" 
                      type="email" 
                      placeholder="Email"
                      value={this.props.login.loginForm.username}
                      onInput={(e) => this.props.loginFormInputChange(e.target.value, 'cid')}
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
                      onInput={(e) => this.props.loginFormInputChange(e.target.value, 'password')}
                      />
                      <i className="fa fa-lock"></i>
                    </p>
                    <br />
                    <p className="control">
                      <button className="button is-primary is-medium is-fullwidth" onClick={(e) => this.props.doLogin(this.props.login.loginForm)}>
                        <i className="fa fa-user"></i>
                        Login
                      </button>
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section> 
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps, {
  doLogin,
  loginFormInputChange
})(Login)