import React from 'react'
import logo from '../assets/google-developers-seeklogo.com.svg';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className='navbar'>
      <div className="navbar-items">
        <div className="logo">
          <img src={logo} alt="the logo" />
          <p>
            <span className='red'>G</span>
            <span className='blue'>D</span>
            <span className='green'>S</span>
            <span className='yellow'>C </span>
            SBA
          </p>
        </div>
        <div className="links">
          <NavLink className='red-link'>Home</NavLink>
          <NavLink className="blue-link">About</NavLink>
          <NavLink className="green-link">Events</NavLink>
          <NavLink className="yellow-link">Contact</NavLink>
          <button>JOIN US</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
