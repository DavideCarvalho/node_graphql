import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

export default function (ComponentToBeShown) {
  class CheckLoginSession extends Component {
    componentWillMount() {
      if (this.props.user.person.isAdmin === true) {
        this.props.history.push(`/admin/${this.props.user.person.cid}`)
      }
      if (this.props.user.person.isAdmin === false) { 
        this.props.history.push(`/usuario/${this.props.user.person.cid}`)
      }
    }
    render() {
      return (
        <ComponentToBeShown match={this.props.match} history={this.props.history} location={this.props.location} />
      )
    }
  }

  const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }

  const CheckLoginSessionConnected = connect(mapStateToProps)(CheckLoginSession);
  return withRouter(CheckLoginSessionConnected);
}