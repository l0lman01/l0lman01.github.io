// Traductions pour FR / EN
const texts = (darkMode) => ({
  fr: {
    about: "À propos",
    projects: "Projets",
    contact: "Contact",
    welcome: "Bienvenue sur mon portfolio",
    description:
      "Voici un site simple avec une navbar responsive Materialize, téléchargement PDF, mode nuit/jour et multilingue.",
    download: "Télécharger mon CV",
    email: "leo.phamvu@gmail.com",
    mode: darkMode ? "Mode Jour" : "Mode Nuit",
  },
  en: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    welcome: "Welcome to my portfolio",
    description:
      "Here is a simple site with a responsive Materialize navbar, PDF download, dark/light mode, and multilingual support.",
    download: "Download my CV",
    email: "leo.phamvu@gmail.com",
    mode: darkMode ? "Light Mode" : "Dark Mode",
  },
});

export default texts;
