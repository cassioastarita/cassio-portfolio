import React from "react";


function Home() {
  return (
    <section className="home" id="home">
      <div className="home">
        <div className="home-heading">
          <h3>&lt;h3&gt;Hello World!&lt;h3&gt;</h3>
          <h1>I'm Cassio</h1>
          <h3>Junior Full-stack Developer</h3>
        </div>
        <ul className="contact-types">
          <li>
            <a href="mailto:cassioastarita@gmail.com" target='_blank' alt="">
            <img src="https://img.icons8.com/fluency/48/000000/email-open.png"/></a>   
          </li>   
          <li> 
            <a href="https://www.linkedin.com/in/cassioastarita/" target='_blank' alt="">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt=""/></a>
          </li>
          <li>
            <a href="http://github.com/cassioastarita" target='_blank' alt="">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"/></a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Home;