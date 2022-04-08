import React from "react";
import ResumeCassio from '../images/Cassio-Resume.pdf'


function Navbar() {
  return (
    <header>
      <div className="navbar" id="navbar">
      </div>
      <nav className="top-nav">
        <ul className="nav-list">
          <li>
            <a href="#home" >Home </a>
          </li>
          <li>
            <a href="#about" >About </a>
          </li>
          <li>
            <a href="#projects" >Projects </a>
          </li>
          <li>
            <a href="#skills" >Skills </a>
          </li>
          <li>
            <a href="#experience" >Experience </a>
          </li>      
          <li>
            <a href={ResumeCassio} target='_blank'>Resume</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;