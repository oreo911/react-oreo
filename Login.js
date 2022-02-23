import React, { useState } from "react";

const Login = (props) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleLogin = () => {
    props.history.push('/');
  }

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div class="card border-0 shadow rounded-3 my-5">
            <div class="card-body p-4 p-sm-5">
              <h5 class="card-title text-center mb-5 fw-light fs-5 fw-bold">
                Log In
              </h5>
              <form>
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  <label for="floatingInput">Username</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="password"
                    class="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  <label for="floatingPassword">Password</label>
                </div>
                {error && <p className="error">{error}</p>}
                <div class="form-check mb-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="rememberPasswordCheck"
                  />
                  <label class="form-check-label" for="rememberPasswordCheck">
                    Remember Me
                  </label>
                </div>
                <div class="d-grid">
                  <button
                    class="btn btn-primary btn-login text-uppercase fw-bold"
                    type="submit"
                    value={loading ? "Loading..." : "Login"}
                    disabled={loading}
                    onClick={handleLogin}
                  >
                    Log in
                  </button>
                </div>
                <hr class="my-4" />
                <div class="d-grid">
                  <div className="text-center">Dont have account ?</div>
                  <a class="text-center fw-bold" href="register">
                    Register
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
