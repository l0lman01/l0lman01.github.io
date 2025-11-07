import React, { useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import photo from "../assets/me.jpg";
import portalBlue from "../assets/portal blue.png";
import portalOrange from "../assets/portal orange.png";
import { Typewriter } from "react-simple-typewriter";
import projects from "../utils/projects";
import games from "../utils/games";
import ProjectModal from "../utils/ProjectModal";
import GameModal from "../utils/GameModal";

function Sections({ texts, lang, darkMode }) {

  useEffect(() => {
    const elems = document.querySelectorAll('.modal');
    window.M.Modal.init(elems, {});
  }, []);

  const [openProjectModal, setOpenProjectModal] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState(null);
  
  const [openGameModal, setOpenGameModal] = React.useState(false);
  const [selectedGame, setSelectedGame] = React.useState(null);

  return (
    <>
      <div className="container" style={{ padding: "2rem" }}>
        <section id="about" className="center-align" style={{ marginBottom: "4rem" }}>
          <h4>
            {texts.welcome} <br />
            <span style={{ color: "blue" }}>
              <Typewriter
                words={texts.roles}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={1000} />
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
            }} />

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
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3500}
            emulateTouch
            swipeable
            dynamicHeight={false}
            showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "calc(50% - 180px)",
                  left: 15,
                  width: 64,
                  height: 360,
                  background: "none",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "50% / 40%"
                }}
                aria-label="Previous slide"
              >
                <img src={portalBlue} alt="Prev" style={{ width: 70, height: 360, transform: "rotate(180deg)" }} />
              </button>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "calc(50% - 180px)",
                  right: 15,
                  width: 64,
                  height: 360,
                  background: "none",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "50% / 40%"
                }}
                aria-label="Next slide"
              >
                <img src={portalOrange} alt="Next" style={{ width: 70, height: 360 }} />
              </button>
            )}
          >
            {projects.map((project, index) => (
              <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 100 }}>
                <div
                  className={`card ${darkMode ? "blue-grey darken-4 white-text z-depth-3" : "white"}`}
                  style={{
                    width: "100%",
                    maxWidth: 350,
                    backgroundColor: darkMode ? "rgba(16, 24, 38, 0.97)" : "white",
                    boxShadow: darkMode ? "0 8px 30px rgba(0, 140, 255, 0.25)" : "0 4px 10px rgba(0,0,0,0.2)",
                    borderRadius: "12px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <div className="card-image">
                    <img
                      src={project.image}
                      alt={project.title[lang]}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: 150,
                        objectFit: "cover",
                        filter: darkMode ? "brightness(0.85)" : "none",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px"
                      }} />
                  </div>
                  <div className="card-content black-text">
                    <span className="card-title">{project.title[lang]}</span>
                    <p>{project.description[lang]}</p>
                  </div>
                  <div className="card-action">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={darkMode ? "blue-text text-lighten-2" : "blue-text"}
                    >
                      Demo
                    </a>
                    <a
                      href="#!"
                      className="modal-trigger"
                      onClick={() => {
                        setSelectedProject(project);
                        setOpenProjectModal(true);
                      }}
                      style={{ marginLeft: "10px" }}
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </section>

        <section id="games" style={{ marginBottom: "4rem" }}>
          <h4 className="center-align">{texts.games}</h4>
          <Carousel
            showThumbs={false}
            showStatus={false}
            infiniteLoop
            autoPlay
            interval={3500}
            emulateTouch
            swipeable
            dynamicHeight={false}
            showIndicators={false}
            renderArrowPrev={(onClickHandler, hasPrev, label) => hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "calc(50% - 180px)",
                  left: 15,
                  width: 64,
                  height: 360,
                  background: "none",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "50% / 40%"
                }}
                aria-label="Previous slide"
              >
                <img src={portalBlue} alt="Prev" style={{ width: 70, height: 360, transform: "rotate(180deg)" }} />
              </button>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "calc(50% - 180px)",
                  right: 15,
                  width: 64,
                  height: 360,
                  background: "none",
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  borderRadius: "50% / 40%"
                }}
                aria-label="Next slide"
              >
                <img src={portalOrange} alt="Next" style={{ width: 70, height: 360 }} />
              </button>
            )}
          >
            {games.map((game, index) => (
              <div key={index} style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: 250 }}>
                <div className={`card ${darkMode ? "blue-grey darken-4 white-text z-depth-3" : "white"}`}
                  style={{
                    width: "100%",
                    maxWidth: 400,
                    backgroundColor: darkMode ? "rgba(16, 24, 38, 0.97)" : "white",
                    boxShadow: darkMode ? "0 8px 30px rgba(0, 140, 255, 0.25)" : "0 4px 10px rgba(0,0,0,0.2)",
                    borderRadius: "12px",
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}>

                  <div className="card-image">
                    <img
                      src={game.image}
                      alt={game.title}
                      style={{
                        width: "100%",
                        height: "auto",
                        maxHeight: 250,
                        objectFit: "cover",
                        filter: darkMode ? "brightness(0.85)" : "none",
                        borderTopLeftRadius: "12px",
                        borderTopRightRadius: "12px"
                      }} />
                  </div>
                  <div className="card-content black-text">
                    <span className="card-title">{game.title}</span>
                    <p>{game.description[lang]}</p>
                  </div>
                  <div className="card-action">
                    <a
                      href={game.demo}
                      target="_blank"
                      rel="noreferrer"
                      className={darkMode ? "blue-text text-lighten-2" : "blue-text"}
                    >
                      Game Page
                    </a>
                    <a
                      href="#!"
                      className="modal-trigger"
                      onClick={() => {
                        setSelectedGame(game);
                        setOpenGameModal(true);
                      }}
                      style={{ marginLeft: "10px" }}
                    >
                      Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

        </section>

        <section id="contact" className="center-align">
          <h4>{texts.contact}</h4>
          <p>Email: <a href="mailto:leo.phamvu@gmail.com">{texts.email}</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/leo-pham-vu/" target="_blank" rel="noreferrer">lien</a></p>
        </section>
      </div>
      
      <ProjectModal
        open={openProjectModal}
        project={selectedProject}
        onClose={() => setOpenProjectModal(false)}
        lang={lang}
        darkMode={darkMode}
      />
      
      <GameModal
        open={openGameModal}
        game={selectedGame}
        onClose={() => setOpenGameModal(false)}
        lang={lang}
        darkMode={darkMode}
      />
    </>
  );
}

export default Sections;