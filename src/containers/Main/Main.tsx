import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../../components/Homepage';
import AuthForm  from '../../components/AuthForm';

const Main = () => {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" render={props => <Homepage {...props} />} />
          <Route
            exact
            path="/signin"
            render={props => {
              return (
                <AuthForm
                  {...props}
                  buttonText="Login"
                  heading="Welcome Back."
                />
              );
            }}
          />
          <Route
            exact
            path="/signup"
            render={props => {
              return (
                <AuthForm
                  {...props}
                  isSignup
                  buttonText="Sign Up"
                  heading="Join us."
                />
              );
            }}
          />
        </Switch>
      </div>
    );
}

export default Main;
