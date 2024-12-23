import React, { useState } from "react";
import { useCount } from "../context/contextprovider";
import Login from "../login";

const Header = ({ setSidebarVisible, setIcon }) => {
  const { addtocart } = useCount();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false); // State for modal visibility

  const toggleSearch = () => {
    setIcon(true);
    setIsSearchVisible(!isSearchVisible);
  };

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

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
                marginLeft: "20px",
                color: "black",
                marginTop: "2px",
                cursor: "pointer",
              }}
              onClick={toggleSearch}
            ></i>
          </div>
          <i
            className="fa fa-user user-icon"
            style={{ fontSize: "24px" }}
            onClick={openModal} // Open modal on click
          ></i>
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
      {isModalVisible && <Login closeModal={closeModal} />}
    </div>
  );
};

export default Header;
