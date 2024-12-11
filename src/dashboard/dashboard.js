import React, { useState } from "react";
import UserManagement from "./UserMangement";
import RoleManagement from "./RoleManagement";
import UserDash from "./User";

const DashBoard = () => {
  const [activeComponent, setActiveComponent] = useState("UserManagement");

  const handleUserDetailsClick = () => {
    setActiveComponent("UserManagement");
  };
  const handleUserDashClick = () => {
    setActiveComponent("UserBoard");
  };
  const handleRolesClick = () => {
    setActiveComponent("RoleManagement");
  };

  const handleAddNewUserClick = () => {
    setActiveComponent("AddNewUser");
  };
  return (
    <div
      style={{
        background: "radial-gradient(ellipse, #003366, #001E4E, #000220)",
      }}
    >
      <div class="container text-center">
        <div class="row">
          <div className="col-2 sidebar">
            <div
              class="card mb-3 leftside"
              style={{
                height: "100vh",
                marginLeft: "-60px",
                backgroundColor: "#000437",
              }}
            >
              <div class="card-header ">
                <h1 className="text-center" style={{ color: "white" }}>
                  Dashboard
                </h1>{" "}
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush ">
                  <li
                    className="list-group-item"
                    onClick={handleUserDashClick}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        activeComponent === "UserBoard" ? "white" : "#000437",
                      color: activeComponent === "UserBoard" ? "#000" : "white", // Optional for text contrast
                    }}
                  >
                    User DashBoard
                  </li>
                  <br />
                  <li
                    className="list-group-item "
                    onClick={handleUserDetailsClick}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        activeComponent === "UserManagement"
                          ? "white"
                          : "#000437",
                      color:
                        activeComponent === "UserManagement" ? "#000" : "white",
                    }}
                  >
                    User Details
                  </li>
                  <br />
                  <li
                    className="list-group-item "
                    onClick={handleRolesClick}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        activeComponent === "RoleManagement"
                          ? "white"
                          : "#000437",
                      color:
                        activeComponent === "RoleManagement" ? "#000" : "white",
                    }}
                  >
                    Roles
                  </li>
                  <br />
                </ul>
              </div>
            </div>
          </div>
          <div class="col-10  ">
            {activeComponent === "UserBoard" && <UserDash />}
            {activeComponent === "UserManagement" && <UserManagement />}
            {activeComponent === "RoleManagement" && <RoleManagement />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
