import React from "react";

const UserForm = ({
  newUser,
  setNewUser,
  handleAddOrEditUser,
  cancelEdit,
  editingUser,
}) => {
  // Helper function to format address when it's an object
  const formatAddress = (address) => {
    if (address && typeof address === "object") {
      const { street, suite, city, zipcode } = address;
      return `${street || ""}, ${suite || ""}, ${city || ""}, ${zipcode || ""}`;
    }
    return address || "";
  };

  // Ensure address is initialized properly
  const handleAddressChange = (field, value) => {
    setNewUser({
      ...newUser,
      address: {
        ...newUser.address,
        [field]: value, // Dynamically set the address field
      },
    });
  };

  return (
    <form
      className="row card mx-auto p-2"
      style={{
        width: "700px",
        background: "rgb(232, 232, 232)",
        margin: "10px",
      }}
    >
      <h1>{editingUser ? "Edit User Details" : "Add User Details"}</h1>
      <div className="col-md-5">
        <label htmlFor="Name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="Name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
      </div>
      <br />
      <div className="col-md-5">
        <label htmlFor="inputEmail4" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="inputEmail4"
          value={newUser.email}
          onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
        />
      </div>{" "}
      <br />
      <div className="col-5">
        <label htmlFor="inputPassword" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="inputPassword"
          value={newUser.password}
          onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
        />
      </div>
      <br />
      <div class="container">
        <div className="col-7  ">
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          {/* Display address properly */}
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            value={newUser.address?.street || ""} // Ensure street is displayed even if address is not initialized
            onChange={(e) => handleAddressChange("street", e.target.value)} // Update street field
          />
        </div>
        <br />
        <div className="row">
          <div className="col-4 ">
            <label htmlFor="inputSuite" className="form-label">
              House No
            </label>
            <input
              type="text"
              className="form-control"
              id="inputSuite"
              value={newUser.address?.suite || ""}
              onChange={(e) => handleAddressChange("suite", e.target.value)} // Update suite field
            />
          </div>
          <br />
          <div className="col-4">
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="inputCity"
              value={newUser.address?.city || ""}
              onChange={(e) => handleAddressChange("city", e.target.value)} // Update city field
            />
          </div>
          <br />
          <div className="col-4">
            <label htmlFor="inputZipcode" className="form-label">
              Zipcode
            </label>
            <input
              type="text"
              className="form-control"
              id="inputZipcode"
              value={newUser.address?.zipcode || ""}
              onChange={(e) => handleAddressChange("zipcode", e.target.value)} // Update zipcode field
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-12">
        <button className="btn btn-primary" onClick={handleAddOrEditUser}>
          {editingUser ? "Update User" : "Add User"}
        </button>
        {editingUser && (
          <button
            type="button"
            onClick={cancelEdit}
            className="ms-2 btn btn-danger"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
