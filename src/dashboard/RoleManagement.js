import React, { useState, useEffect } from "react";

import RoleForm from "./Role";
import "font-awesome/css/font-awesome.min.css";
import { api } from "./Server/api";

const RoleManagement = () => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newRole, setNewRole] = useState({
    id: "",
    name: "",
    description: "",
    username: "",
  });
  const [editingRole, setEditingRole] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: "name", // Default sorting by name
    direction: "asc", // Default sorting order is ascending
  });

  // Fetch users and roles when the component is mounted
  useEffect(() => {
    const fetchUsersAndRoles = async () => {
      try {
        const usersResponse = await api.getUsers();
        setUsers(usersResponse.data);

        const rolesResponse = await api.getRoles();
        const updatedRoles = [
          ...rolesResponse.data,
          { id: "user", name: "User" },
          { id: "admin", name: "Admin" },
        ];
        setRoles(updatedRoles);
      } catch (error) {
        console.error("Error fetching users or roles:", error);
      }
    };

    fetchUsersAndRoles();
  }, []);

  // Handle user selection for editing
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setNewRole({
      id: user.id,
      username: user.name,
      name: user.role, // Set the role name here
      description: user.description || "", // Assuming the user object might have a description
    });
    setEditingRole(true); // Set editing mode to true
  };

  // Handle form submission to update the user
  const handleAddOrEditRole = async (e) => {
    e.preventDefault();

    try {
      if (editingRole) {
        // If we're editing an existing role
        await api.updateUser(newRole.id, newRole);
        setUsers(
          users.map((user) =>
            user.id === newRole.id ? { ...user, role: newRole.name } : user
          )
        );
      } else {
        // If we're adding a new role
        await api.createRole(newRole);
        setRoles([...roles, newRole]);
      }

      // Reset after adding or editing
      setEditingRole(false);
      setNewRole({ id: "", username: "", name: "", description: "" });
      setSelectedUser(null);
    } catch (error) {
      console.error("Error saving role:", error);
    }
  };

  // Cancel editing
  const cancelEdit = () => {
    setEditingRole(false);
    setNewRole({ id: "", username: "", name: "", description: "" });
    setSelectedUser(null);
  };

  // Handle delete
  const handleDeleteUser = async (userId) => {
    try {
      await api.deleteUser(userId); // Assuming this API endpoint exists for deleting user
      setUsers(users.filter((user) => user.id !== userId)); // Remove the deleted user from the state
      alert("User deleted successfully!");
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete the user.");
    }
  };

  // Sort users based on the column and order
  const handleSort = (key) => {
    const direction = sortConfig.direction === "asc" ? "desc" : "asc";
    setSortConfig({ key, direction });
    setUsers((prevUsers) => {
      const sortedUsers = [...prevUsers].sort((a, b) => {
        if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
        if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
        return 0;
      });
      return sortedUsers;
    });
  };

  return (
    <div style={{ height: "51rem", margin: "10px" }}>
      <h2>Role Management</h2>

      {/* Conditionally render the table */}
      {!editingRole && (
        <div className="table-responsive">
          <br />
          <table className="table table-bordered table align-middle">
            <thead className="text-center">
              <tr className="fs-13">
                <th scope="col" onClick={() => handleSort("name")}>
                  Name{" "}
                  {sortConfig.key === "name" && (
                    <i
                      className={`fa ${
                        sortConfig.direction === "asc"
                          ? "fa-arrow-up"
                          : "fa-arrow-down"
                      }`}
                    ></i>
                  )}
                </th>
                <th scope="col" onClick={() => handleSort("role")}>
                  Role{" "}
                  {sortConfig.key === "role" && (
                    <i
                      className={`fa ${
                        sortConfig.direction === "asc"
                          ? "fa-arrow-up"
                          : "fa-arrow-down"
                      }`}
                    ></i>
                  )}
                </th>
                <th scope="col">Update Role</th>
                <th scope="col">Edit Role</th>
                <th scope="col">Delete Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="text-center" key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>
                    <select className="form-select btn btn-warning">
                      <option value="">Status</option>
                      <option value="1">Active</option>
                      <option value="2">Inactive</option>
                    </select>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleEditUser(user)}
                    >
                      {" "}
                      <i className="fa fa-edit"> </i>
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDeleteUser(user.id)}
                    >
                      <i className="fa fa-trash"></i>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Render RoleForm only when editing a role */}
      {editingRole && (
        <RoleForm
          newRole={newRole}
          setNewRole={setNewRole}
          handleAddOrEditRole={handleAddOrEditRole}
          cancelEdit={cancelEdit}
          editingRole={editingRole}
        />
      )}
    </div>
  );
};

export default RoleManagement;
