const projects = [
  {
    title: {
      en: "Run Till Dawn game",
      fr: "Jeu Run Till Dawn",
    },
    description: {
      en: "A simple 2D puzzle platformer game made with Unity for a student project.",
      fr: "Un jeu de plateforme puzzle 2D simple réalisé avec Unity pour un projet étudiant.",
    },
    image: require("../assets/runtill.png"),
    demo: "https://l0lman01.itch.io/run-till-dawn-p",
    details: {
      en: "A school project game made in Unity by 3 people. Navigate through multiple puzzle levels while avoiding obstacles",
      fr: "Un jeu de projet scolaire réalisé avec Unity fait par 3 personnes. Naviguez à travers plusieurs niveaux de puzzle tout en évitant les obstacles.",
    },
    technologies: ["Unity", "C#"],
    features: {
      en: ["Multiple puzzle levels", "Simple physics interactions"],
      fr: ["Plusieurs niveaux puzzle", "Interactions physiques simples"]
    }
  },

  {
    title: {
      en: "Phaser Game",
      fr: "Jeu Phaser",
    },
    description: {
      en: "A fun 2D game built with Phaser.js",
      fr: "Un jeu 2D amusant créé avec Phaser.js",
    },
    image: require("../assets/joyride.png"),
    demo: "https://asteroidjoyride.netlify.app/",
    details: {
      en: "Small arcade-style game built in Phaser 3. Playable on desktop, I learned a lot about Phaser framework while making this game.",
      fr: "Petit jeu arcade réalisé avec Phaser 3. Jouable sur desktop, j'ai beaucoup appris sur la framework de Phaser en développant ce jeu."
    },
    technologies: ["Phaser.js", "JavaScript", "HTML5"],
    features: {
      en: ["Endless runner mechanics", "Score system", "Responsive controls"],
      fr: ["Mécaniques d'runner infini", "Système de score", "Contrôles responsives"]
    }
  },
  {
    title: {
      en: "Escape the manor VR",
      fr: "Escape the manor VR",
    },
    description: {
      en: "A VR game made with Unity and Oculus Quest 2 for a student project.",
      fr: "Un jeu VR réalisé avec Unity et Oculus Quest 2 pour un projet étudiant.",
    },
    image: require("../assets/escape.png"),
    demo: "https://l0lman01.itch.io/mission-possible-vr",
    details: {
      en: "VR escape-room experience prototype built for Oculus Quest 2 with 3 other students.",
      fr: "Prototype d'escape-room en VR développé pour Oculus Quest 2 avec 3 autres étudiants."
    },
    technologies: ["Unity", "C#", "Oculus SDK", "Meta Quest"],
    features: {
      en: ["Room-scale interactions", "Puzzle-based progression", "Optimized for Quest 2"],
      fr: ["Interactions en room-scale", "Progression basée sur des puzzles", "Optimisé pour Quest 2"]
    }
  },
];

export default projects;
