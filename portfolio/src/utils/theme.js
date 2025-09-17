export const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) return savedTheme === "dark";
  return false; // bright mode default
};

export const toggleDarkMode = (isDark) => {
  if (isDark) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
};

export const saveTheme = (isDark) => {
  localStorage.setItem("theme", isDark ? "dark" : "light");
};
