import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';
import { CurrentUserState } from '../../store/reducers/currentUser';
import MessageTimeline from '../MessageTimeline';

const Homepage = ({ currentUser }: { currentUser: CurrentUserState }) => {
  return currentUser.user ? (
    <MessageTimeline currentUser={currentUser} />
  ) : (
    <div className="home-hero">
      <h1>What's Happening?</h1>
      <h4>New to News IV?</h4>
      <Link to="/signup" className="btn btn-primary">
        Sign up here
      </Link>
    </div>
  );
};

export default Homepage;
