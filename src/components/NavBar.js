import React from "react";

import {HashLink as Link} from "react-router-hash-link";
const NavBar=() =>{
    return (
      
      
      
    
     <nav className="navbar">
      <h1>James Fishleigh</h1>
        <Link to ='#home' className="navbar-link">
         Home
          </Link>
          <Link to ='#about' className="navbar-link">
          About 
          </Link>
          <Link to ='#education' className="navbar-link">
          Education
          </Link>
          <Link to ='#skills' className="navbar-link">
          Skills
          </Link>
          <Link to ='#experience' className="navbar-link">
          Experience
          </Link>
          <Link to ='#contact' className="navbar-link">
          Contact Me
          </Link>
      </nav>
    );
  };
  
  export default NavBar;