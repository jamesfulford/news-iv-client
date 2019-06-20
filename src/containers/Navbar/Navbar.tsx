import React from "react";
import { Link } from "react-router-dom";
import { User } from "../../models/user";
import './Navbar.css';

export default ({ user }: { user?: User }) => {
  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <span role="img" aria-label="News I V">
            📰💉
          </span>
        </Link>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

