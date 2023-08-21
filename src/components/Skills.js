
import React, { useState } from 'react';


const Skills=() =>{
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleBoxClick = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };
  const boxes = [
    {skill:"Java",
    img:""
    },
    {skill:"JavaScript",
    img:""
    },
    {skill:"HTML",
    img:""
    },
    {skill:"CSS",
    img:""
    },
    {skill:"React",
    img:""
    },
    {skill:"SQL",
    img:""
    },
    {skill:"PHP",
    img:""
    },
    {skill:"Azure",
    img:""
    },
    {skill:"Node.js",
    img:""
    },

  ];
    return (
      
      
      
    
      <section className="App" id="skills">
      
        <header className="App-header">
          <h1>Skills</h1>
        <div className="skills-grid">
        {boxes.map((box, index) => (
      <div className="skills-box" key={index}>{box.skill} {box.img}
      
       </div>
    ))}
        </div>
    
     
        </header>

      </section>

    );
  };
  
  export default Skills;