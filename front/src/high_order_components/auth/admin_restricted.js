import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import userState from '../../reducers/user_reducer';
/**
* Higher-order component (HOC) to wrap restricted pages
*/
export default function BaseComponent (Component) {
  class AdminRestricted extends Component {
    render() {
      return (
        !userState().person.isAdmin ?
        <Redirect to='/login' /> :
        <Component {...this.props} />
      )
    }
  }
  return withRouter(AdminRestricted);
}