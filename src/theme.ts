export const setupTheme = (element: HTMLSelectElement) => {
  const font = localStorage.font || "sans-serif";
  element.value = font;

  element.addEventListener("change", () => {
    document.documentElement.style.setProperty(
      "--font",
      ["Roboto", element.value].join(", ")
    );
    localStorage.font = element.value;
  });
  document.documentElement.style.setProperty(
    "--font",
    ["Roboto", element.value].join(", ")
  );
};
