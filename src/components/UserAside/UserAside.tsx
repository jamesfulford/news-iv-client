import React from "react";
import { ExistingUser } from "../../models/user";
import DefaultProfileImage from "../../images/default-profile-image.jpg";

export default ({ currentUser }: { currentUser: ExistingUser }) => (
  <aside className="col-sm-2">
    <div className="panel panel-default">
      <div className="panel-body">
        <img
          className="img-thumbnail"
          width="400"
          height="400"
          src={DefaultProfileImage}
          alt={currentUser.username}
        />
      </div>
    </div>
  </aside>
);
