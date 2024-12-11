import React from "react";

const RoleForm = ({
  newRole,
  setNewRole,
  handleAddOrEditRole,
  cancelEdit,
  editingRole,
}) => {
  return (
    <form
      className="row card mx-auto p-2"
      style={{
        width: "700px",
        background: "rgb(232, 232, 232)",
        margin: "10px",
      }}
      onSubmit={handleAddOrEditRole}
    >
      <h2>{editingRole ? "Edit Role" : "Add Role"}</h2>

      {/* Display Username if editing */}
      {editingRole && (
        <div className="col-md-5">
          <label className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            value={newRole.username} // Displaying the username here
            disabled
          />
        </div>
      )}

      {/* Role Name field */}
      <div className="col-md-5 mt-3">
        <label htmlFor="roleName" className="form-label">
          Role Name
        </label>
        <input
          type="text"
          className="form-control"
          id="roleName"
          value={newRole.name} // Bind to `newRole.name`
          onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
          required
        />
      </div>

      {/* Role Description field */}
      <div className="col-7 mt-3">
        <label htmlFor="roleDescription" className="form-label">
          Role Description
        </label>
        <textarea
          className="form-control"
          id="roleDescription"
          rows="2"
          value={newRole.description}
          onChange={(e) =>
            setNewRole({ ...newRole, description: e.target.value })
          }
        />
      </div>

      {/* Submit and Cancel buttons */}
      <div className="col-12 mt-3">
        <button type="submit" className="btn btn-primary">
          {editingRole ? "Update Role" : "Add Role"}
        </button>
        <button
          type="button"
          className="btn btn-danger ms-2"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default RoleForm;
