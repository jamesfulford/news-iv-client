import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "../../components/Homepage";
import AuthForm from "../../components/AuthForm";
import { UserLogin, NewUser } from "../../models/user";
import { CurrentUserState } from "../../store/reducers/currentUser";
import MessageForm from '../MessageForm';

const Main = ({
  currentUser,
  signInUser,
  signUpUser,
  errorMessage,
  clearError,
  history
}: {
  currentUser: CurrentUserState;
  signInUser: (user: UserLogin) => void;
  signUpUser: (user: NewUser) => void;
  errorMessage?: string;
  clearError: Function;
  history: any;
}) => {
  useEffect(() => {
    // listen() returns an unsubscriber to avoid memory leaks
    return history.listen(() => {
      clearError();
    });
  }, [clearError, history]);
  return (
    <>
      {errorMessage && (
        <div className="d-flex m-2 justify-content-center">
          <span className="alert alert-warning">{errorMessage}</span>
        </div>
      )}
      <div className="container">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Homepage {...props} currentUser={currentUser} />
            )}
          />
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
          <Route exact path="/users/:id/messages/new" component={MessageForm} />
        </Switch>
      </div>
    </>
  );
};

export default Main;
