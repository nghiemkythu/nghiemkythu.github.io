const theme = document.querySelector("#theme");
function setTheme(dark) {
  document.body.classList.toggle("dark", dark);
  theme.textContent = dark ? "☀" : "☾";
  theme.setAttribute(
    "aria-label",
    dark ? "Switch to light theme" : "Switch to dark theme",
  );
  theme.setAttribute("aria-pressed", dark);
}
try {
  setTheme(localStorage.getItem("theme") === "dark");
} catch {}
theme.addEventListener("click", () => {
  const dark = !document.body.classList.contains("dark");
  setTheme(dark);
  try {
    localStorage.setItem("theme", dark ? "dark" : "light");
  } catch {}
});
