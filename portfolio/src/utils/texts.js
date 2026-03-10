const texts = (darkMode) => ({
  fr: {
    about: "À propos",
    projects: "Projets",
    games: "Jeux Publiés",
    experience: "Expériences",
    contact: "Contact",
    welcome: "Salut, je suis Léo, un",
    description:
      "Développeur orienté QA carburant au café, capable de transformer un rapport de crash en roadmap de stabilité. Je ne me contente pas de trouver les bugs ; je dissèque leur origine pour transformer les failles techniques en systèmes robustes. Mon objectif : garantir que la seule chose que vos joueurs brisent, ce sont des records, pas le jeu.",
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
    welcome: "Hi, I'm Léo, a",
    description:
      "Powered by caffeine and a 'break-fix' mindset. I’m a Developer/QA hybrid who views every bug report as a roadmap to a more polished product. I specialize in identifying technical friction and engineering it out of the player’s way.",
    roles: ["Game Developer", "QA Tester"],
    download: "Download my resume",
    email: "leo.phamvu@gmail.com",
    mode: darkMode ? "Light Mode" : "Dark Mode",
  },
});

export default texts;
