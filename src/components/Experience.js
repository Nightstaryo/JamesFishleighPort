import React from "react";
import DissertationIMG from '../images/DissertationIMG.png';
const Experience=() =>{
    return (
      
      
      
    
      <div className="App" id="experience">
       
          <h1>Experience</h1>
          <div className="About">
            <div className="Project-Box">
          
          <h1>Novella</h1>
       
          <div className="prod-dsc">Novela is a web application for uploading and reading novels. The web application allows user to browse a library of free novels created by other users. All users who sign up can upload and edit their own novels. I am developing this project to showcase my experience with the skills I have previously listed. </div>
          <div className="prod-buttons">
          <div className="prod-button">LiveSite</div>
          <div className="prod-button">Source Code</div>
          </div>
          </div>
          <div className="Project-Box">
          
          <h1>Dissertaion Project</h1>
          <div className="prod-img"> <img
        src={DissertationIMG}
        alt="Dissertation site in action"
        style={{
          maxWidth: '100%'// Set the maximum width
         
        }}
      /></div>
          <div className="prod-dsc">This it the project i built for my dissertaion. It is a web application which allows users to schedule their devices using a greedy algorithm to take advantage of tarrif price changes. </div>
          <div className="prod-buttons">
          <div className="prod-button"> <a href="http://unn-w19012185.newnumyspace.co.uk/project/app/" target="_blank" rel="noopener noreferrer">
          LiveSite
      </a></div>
          <div className="prod-button "><a href="https://github.com/Nightstaryo/Disertation.git" target="_blank" rel="noopener noreferrer">Source Code</a></div>
          </div>
          </div>
          </div>
      
     
   

      </div>

    );
  };
  
  export default Experience;