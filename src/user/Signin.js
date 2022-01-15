import React, {useState} from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { authenticate, isAuthenticated, signin } from "../auth/helper";

const Signin = () => {

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        error: "",
        success: false,
        loading: false,
        didRedirect: false
    });

    const { name, email, password, error, success, loading, didRedirect } = values;
  
    const handleChange = (name) =>
    (event) => {
        setValues({ ...values, error: false, [name]: event.target.value });
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
    
      const signInForm = () => {
        return (
          <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
              <form>
                
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
                <button className="btn btn-success btn-block" onClick={ () => {} }>
                  Submit
                </button>
              </form>
            </div>
          </div>
        );
      };


  return (
    <Base title="Signin Page" description="Nanz-Store">
      {signInForm()}
      <p className="text-center">
        {JSON.stringify(values)}
      </p>
    </Base>
  );
};

export default Signin;
