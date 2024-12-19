import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const LeftAside = ({ setSidebarVisible, isSidebarVisible }) => {
  const navigate = useNavigate();
  const location = useLocation(); // To get the current pathname

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <aside style={isSidebarVisible ? { display: "block" } : undefined}>
      <div className="top">
        <div className="logo">
          <h2>
            C<span className="danger">odegene</span>
          </h2>
        </div>
        <div
          className="close"
          id="close_btn"
          onClick={() => setSidebarVisible(false)}
        >
          <span>
            <i className="fa fa-times"></i>
          </span>
        </div>
      </div>
      {/* topend */}
      <div className="sidebar">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/"); // Navigate to Dashboard
          }}
          className={location.pathname === "/" ? "active" : ""}
        >
          <span>
            <i className="fa fa-home"></i>
          </span>
          <h3>Dashboard</h3>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/profile"); // Navigate to Profile
          }}
          className={location.pathname === "/profile" ? "active" : ""}
        >
          <span>
            <i className="fa fa-user"></i>
          </span>
          <h3>Profile</h3>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/new-order"); // Navigate to New Order
          }}
          className={location.pathname === "/new-order" ? "active" : ""}
        >
          <span>
            <i className="fa fa-th-large"></i>
          </span>
          <h3>Categories</h3>
        </a>

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavigation("/category"); // Navigate to Cart
          }}
          className={location.pathname === "/category" ? "active" : ""}
        >
          <span>
            <i className="fa fa-shopping-bag"></i>
          </span>
          <h3>Cart</h3>
        </a>

        <a href="#">
          <span>
            <i className="fa fa-arrow-left"></i>
          </span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
};

export default LeftAside;
