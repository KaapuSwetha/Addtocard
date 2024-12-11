import React from "react";

const TopBar = ({ setSidebarVisible }) => {
  return (
    <div className="top">
      <div
        className="menu_bar"
        id="menu_bar"
        onClick={() => setSidebarVisible(true)}
      >
        <i className="fa fa-bars" style={{ fontSize: "20px" }}></i>
      </div>
      <div className="profile">
        <div className="info">
          <p>
            <b>Codegene</b>
          </p>
          <p>Admin</p>
        </div>
        <div className="profile-photo">
          <i className="fa fa-user" style={{ fontSize: "24px" }}></i>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
