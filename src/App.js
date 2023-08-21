
import './App.css';

import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import {BrowserRouter} from 'react-router-dom';

import HomePage from './components/HomePage';


function App() {
  return (
    
    
    
    <BrowserRouter>
    
    <div className="App">
    <NavBar/>
    <HomePage/>
    <About/>
    <Education/>
    <Skills/>
    <Experience/>
    <Contact/>
    </div>

    </BrowserRouter>
  );
}

export default App;
