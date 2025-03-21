import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4" style={{ color: '#d84e55', borderColor:'#d84e55' }}>Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" placeholder="Create a password" />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm Password
            </label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter your password" />
          </div>

          <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#d84e55', borderColor:'#d84e55' }}>
            Sign Up
          </button>
        </form>
        <p className="mt-3 text-center">
          Already have an account <Link to="/ " className="text-danger text-decoration-none">Sign In</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
