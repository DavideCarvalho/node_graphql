import React, { Component } from "react";

const titleStyle = {
  color: 'black'
}

export default class Login extends Component {
  render () {
    return (
      <div>
        <section class="hero is-fullheight is-medium is-bold">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <article className="card is-rounded">
                  <div className="card-content">
                    <h1 className="title has-text-centered" style={titleStyle}>
                      Login
                    </h1>
                    <p className="control has-icon">
                      <input className="input" type="email" placeholder="Email" />
                      <i className="fa fa-envelope"></i>
                    </p>
                    <br />
                    <p className="control has-icon">
                      <input className="input" type="password" placeholder="Password" />
                      <i className="fa fa-lock"></i>
                    </p>
                    <br />
                    <p className="control">
                      <button className="button is-primary is-medium is-fullwidth">
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