import React from 'react'

function login() {
  return (
<div className="container-login">
  <div className="auth-container">
  <div className="container section-title" data-aos="fade-up">
      <h2>Login</h2>
    </div>
    {/* <ul className="nav nav-tabs mb-4" id="authTabs" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="login-tab"
          data-bs-toggle="tab"
          data-bs-target="#login"
          type="button"
          role="tab"
        >
          Login
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="register-tab"
          data-bs-toggle="tab"
          data-bs-target="#register"
          type="button"
          role="tab"
        >
          Register
        </button>
      </li>
    </ul> */}
    <div className="tab-content" id="authTabsContent">
      {/* Login Tab */}
      <div className="tab-pane fade show active" id="login" role="tabpanel">
        <form>
          <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="loginEmail"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="loginPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="loginPassword"
              required=""
            />
          </div>
          <div className="text-end mb-3">
            <a href="/register" className="text-decoration-none text-dark">
              don't have an account?
              <span className="text-danger">register now!</span>
            </a>
          </div>
          <div className="text-end mb-3">
            <a href="#" className="text-decoration-none text-danger">
              Forgot Password?
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
      </div>
      {/* Register Tab */}
      <div className="tab-pane fade" id="register" role="tabpanel">
        <form>
          <div className="mb-3">
            <label htmlFor="registerUsername" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="registerUsername"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registerEmail" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="registerEmail"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="registerPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="registerPassword"
              required=""
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            login
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default login