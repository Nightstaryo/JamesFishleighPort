
import React, {  useState } from 'react';
import {HashLink as Link} from "react-router-hash-link";
const About=() =>{
  const [activeBox, setActiveBox] = useState(null);
  const handleBoxHover = (boxIndex) => {
    setActiveBox(boxIndex);
    
  };
  const handleMouseLeave = () => {
    setActiveBox(null);
  };

    return (
      <div className="App" id="about">
       
        <div className="About">
          <h1>About</h1>
          <div className="circle-box" ></div>
          <div className="About-Content">
            <div  className={`About-Box ${activeBox === 0 ? 'active' : 'shrink'}`}
        onMouseEnter={() => handleBoxHover(0)} 
        onMouseLeave={handleMouseLeave}>
            <h1>Hobbies</h1>
            <p>Since a young age I’ve been very into sports (both watching and taking part). From age 7-15 I trained in Judo, where I participated in competitions throughout the country and won numerous medals. In addition to my Judo achievements, I’ve been part of various football teams - both in my childhood and adult life and enjoy playing football with my friends. Whilst in Sixth Form and early years of University I was a member of the school’s and a local rugby team, where we would train weekly and compete with other teams in the region. </p>
       
            </div>
            <div  className={`About-Box ${activeBox === 1 ? 'active' : 'shrink'}`}
        onMouseEnter={() => handleBoxHover(1)}
        onMouseLeave={handleMouseLeave}>
            <h1>Education</h1>
            <h4>Gcses:</h4>
            <p>I Achieved 13 Gcses ranging from A-C Grade</p>
            <h4>A-levels:</h4>
            <p>I completed 3 A-Levels in Maths, Computer Science and Geography</p>
            <h4>Univeristy:</h4>
            <p>I Achieved a First Class Degree in Computer Science from Northumbria Univeristy</p>
            </div>
       
            </div>  
          <Link to ='#education'>
        Education
        </Link>
        </div>
      </div>

    );
  };
  
  export default About;