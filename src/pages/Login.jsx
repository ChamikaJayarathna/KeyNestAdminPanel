import React from "react";

const Login = () => {
  return (
    <div className="login-page bg-body-secondary">
      <div className="login-box">
        <div className="login-logo">KEYNEXT ADMIN</div>
        <div className="card">
          <div className="card-body login-card-body">
            <form>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-text">
                  <span className="bi bi-envelope" />
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-text">
                  <span className="bi bi-lock-fill" />
                </div>
              </div>

              <div class="col-4">
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary">
                    Sign In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
