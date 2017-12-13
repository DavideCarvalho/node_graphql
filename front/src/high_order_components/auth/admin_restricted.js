import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

export default (ComponentToBeShown) => {
  class AdminRestricted extends Component {
    render() {
      return (
        !this.props.user.person.isAdmin ?
        <Redirect to='/login' /> :
        <ComponentToBeShown match={this.props.match} history={this.props.history} location={this.props.location} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }

  const AdminRestrictedConnected = connect(mapStateToProps)(AdminRestricted);
  return withRouter(AdminRestrictedConnected);
}