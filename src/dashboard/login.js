import React, { useState } from "react";

const Login = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [open, setOpen] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (open) {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      setSignUpData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateSignUp = () => {
    const errors = {};
    if (!signUpData.firstName) errors.firstName = "First Name is required.";
    if (!signUpData.lastName) errors.lastName = "Last Name is required.";
    if (!signUpData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(signUpData.email)) {
      errors.email = "Email is invalid.";
    }
    if (!signUpData.password || signUpData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }
    if (!signUpData.mobile) errors.mobile = "Mobile number is required.";
    if (!signUpData.address) errors.address = "Address is required.";
    if (!signUpData.city) errors.city = "City is required.";
    if (!signUpData.state) errors.state = "State is required.";
    if (!signUpData.zip) errors.zip = "ZIP code is required.";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (open) {
      console.log("Sign In Data:", formData);
      // Perform sign-in logic here
    } else {
      const errors = validateSignUp();
      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
      } else {
        console.log("Sign Up Data:", signUpData);
        // Perform sign-up logic here
        setFormErrors({});
      }
    }
  };

  return (
    <div>
      {open ? (
        <div
          className="modal"
          tabIndex="-1"
          style={{
            display: "block",
            top: "25%",
          }}
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{ background: "var(--clr-dark-variant)" }}
            >
              <div className="modal-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "10px",
                  }}
                >
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <p
                    style={{ color: " #007bff", textAlign: "center" }}
                    onClick={() => setOpen(false)}
                  >
                    Don't have an account?
                  </p>
                  <button type="submit" className="btn btn-primary">
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="modal"
          tabIndex="-1"
          style={{
            display: "block",
          }}
        >
          <div className="modal-dialog">
            <div
              className="modal-content"
              style={{ background: "var(--clr-dark-variant)" }}
            >
              <div className="modal-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    padding: "10px",
                  }}
                >
                  <button
                    type="button"
                    className="btn-close"
                    onClick={closeModal}
                    aria-label="Close"
                  ></button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">
                      First Name
                    </label>
                    <input
                      id="firstName"
                      type="text"
                      className="form-control"
                      name="firstName"
                      value={signUpData.firstName}
                      onChange={handleChange}
                    />
                    {formErrors.firstName && (
                      <small className="text-danger">
                        {formErrors.firstName}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      className="form-control"
                      name="lastName"
                      value={signUpData.lastName}
                      onChange={handleChange}
                    />
                    {formErrors.lastName && (
                      <small className="text-danger">
                        {formErrors.lastName}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={signUpData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && (
                      <small className="text-danger">{formErrors.email}</small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={signUpData.password}
                      onChange={handleChange}
                    />
                    {formErrors.password && (
                      <small className="text-danger">
                        {formErrors.password}
                      </small>
                    )}
                  </div>
                  <p
                    style={{ color: "var(--clr-primary)", textAlign: "center" }}
                    onClick={() => setOpen(true)}
                  >
                    Already have an account?
                  </p>
                  <button type="submit" className="btn btn-primary">
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
