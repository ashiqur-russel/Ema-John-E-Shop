import React from "react";
import logo from "../../Logo.svg";
import "./NavBar.css";
const NavBar = () => {
  return (
    <nav className="header">
      <img src={logo} alt="" />

      <div className="list">
        <a href="/shop">Shop</a>
        <a href="/orders">Orders</a>
        <a href="/inventory">Inventory</a>
        <a href="/home">Home</a>
      </div>
    </nav>
  );
};

export default NavBar;
