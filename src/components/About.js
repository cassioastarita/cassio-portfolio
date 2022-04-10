import React from "react";
import profileimg from '../images/profile-pic.jpg'


function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="profile-img">
          <img src={profileimg} width="350" alt="" />
        </div>
        <div className="about-details">
          <div className="about-heading">
            <h1>&lt;h1&gt;About&lt;/h1&gt;</h1>
          </div>
            <p>
              My name is Cassio, and when I was a kid, my dream job was to be a Lego Builder. It might sound funny, but making colorful little pieces become meaningful objects was a tremendous fulfilment for me. 
              Nowadays, after a Bachelor in Business, I decided to become a Software Engineer, and this makes me feel the same as that young guy. 
              In tech, putting "little pieces together" can change the world, and with my creativity, dedication and curiosity, I can help people to have a better life. 
              I am an enthusiastic team player and would love to work with an open-minded, multicultural team.
            </p>
        </div>
      </div>
    </section>
  );
}

export default About;
