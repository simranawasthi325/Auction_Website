import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function SignIn() {

  const navigate = useNavigate(); // Initialize the navigate function

  const handleSignUp = (e) => {
    e.preventDefault(); // Prevent page refresh
    // Add your signup logic here (e.g., form validation, API call)
    navigate("/home"); // Navigate to Home page after successful sign-up
  };
  return (
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
        <h2 className="text-center mb-4" style={{ color: '#d84e55'}}>Sign In</h2>
        <form  onSubmit={handleSignUp}>
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
            <input type="password" className="form-control" id="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="btn  w-100" style={{ backgroundColor: '#d84e55', borderColor:'#d84e55' }}>
            Sign In
          </button>
        </form>
        <p className="mt-3 text-center">
          Don't have an account? <Link to="/signup" className="text-danger text-decoration-none">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
