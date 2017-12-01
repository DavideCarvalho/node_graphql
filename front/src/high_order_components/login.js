import React, { Component } from 'react';
import LoginForm from '../components/login_form';

export default class Login extends Component {
  render () {
    return (
      <div>
        <section className="hero is-light is-fullheight is-medium is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <article className="card is-rounded">
                  <div className="card-content">
                    <LoginForm />
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