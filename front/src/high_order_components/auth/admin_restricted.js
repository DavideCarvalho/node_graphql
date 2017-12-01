import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import userState from '../../reducers/user_reducer';

export default (ComponentToBeShown) => {
  class AdminRestricted extends Component {
    render() {
      return (
        !userState().person.isAdmin ?
        <Redirect to='/login' /> :
        <ComponentToBeShown {...this.props} />
      )
    }
  }
  return withRouter(AdminRestricted);
}