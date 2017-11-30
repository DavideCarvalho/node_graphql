import React, { Component } from 'react';
import { connect } from 'react-redux'
import 'izitoast/dist/css/iziToast.min.css';
import iziToast from 'izitoast';
import { doLogin, loginFormInputChange } from '../actions/login';

const titleStyle = {
  color: 'black'
}

class Login extends Component {

  async doLogin(person){
    try {
    const response = await this.props.doLogin(person);
    response.login.person.isAdmin ? this.props.history.push(`/admin/${response.login.person.cid}`) : this.props.history.push(`/usuario/${response.login.person.cid}`);
    } catch (e) {
      iziToast.show({
        title: 'Erro',
        message: 'Tivemos um problema, por favor, tente novamente',
        color: 'red'
      });
    }
  }

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
                      <button className="button is-primary is-medium is-fullwidth" onClick={(e) => this.doLogin(this.props.login.loginForm)}>
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