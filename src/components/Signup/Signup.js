import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up </h2>
      <form>
        <div className="form-control1">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control1">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <div className="form-control1">
          <label htmlFor="confirm">Confirm Password</label>
          <input type="password" name="confirm" required />
        </div>
        <input type="submit" className="btn-submit" value="Signup" />
      </form>
      <p>
        Already have an Account?<Link to="/signin">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
