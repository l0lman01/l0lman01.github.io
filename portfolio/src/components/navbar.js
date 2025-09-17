import React, { useEffect } from "react";
import Sidenav from "./sidenav";

function Navbar({ darkMode, toggleMode, lang, setLang, texts }) {
  useEffect(() => {
    // Initialisation du sidenav Materialize via CDN
    const elems = document.querySelectorAll(".sidenav");
    window.M.Sidenav.init(elems);
  }, []);

  return (
    <>
      <nav className={darkMode ? "grey darken-4" : "green"}>
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            Portfolio
          </a>
          <a href="#!" data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#about">{texts.about}</a></li>
            <li><a href="#projects">{texts.projects}</a></li>
            <li><a href="#contact">{texts.contact}</a></li>
            <li>
              <button
                className="btn white black-text"
                onClick={toggleMode}
                style={{ marginLeft: "10px" }}
              >
                {texts.mode}
              </button>
            </li>
            <li>
              <button
                className="btn blue"
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                style={{ marginLeft: "10px" }}
              >
                {lang === "fr" ? "EN" : "FR"}
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Sidenav
        darkMode={darkMode}
        toggleMode={toggleMode}
        lang={lang}
        setLang={setLang}
        texts={texts}
      />
    </>
  );
}

export default Navbar;
