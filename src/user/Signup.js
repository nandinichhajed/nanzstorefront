import React, {useState} from "react";
import Base from "../core/Base";
import axios from "axios";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper/index";


const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });
  
  const { name, email, password, error, success } = values;
  
  const handleChange = (name) =>
  (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
  
  try {
    const response = await axios.post("/api/user/", {
      name, email, password
    })
    const data = response.data;
    setValues({
        ...values,
        name: "",
        email: "",
        password: "",
        error: "",
        success: true,
      });
  }
  catch (e) {
    setValues({
        ...values,
        error: true,
        success: false,
      });
  	}
  };

  const successMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: success ? "" : "none" }}
          >
            New account created successfully. Please <Link
              to="/signin"
            >
              login now.
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <div
            className="alert alert-danger"
            style={{ display: error ? "" : "none" }}
          >
            Check all fields again
          </div>
        </div>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-dark">Name</label>
              <input
                className="form-control"
                value={name}
                onChange={handleChange("name")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Email</label>
              <input
                className="form-control"
                value={email}
                onChange={handleChange("email")}
                type="text"
              />
            </div>
            <div className="form-group">
              <label className="text-dark">password</label>
              <input
                className="form-control"
                value={password}
                onChange={handleChange("password")}
                type="password"
              />
            </div>
            <button className="btn btn-success btn-block" onClick={onSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  return (
    <Base title="Sign Up Page" description="A signup for LCO user">
      {successMessage()}
      {errorMessage()}
      {signUpForm()}
      <p className="text-black text-center">
        {JSON.stringify(values)}
      </p>
    </Base>
  );
};

export default Signup;