import React from "react";
import { useNavigate } from "react-router-dom";
const LeftAside = ({ setSidebarVisible, isSidebarVisible }) => {
  const navigate = useNavigate();
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
            <i class="fa fa-times"></i>
          </span>
        </div>
      </div>
      {/* topend */}
      <div className="sidebar">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/");
          }}
        >
          <span>
            <i class="fa fa-home"></i>
          </span>
          <h3>Dashboard</h3>
        </a>
        <a href="#">
          {" "}
          <span>
            <i class="fa fa-user" style={{ fontSize: "24px" }}></i>
          </span>
          <h3>User Details</h3>
        </a>{" "}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            navigate("/new-order");
          }}
        >
          <span>
            <i class="fa fa-shopping-bag" style={{ fontSize: "24px" }}></i>
          </span>
          <h3>Orders</h3>
        </a>
        <a href="#">
          {" "}
          <span>
            <i class="fa fa-arrow-left"></i>
          </span>
          <h3>Logout</h3>
        </a>
      </div>
    </aside>
  );
};

export default LeftAside;
