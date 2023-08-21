
import React, { useState } from 'react';
import {HashLink as Link} from "react-router-hash-link";
const Education=() =>{

    return (
      
      
      
    
      <div className="App" id="education">
       
       <div className="About">
          <h1>Education</h1>
          <h3>My Final Year Univeristy Modules </h3>
          <div className="About-Content">
            <div className="Education-Box">
            <h1>Web Application Integration</h1>
            <p>This Module Required me to build a web application that displayed a library of published works to a user. To build the interface of the web application react was used. Php was used to build an series of APIs to interact with the database to retrieve,update and delete from a series of tables. The database was created with MySql</p>
       
            </div>
            <div className="Education-Box">
            <h1>Machine Learning and Computer Vision</h1>
            <p>This Module had two parts to its completion, The first was a research task into specific parts of machine learning. The second task was a broken down into two parts: One part was to implement watermarks into images using DCT Domain watermarking. The second part required using Liner Perceptron, ANN, Decision Tree and Naive Bayes classifiers to detect water marks and then compare the dection rates of each.</p>
      
            </div>
            <div className="Education-Box">
            <h1>Team Project</h1>
            <p>The team project required building a product for a client. Our client was an architecture lecturer at the Univeristy. The first task was to get a list of requirments from the client from which we found that he wanted a website where users could share their publications with one another. Once the list of requirements was gathered we had to create some UserStories and UseCases. We then Developed the web application, where we also made use of GitHub for version control. The final product was well recieved by the client. </p>
         
            </div>
            <div className="Education-Box">
            <h1>Cloud Computing and Web API Programming</h1>
            <p>The purpose of this module was to develop a web application that made use of Google Apis and Twitter APIs. The web Application also had to be hosted through our Azure with the server configurations we chose also being assessed. The learning side of this module had me follow throught the Microsoft Azure Fundamentals: AZ-900 so my fundamentals with Azure would be complete.  </p>
         
            </div>
            </div>  
          <Link to ='#skills'>
        Skills
        </Link>
        </div>
      </div>

    );
  };
  
  export default Education;