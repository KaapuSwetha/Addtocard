import React, { useState } from "react";
import { useCount } from "../context/contextprovider";

const Header = ({ setSidebarVisible, setIcon }) => {
  const { addtocart } = useCount();
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIcon(true);

    setIsSearchVisible(!isSearchVisible);
  };

  return (
    <div className="top">
      <div
        className={`menu_bar ${isSearchVisible ? "block" : "hidden"}`}
        style={{
          display: isSearchVisible ? "none" : "",
        }}
        id="menu_bar"
        onClick={() => setSidebarVisible(true)}
      >
        <i className="fa fa-bars" style={{ fontSize: "20px" }}></i>
      </div>
      <div className="profile">
        <div
          className={`info ${isSearchVisible ? "none" : "hidden"}`}
          style={{
            display: isSearchVisible ? "none" : "block",
          }}
        >
          <p>
            <b>Codegene</b>
          </p>
          <small className="text-muted"></small>
        </div>
        <div
          className={`profile-photo ${isSearchVisible ? "none" : "hidden"}`}
          style={{
            display: isSearchVisible ? "none" : "block",
          }}
        >
          <div className="hidden-search">
            <i
              className="fa fa-search search-icon"
              style={{
                fontSize: "20px",
                marginLeft: "35px",
                color: "black",
                marginTop: "2px",
                cursor: "pointer", // Optional: change cursor to pointer
              }}
              onClick={toggleSearch} // Toggle visibility when clicked
            ></i>
          </div>
          <i className="fa fa-user user-icon" style={{ fontSize: "24px" }}></i>
          <i
            className="fa fa-cart-plus cart-icon"
            style={{ fontSize: "24px", marginLeft: "10px" }}
          ></i>
          <span className="top-30 start-80 translate-middle badge rounded-pill text-bg-secondary">
            {addtocart}
            <span className="visually-hidden"></span>
          </span>
        </div>
      </div>

      {/* Search container, toggle visibility based on state */}
      {/* <div
        className={`search-container ${isSearchVisible ? "block" : "hidden"}`}
        style={{
          display: isSearchVisible ? "" : "none",
        }}
      >
        <i className="fa fa-search search-icon"></i>
        <input type="text" className="search-bar" placeholder="Search..." />
      </div> */}
    </div>
  );
};

export default Header;
