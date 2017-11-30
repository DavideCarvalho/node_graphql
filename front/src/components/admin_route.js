import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    this.props.user.isAdmin ? (<Component {...props} />) : <Redirect to='/login'/>
    )
  }/>
)

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(AdminRoute);