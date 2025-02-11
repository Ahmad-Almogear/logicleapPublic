import React from 'react'

function login() {
  return (
<div className="container-login">
  <div className="auth-container">
  <div className="container section-title" data-aos="fade-up">
      <h2>Register</h2>
    </div>
    <div className="tab-content" id="authTabsContent">
      {/* Login Tab */}
      <div className="tab-pane fade show active" id="login" role="tabpanel">
        <form>
        <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              required=""
            />
          </div>
        <div className="mb-3">
            <label htmlFor="loginEmail" className="form-label">
              Phone Namber
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              required=""
            />
          </div>
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
            <a href="/login" className="text-decoration-none text-dark">
              have an account?
              <span className="text-danger">login now!</span>
            </a>
          </div>
          <button type="submit" className="btn btn-primary w-100">
          Register
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
            Register
          </button>
        </form>
      </div>
    </div>
  </div>
</div>

  )
}

export default login