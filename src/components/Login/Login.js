import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((res) => {
        const user = res.user;
        console.log(user);
        if (email === user?.email) {
          navigate("/");
        } else {
          console.log("Not found");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="form-container">
      <h2 className="form-title">Login </h2>
      <form onSubmit={handleSubmit}>
        <div className="form-control1">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />
        </div>
        <div className="form-control1">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" required />
        </div>
        <input type="submit" className="btn-submit" value="Login" />
      </form>
      <p>
        New to ema john <Link to="/signup">Create a New Account</Link>
      </p>
    </div>
  );
};

export default Login;
