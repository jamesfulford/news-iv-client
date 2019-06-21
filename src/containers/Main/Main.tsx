import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from '../../components/Homepage';
import AuthForm  from '../../components/AuthForm';
import { UserLogin, NewUser } from '../../models/user';

const Main = ({
  signInUser,
  signUpUser
}: {
  signInUser: (user: UserLogin) => void;
  signUpUser: (user: NewUser) => void;
}) => {
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
                onAuthAction={signInUser}
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
                onAuthAction={signUpUser}
                buttonText="Sign Up"
                heading="Join us."
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};

export default Main;
