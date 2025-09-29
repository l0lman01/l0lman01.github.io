import React from "react";
import photo from "../assets/me.jpg";
import { Typewriter } from "react-simple-typewriter";
import projects from "../utils/projects";

function Sections({ texts, lang }) {
  return (
    <div className="container" style={{ padding: "2rem" }}>
      <section id="about" className="center-align" style={{ marginBottom: "4rem" }}>
        <h4>
          {texts.welcome} <br />
          <span style={{ color: "blue" }}>
            <Typewriter
              words={texts.roles}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h4>

        <img
          src={photo}
          alt="Léo PHAM VU"
          className="responsive-img z-depth-2"
          style={{
            width: "200px",
            height: "200px",
            objectFit: "cover",
            borderRadius: "20px",
            margin: "20px 0"
          }}
        />

        <p>{texts.description}</p>
        <a
          className="btn waves-effect waves-light"
          href={lang === "fr" ? "/pdfs/Léo PHAM-VU FR.pdf" : "/pdfs/Léo PHAM-VU EN.pdf"}
          download
        >
          {texts.download}
        </a>
      </section>

      <section id="projects" style={{ marginBottom: "4rem" }}>
        <h4 className="center-align">{texts.projects}</h4>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col s12 m6 l4">
              <div className="card">
                <div className="card-image">
                  <img src={project.image} alt={project.title[lang]} />
                </div>
                <div className="card-content">
                  <span className="card-title">{project.title[lang]}</span>
                  <p>{project.description[lang]}</p>
                </div>
                <div className="card-action">
                  <a href={project.demo} target="_blank" rel="noreferrer">Demo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="center-align">
        <h4>{texts.contact}</h4>
        <p>Email: <a href="mailto:leo.phamvu@gmail.com">{texts.email}</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/leo-pham-vu/" target="_blank" rel="noreferrer">lien</a></p>
      </section>
    </div>
  );
}

export default Sections;
