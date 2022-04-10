import React from "react";
import Project1 from '../images/project1.jpg'
import Project2 from '../images/project2.jpg'
import Project3 from '../images/project3.jpg'


function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-heading">
        <h1>&lt;h1&gt;Projects&lt;/h1&gt;</h1>
      </div>
      <div className="projects-container">
        <div className="project-item">
          <div className="project-img">
            <img src={Project3} width="250" alt="" />
          </div>
          <div className="project-description">
            <h3>Nets</h3>
            <p>Nets is an application where the user will be able to find the closest court to your home and all the infrastructure it offers such as toilet, water and parking.</p>
          </div>

          <div className="project-links">

            <button>
            <a href="https://github.com/cassioastarita/Nets" className="btn-git" target='_blank'>Github</a>
            </button>
            <button>
            <a href="https://netzforall.herokuapp.com/" className="btn-demo" target='_blank'>Demo</a>
            </button>
            
          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src={Project2} width="250" alt="" />
          </div>
          <div className="project-description">
            <h3>Ciclo Closet</h3>
            <p>CICLO is a business with two main focuses: a second-hand store and a blog with informative content regarding fashion, sustainability and circular economy.</p>
          </div>

          <div className="project-links">

            <button>
            <a href="https://github.com/cassioastarita/ciclo_closet" className="btn" target='_blank'>Github</a>
            </button>
            <button>
            <a href="http://peaceful-inlet-10202.herokuapp.com/" className="btn btn-primary" target='_blank'>Demo</a>
            </button>

          </div>
        </div>

        <div className="project-item">
          <div className="project-img">
            <img src={Project1} width="250" alt="" />
          </div>
          <div className="project-description">
            <h3>Tic Tac Toe</h3>
            <p>Tic Tac Toe is game where there is a board of three by three cells and two symbols ("X" and "O"). The winner will be who has his symbol marked in a sequence of three.</p>
            </div>

            <div className="project-links">

            <button>
            <a href="https://github.com/cassioastarita/tic-tac-toe-mario-bros" className="btn" target='_blank'>Github</a>
            </button>
            <button>
            <a href="https://cassioastarita.github.io/tic-tac-toe-mario-bros/" className="btn btn-primary" target='_blank'>Demo</a>
            </button>

          </div>
        </div>     
      </div>
    </section>
  )
}

export default Projects;
