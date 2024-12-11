import React, { useState } from "react";
const Header = ({ setSidebarVisible, count }) => {
  return (
    <div className="top">
      <div
        className="menu_bar"
        id="menu_bar"
        onClick={() => setSidebarVisible(true)}
      >
        <i class="fa fa-bars" style={{ fontSize: "20px" }}></i>
      </div>
      {/* <div className="theme-toggler">
      <span className="active">Dark</span>
      <span>light</span>
    </div> */}
      <div className="profile">
        <div className="info">
          <p>
            <b>Codegene</b>{" "}
          </p>
          <p>Admin</p>
          <small className="text-muted"></small>
        </div>
        <div className="profile-photo">
          <i class="fa fa-user" style={{ fontSize: "24px" }}></i>
          <i
            className="fa fa-cart-plus"
            style={{ fontSize: "24px", marginLeft: "10px" }}
          ></i>
          <span class=" top-30 start-80 translate-middle badge rounded-pill text-bg-secondary">
            {count}
            <span class="visually-hidden"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
