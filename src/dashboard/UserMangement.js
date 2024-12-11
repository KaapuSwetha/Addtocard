import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "font-awesome/css/font-awesome.css";
import UserForm from "./UserFile";
import { api } from "./Server/api";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "",
    address: { street: "", suite: "", city: "", zipcode: "" },
    password: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc"); // Track sorting order

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await api.getUsers();
      setUsers(response.data);
    } catch (error) {
      toast.error("Failed to load users.");
    }
  };

  const handleAddOrEditUser = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        await api.updateUser(editingUser.id, newUser);
        toast.success("User updated successfully.");
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.id === editingUser.id ? { ...newUser, id: user.id } : user
          )
        );
        resetForm();
      } else {
        const response = await api.addUser(newUser);
        toast.success("User added successfully.");
        setUsers((prevUsers) => [...prevUsers, response.data]);
        resetForm();
      }
    } catch (error) {
      toast.error(editingUser ? "Error updating user." : "Error adding user.");
    }
  };

  const resetForm = () => {
    setNewUser({
      name: "",
      email: "",
      role: "",
      address: { street: "", suite: "", city: "", zipcode: "" },
      password: "",
    });
    setEditingUser(null);
    setIsFormVisible(false);
  };

  const handleEditUser = (user) => {
    setNewUser({
      name: user.name,
      email: user.email,
      role: user.role,
      address: user.address,
      password: user.password,
    });
    setEditingUser(user);
    setIsFormVisible(true);
  };

  const handleDeleteUser = async (id) => {
    try {
      await api.deleteUser(id);
      toast.success("User deleted.");
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
    } catch (error) {
      toast.error("Error deleting user.");
    }
  };

  const formatAddress = (address) => {
    const { street, suite, city, zipcode } = address || {};
    return `${street || ""}, ${suite || ""}, ${city || ""}, ${zipcode || ""}`;
  };

  const handleAddNewUser = () => {
    resetForm();
    setIsFormVisible(true);
  };

  // Function to sort users by name
  const sortUsersByName = () => {
    const sortedUsers = [...users].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
    setUsers(sortedUsers);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc"); // Toggle sort order
  };

  return (
    <div style={{ height: "48rem", margin: "10px" }}>
      <h2>User Details</h2>
      <button
        style={{ marginLeft: "800px" }}
        className="btn btn-primary "
        onClick={handleAddNewUser}
      >
        Add New User
      </button>

      {isFormVisible ? (
        <UserForm
          newUser={newUser}
          setNewUser={setNewUser}
          handleAddOrEditUser={handleAddOrEditUser}
          cancelEdit={resetForm}
          editingUser={editingUser}
        />
      ) : (
        <div className="table-responsive">
          <br />
          <div
            style={{
              maxHeight: "620px",
              overflowY: users.length > 10 ? "scroll" : "auto",
              border: "1px solid #ccc",
            }}
          >
            <table className="table table-bordered table align-middle">
              <thead className="text-center">
                <tr className="fs-13">
                  <th scope="col">
                    <button
                      style={{ background: "none", border: "none" }}
                      onClick={sortUsersByName}
                    >
                      Name{" "}
                      <i
                        className={`fa ${
                          sortOrder === "asc" ? "fa-arrow-up" : "fa-arrow-down"
                        }`}
                      ></i>
                    </button>
                  </th>
                  <th scope="col">Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Edit</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {users.length > 0 ? (
                  users.map((user) => (
                    <tr className="text-center" key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>

                      <td>{formatAddress(user.address)}</td>

                      <td>
                        <button
                          className="btn btn-primary"
                          onClick={() => handleEditUser(user)}
                        >
                          <i className="fa fa-edit"></i> Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <i className="fa fa-trash"></i> Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">No users available</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
