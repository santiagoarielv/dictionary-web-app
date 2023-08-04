export const setupTheme = (element: HTMLSelectElement) => {
  const font = localStorage.font || "sans-serif";
  element.value = font;

  const onChange = () => {
    document.documentElement.style.setProperty(
      "--font",
      ["Roboto", element.value].join(", ")
    );
    localStorage.font = element.value;
  };

  element.addEventListener("change", () => {
    onChange();
  });
  onChange();
};
