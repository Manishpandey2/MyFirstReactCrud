import React from 'react'
import './Navbar.css'

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
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  
    </>
  )
}

export default Navbar