import React from "react";
import { NavLink } from "react-router-dom";
const Login = () => {
  return (
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card">
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                  alt="login form"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fa fa-cubes fa-2x me-3"></i>
                      <span className="h1 fw-bold mb-0">Login</span>
                    </div>

                    <h5 className="fw-normal mb-3 pb-3">
                      Sign into your account
                    </h5>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form2Example17">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" for="form2Example27">
                        Password
                      </label>
                    </div>

                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="button"
                      >
                        Login
                      </button>
                    </div>

                    <NavLink className="small text-muted" to="#!">
                      Forgot password?
                    </NavLink>
                    <p className="mb-5 pb-lg-2">
                      Don't have an account?{" "}
                      <NavLink to="/register">Register here</NavLink>
                    </p>
                    <NavLink to="#!" className="small text-muted">
                      Terms of use.
                    </NavLink>
                    <NavLink to="#!" className="small text-muted">
                      Privacy policy
                    </NavLink>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
