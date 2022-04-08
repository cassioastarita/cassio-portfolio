import '../src/App.css'
import './styles/Navbar.css';
import './styles/Home.css';
import './styles/About.css';
import './styles/Projects.css';
import './styles/Skills.css';
import './styles/Experience.css';
import './styles/Contact.css';


import { Routes, Route, Link } from 'react-router-dom';
import { React, Switch } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;


{/* <div className="App-header">
<ul className="App-nav">
  <li><Link to='/home' >Home</Link></li>
  <li><Link to='/about'>About</Link></li>
  <li><Link to='/projects'>Projects</Link></li>
  <li><Link to='/skills'>Skills</Link></li>
  <li><Link to='/experience'>Experience</Link></li>
  <li><Link to='/resume'>Resume</Link></li>
</ul>
</div>
<Routes>
<Route path='/home' element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/projects' element={<Projects />} />
<Route path='/skills' element={<Skills />} />
<Route path='/experience' element={<Experience />} />
<Route path='/resume' element={<Resume />} /> 
</Routes> */}


