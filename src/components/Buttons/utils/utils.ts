export const setTheme = (theme: "light" | "dark") => {
  if (typeof document !== "undefined") {
    document.documentElement.setAttribute("data-theme", theme);
  }
  if (typeof window !== "undefined") {
    localStorage.setItem("theme", theme);
  }
};

export const toggleTheme = () => {
  if (typeof window !== "undefined") {
    const currentTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }
};

export const loadTheme = (): "light" | "dark" => {
  if (typeof window !== "undefined") {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    return savedTheme;
  }
  return "light";
};
