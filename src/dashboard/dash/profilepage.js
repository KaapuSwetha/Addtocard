import React from "react";
import { useCount } from "../context/contextprovider";

const ProfilePage = () => {
  return (
    <div className="profile-container">
      <div className="card profilecard">
        <div className="profilegender">
          <div className="gender">
            <i className="fa fa-female"></i>
            <h2>or</h2>
            <i className="fa fa-male"></i>
          </div>
        </div>
        <div className="form-container">
          <label htmlFor="validationServer01" className="form-label">
            First name
          </label>
          <input type="text" className="form-control" required />
          <br />
          <label htmlFor="validationServer02" className="form-label">
            Last name
          </label>
          <input type="text" className="form-control" required />
        </div>
        <div className="button-container">
          <button type="button" className="btn btn-outline-info btn-sm">
            SUBMIT
          </button>
        </div>
        <div className="form-container">
          <label htmlFor="validationServer01" className="form-label">
            Mobile Number
          </label>
          <input type="tel" className="form-control" required />
          <br />
          <label htmlFor="validationServer02" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" required />
        </div>
        <div className="account">
          <h6>Deactivate Account</h6>
          <h6>Delete Account</h6>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
