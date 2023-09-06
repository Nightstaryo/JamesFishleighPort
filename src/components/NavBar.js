import React, { useState } from "react";

import {HashLink as Link} from "react-router-hash-link";
const NavBar=() =>{
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };
    return (
      
      
      
    
      <nav className={`navbar ${menuActive ? "active" : ""}`}>
      <h1>James Fishleigh</h1>
      <button className={`menu-button ${menuActive ? "active" : ""}`} onClick={toggleMenu}>
        Menu
      </button>
      <div className={`dropdown-container ${menuActive ? "active" : "navbar"}`}>
        <Link to="#home" className="navbar-link">
          Home
        </Link>
        <Link to="#about" className="navbar-link">
          About
        </Link>
        <Link to="#education" className="navbar-link">
          Education
        </Link>
        <Link to="#skills" className="navbar-link">
          Skills
        </Link>
        <Link to="#experience" className="navbar-link">
          Experience
        </Link>
        <Link to="#contact" className="navbar-link">
          Contact Me
        </Link>
      </div>
    </nav>
    );
  };
  
  export default NavBar;