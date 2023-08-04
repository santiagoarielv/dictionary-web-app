export const setupDarkModeToggle = (element: HTMLInputElement) => {
  const matches = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const darkModeOn =
    localStorage.theme === "dark" || (!("theme" in localStorage) && matches);

  element.checked = darkModeOn;

  const onChange = () => {
    document.documentElement.classList.toggle("dark", element.checked);
    localStorage.theme = element.checked ? "dark" : "light";
  };

  element.addEventListener("change", () => {
    onChange();
  });
  onChange();
};
