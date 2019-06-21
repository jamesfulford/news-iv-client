import React from 'react';
import { Link } from 'react-router-dom';

import './Homepage.css';

const Homepage = (props: any) => {
    return (
        <div className="home-hero">
            <h1>What's Happening?</h1>
            <h4>New to News IV?</h4>
            <Link to="/signup" className="btn btn-info">
                Sign up here
            </Link>
        </div>
    );
}

export default Homepage;
