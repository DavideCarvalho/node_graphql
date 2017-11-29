import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';
import Login from './high_order_components/login';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise'
import thunk from 'redux-thunk'
// import logger from 'redux-logger'
import reducers from './reducers';
const store = createStore(reducers, composeWithDevTools(
  // applyMiddleware(thunk, logger, promise)
  applyMiddleware(thunk, promise)
));

const auth = true;

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    auth ? (<Component {...props} />) : <Redirect to='/login'/>
    )
  }/>
)

const Protected = () => <h1>Essa página é protegida pelo Michel Temer comendo a sua mulher enquanto você trabalha</h1>

const app = (
  <Router>
    <Provider store={store}>
      <Switch>
        <Route path='/' exact component={(props) => <App {...props}/>}></Route>
        <Route path='/login' component={(props) => <Login {...props}/>}></Route>
        <PrivateRoute path='/protected' component={props => <Protected {...props} />} />
      </Switch>
    </Provider>
</Router>
)

export default app;