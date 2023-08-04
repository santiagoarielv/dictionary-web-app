export const setupDarkModeToggle = (element: HTMLInputElement) => {
  const darkModeOn =
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  element.checked = darkModeOn;
  element.addEventListener("change", () => {
    document.documentElement.classList.toggle("dark", element.checked);
    localStorage.theme = element.checked ? "dark" : "light";
  });
  document.documentElement.classList.toggle("dark", element.checked);
};
