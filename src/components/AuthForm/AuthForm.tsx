import React, { useState } from "react";
import { NewUser } from "../../models/user";
import "./AuthForm.css";
import { ErrorCodes } from "../../models/error";

const AuthForm = ({
  heading,
  buttonText,
  isSignup,
  onAuthAction,
  history
}: {
  buttonText: string;
  heading: string;
  isSignup?: boolean;
  onAuthAction: (user: NewUser) => void;
  history: any;
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
            onSubmit={async e => {
              e.preventDefault();
              try {
                await onAuthAction({
                  email,
                  password,
                  username,
                  profileImageUrl
                });
                history.push("/");
              } catch (e) {
                switch (e.code) {
                  case ErrorCodes.BAD_LOGIN:
                    // Incorrect email or password
                    setEmail("");
                    setPassword("");
                    break;
                  case ErrorCodes.ALREADY_TAKEN:
                    // Username or email already taken
                    break;
                  default:
                    setUsername("");
                    setProfileImageUrl("");
                }
              }
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
            <button
              type="submit"
              className="btn btn-primary btn-block btn-lg mt-3"
            >
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
