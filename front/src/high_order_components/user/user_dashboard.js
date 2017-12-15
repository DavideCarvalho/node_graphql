import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDashboard extends Component{
  ComponentWillMount() {
    
  }

  render(){
    return (
      <div>
        <h1>UserDashboard</h1>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(UserDashboard)