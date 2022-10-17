import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Signup.css";
const Signup = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const { createUser } = useContext(AuthContext);
  console.log(createUser);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    console.log(email, password, confirm);
    if (password.length < 6) {
      setErrorMessage("Password should be 6 characters or more.");
      return;
    }
    if (password !== confirm) {
      setErrorMessage("Your password didn't match!");
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Sign Up </h2>
      <form onSubmit={handleSubmit}>
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
        <p className="text-error">{errorMessage}</p>
        <input type="submit" className="btn-submit" value="Signup" />
      </form>
      <p>
        Already have an Account?<Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
