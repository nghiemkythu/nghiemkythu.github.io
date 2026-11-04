const cvSections = [...document.querySelectorAll(".cv-section")];
const cvLinks = [...document.querySelectorAll(".cv-sidebar a")];
let scheduled = false;
function updateCVSection() {
  let current = cvSections[0];
  for (const section of cvSections) {
    if (section.getBoundingClientRect().top <= 145) current = section;
  }
  for (const link of cvLinks) {
    const active = link.hash === "#" + current.id;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
  scheduled = false;
}
window.addEventListener(
  "scroll",
  () => {
    if (!scheduled) {
      scheduled = true;
      requestAnimationFrame(updateCVSection);
    }
  },
  { passive: true },
);
window.addEventListener("resize", updateCVSection);
updateCVSection();
