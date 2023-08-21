import React from "react";
import '../App.css';
import {HashLink as Link} from "react-router-hash-link";
const HomePage=() =>{
    return (
        <div id="home">
    <div className="App-intro">
        <p >Hello my name is</p>
        <h1>James Fishleigh</h1>
        <p>A computer science graduate with a passion for full stack engineering and cloud engineering</p>
        <Link to ='#contact'className= "home-box">
      Contact Me
        </Link>
    </div>
      <div className="App-links">
 
        <Link to ='#about'className= "home-box">
        About
        </Link>
        <Link to ='#education'className= "home-box">
        Education
        </Link>
        <Link to ='#skills'className= "home-box">
        Skills
        </Link>
        <Link to ='#experience'className= "home-box">
        Experience
        </Link>
      </div>
      </div>

);
};

export default HomePage;