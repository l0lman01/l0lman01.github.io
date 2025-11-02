import games from "./games";

const texts = (darkMode) => ({
  fr: {
    about: "À propos",
    projects: "Projets",
    games: "Jeux Publiés",
    experience: "Expériences",
    contact: "Contact",
    welcome: "Salut, je suis Léo PHAM VU et je suis",
    description:
      "Bonjour! Je suis Léo, un développeur de jeux passionné et QA testeur. Ravi de vous rencontrer!",
    roles: ["Développeur jeu vidéo", "QA Testeur"],
    download: "Télécharger mon CV",
    email: "leo.phamvu@gmail.com",
    mode: darkMode ? "Mode Jour" : "Mode Nuit",
  },
  
  en: {
    about: "About",
    projects: "Projects",
    games: "Games Shipped",
    experience: "Experiences",
    contact: "Contact",
    welcome: "Hi, I'm Léo, I'm a",
    description:
      "Hello! I'm Léo PHAM VU, a passionate Game Developer and QA Tester.",
    roles: ["Game Developer", "QA Tester"],
    download: "Download my resume",
    email: "leo.phamvu@gmail.com",
    mode: darkMode ? "Light Mode" : "Dark Mode",
  },
});

export default texts;
