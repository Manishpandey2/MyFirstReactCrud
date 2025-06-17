import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Brand</div>
        <div className="menu-toggle" id="menu-toggle">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="navbar-menu">
          <li>
            <Link to={"/"}>
              <a href="#home">Home</a>
            </Link>
          </li>
          <li>
            <Link to={"/add-product"}>
              <a href="#about">Add Product</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
