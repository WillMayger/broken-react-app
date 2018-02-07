import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect, Switch } from 'react-router-dom';
import initialState from '../../initialState';
import App from '../App';
import Error404 from '../status/Error404';
import Welcome from '../messages/Welcome';


const isAuthenticated = () => false;

const PrivateRoute = ({ component: Component, authCallBack: authCallBack, appState: appState, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      authCallBack() ? (
      <Component appState={appState} {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}
  />
);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
    <PrivateRoute path="/app" authCallBack={isAuthenticated} appState={initialState} component={App} />
    <Route component={Error404} />
  </Switch>
);

export default Routes;