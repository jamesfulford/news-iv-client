import React from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../store/reducers';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="" alt="NewsIV Home" />
          </Link>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Login</Link>
          </li>
        </ul>
      </nav>
    );
}

const mapStateToProps = (state: AppState) => ({
    currentUser: state.currentUser,
});

export default connect(mapStateToProps, null)(Navbar);
