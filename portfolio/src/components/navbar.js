import React, { useEffect } from "react";
import Sidenav from "./sidenav";

function Navbar({ darkMode, toggleMode, lang, setLang, texts }) {
  useEffect(() => {
    const elems = document.querySelectorAll(".sidenav");
    window.M.Sidenav.init(elems);
  }, []);

  return (
    <>
      <nav className={darkMode ? "grey darken-4" : "green"}>
        <div className="nav-wrapper container">
          <a href="#!" data-target="mobile-menu" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul
            className="right hide-on-med-and-down"
            style={{ display: "flex", alignItems: "center" }}
          >
            <li><a href="#about">{texts.about}</a></li>
            <li><a href="#projects">{texts.projects}</a></li>
            <li><a href="#contact">{texts.contact}</a></li>
            <li>
              <button
                className="btn white black-text"
                onClick={toggleMode}
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "0 12px"
                }}
              >
                {texts.mode}
              </button>
            </li>
            <li>
              <button
                className="btn blue"
                onClick={() => setLang(lang === "fr" ? "en" : "fr")}
                style={{
                  marginLeft: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "0 12px"
                }}
              >
                {lang === "fr" ? (
                  <>
                    <img
                      src="/flags/en.png"
                      alt="English"
                      style={{ width: 20, height: 20 }}
                    />
                    EN
                  </>
                ) : (
                  <>
                    <img
                      src="/flags/fr.png"
                      alt="Français"
                      style={{ width: 20, height: 20 }}
                    />
                    FR
                  </>
                )}
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
