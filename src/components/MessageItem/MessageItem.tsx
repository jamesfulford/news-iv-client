import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import defaultProfileImage from "../../images/default-profile-image.jpg";
import './MessageItem.css';

export default ({
  text,
  date,
  username,
  profileImageUrl
}: {
  text: string;
  date: string;
  username: string;
  profileImageUrl?: string;
}) => (
  <li className="list-group-item">
    <img
      src={profileImageUrl || defaultProfileImage}
      alt={username}
      height="100"
      width="100"
      className="timeline-image"
    />
    <div className="message-area">
      <Link to="/">@{username} &nbsp;</Link>
      <span className="text-muted">
        <Moment className="text-muted" format="Do MMM YYYY">
          {date}
        </Moment>
      </span>
      <p>{text}</p>
    </div>
  </li>
);
