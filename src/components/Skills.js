import React from "react";
import Skill from './Skill'

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills">
        <div className="skills-heading">
          <h1>&lt;h1&gt;Skills&lt;/h1&gt;</h1>
          <p>Some of my skills: JavaScript, Ruby, React, HTML, CSS, Node.js. </p>
          <p>SQLite, Postgresql, API integration, Ajax and Axios requests.</p>
          <p>Deployment: GitHub and Heroku.</p>
        </div>    
        <div className="skillsGrid">
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="The logo icon for JavaScript" title="Java Script"/>
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg" alt="The logo icon for Ruby" title="Ruby"/>
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="The logo icon for react" title="React"/>
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" alt="The logo icon for HTML 5" title="HTML 5"/>
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" alt="The logo icon for CSS3" title="CSS 3"/>
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" alt="The logo icon for NodeJS" title="Node JS"/>
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" alt="The logo icon for PostgreSQL" title="PostgreSQL"/>
          <Skill source="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt="The logo icon for GitHub" title="GitHub"/>
        </div>  
      </div>
    </section>
  );
}

export default Skills;
