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
            style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}
          >
            {lang === "fr" ? (
              <>
                <img src="/flags/en.png" alt="English" style={{ width: 20, height: 20, borderRadius: 2 }} />
                EN
              </>
            ) : (
              <>
                <img src="/flags/fr.png" alt="Français" style={{ width: 20, height: 20, borderRadius: 2 }} />
                FR
              </>
            )}
          </button>
        </div>
      </li>
    </ul>
  );
}

export default Sidenav;
