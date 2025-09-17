import React from "react";

function Sidenav({ lang, setLang, darkMode, toggleMode, texts }) {
  return (
    <ul className="sidenav" id="mobile-menu">
      <li><a href="#about">{texts.about}</a></li>
      <li><a href="#projects">{texts.projects}</a></li>
      <li><a href="#contact">{texts.contact}</a></li>

      <li>
        <div style={{ padding: "10px" }}>
          <button
            className="btn green"
            onClick={toggleMode}
            style={{ width: "100%" }}
          >
            {texts.mode}
          </button>
        </div>
      </li>

      <li>
        <div style={{ padding: "10px" }}>
          <button
            className="btn blue"
            onClick={() => setLang(lang === "fr" ? "en" : "fr")}
            style={{ width: "100%" }}
          >
            {lang === "fr" ? "EN" : "FR"}
          </button>
        </div>
      </li>
    </ul>
  );
}

export default Sidenav;
