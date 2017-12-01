import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './high_order_components/login';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise'
import thunk from 'redux-thunk'
import adminRestricted from './high_order_components/auth/admin_restricted';
import userRestricted from './high_order_components/auth/user_restricted';
import AdminDashboard from './high_order_components/admin/admin_dashboard';
import UserDashboard from './high_order_components/user/user_dashboard';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(thunk, promise)
));

const app = (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path='/' exact component={(props) => <Login {...props} />}></Route>
        <Route path='/login' component={(props) => <Login {...props} />}></Route>
        <Route path='/admin/:cid' component={adminRestricted(AdminDashboard)}></Route>
        <Route path='/usuario/:cid' component={userRestricted(UserDashboard)}></Route>
      </Switch>
    </Provider>
</Router>
)

export default app;