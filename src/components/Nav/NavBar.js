import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />

      <div className="list">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
};

export default NavBar;
