import React, { useState } from 'react';

import './AuthForm.css';

const AuthForm = ({
  heading,
  buttonText,
  isSignup
}: {
  buttonText: string;
  heading: string;
  isSignup?: boolean;
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileImageUrl, setProfileImageUrl] = useState("");

  return (
    <div>
      <div className="row justify-content-md-center text-center">
        <div className="col-md-6">
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <h2>{heading}</h2>
            <label htmlFor="email">Email Address</label>
            <input
              className="form-control"
              id="email"
              name="email"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="password">Password</label>
            <input
              className="form-control"
              id="password"
              name="password"
              type="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            {isSignup && (
              <>
                <label htmlFor="username">Username</label>
                <input
                  className="form-control"
                  id="username"
                  name="username"
                  type="text"
                  onChange={e => setUsername(e.target.value)}
                  value={username}
                />
                <label htmlFor="profileImageUrl">Profile Image URL</label>
                <input
                  className="form-control"
                  id="profileImageUrl"
                  name="profileImageUrl"
                  type="text"
                  onChange={e => setProfileImageUrl(e.target.value)}
                  value={profileImageUrl}
                />
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
