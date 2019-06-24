import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { CurrentUserState } from "../../store/reducers/currentUser";

export default ({
  currentUser,
  logoutUser,
}: {
  currentUser: CurrentUserState;
  logoutUser: Function;
}) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span role="img" aria-label="News I V">
            📰💉
          </span>
        </Link>
        <ul className="nav navbar-nav navbar-right">
          {currentUser.user ? (
            <>
              <li>
                <Link
                  to={`/users/${currentUser.user.id}/messages/new`}
                  className="btn btn-primary"
                >
                  New Message
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="btn btn-white"
                  onClick={e => {
                    e.preventDefault();
                    logoutUser();
                  }}
                >
                  Logout
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/signin" className="btn btn-white">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="btn btn-primary">
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
