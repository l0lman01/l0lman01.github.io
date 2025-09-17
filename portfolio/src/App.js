import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Sidenav from "./components/sidenav";
import Sections from "./components/sections";
import texts from "./utils/texts";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState("fr");

  // Appliquer la classe dark-mode sur le body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleMode={() => setDarkMode(!darkMode)}
        lang={lang}
        setLang={setLang}
        texts={texts(darkMode)[lang]}
      />
      <Sidenav
        darkMode={darkMode}
        toggleMode={() => setDarkMode(!darkMode)}
        lang={lang}
        setLang={setLang}
        texts={texts(darkMode)[lang]}
      />
      <Sections texts={texts(darkMode)[lang]} />
    </>
  );
}

export default App;
