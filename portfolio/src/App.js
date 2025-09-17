import React, { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Sections from "./components/sections";
import texts from "./utils/texts";
import { getInitialTheme, toggleDarkMode, saveTheme } from "./utils/theme";

function App() {
  const [darkMode, setDarkMode] = useState(getInitialTheme());
  const [lang, setLang] = useState("fr");

  useEffect(() => {
    toggleDarkMode(darkMode);
    saveTheme(darkMode);
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
      <Sections texts={texts(darkMode)[lang]} />
    </>
  );
}

export default App;
