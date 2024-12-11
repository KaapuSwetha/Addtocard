import React from "react";
const RecentUpdates = () => {
  return (
    <div className="recent_updates">
      <h2>Recent Update</h2>
      <div className="updates">
        <div className="update">
          <div className="profile-photo">
            <i class="fa fa-user" style={{ fontSize: "24px" }}></i>
          </div>
          <div className="message">
            <p>
              <b>Codegene</b>Received order
            </p>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo">
            <i class="fa fa-user" style={{ fontSize: "24px" }}></i>
          </div>
          <div className="message">
            <p>
              <b>Codegene</b>Received order
            </p>
          </div>
        </div>
        <div className="update">
          <div className="profile-photo">
            <i class="fa fa-user" style={{ fontSize: "24px" }}></i>
          </div>
          <div className="message">
            <p>
              <b>Codegene</b>Received order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentUpdates;
