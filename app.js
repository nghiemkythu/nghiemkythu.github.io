// PUBLICATION DISPLAY — renders publications.js and handles year filters.
// To update paper content, edit publications.js instead.

function paperCard(p) {
  return `<article class="paper" data-year="${p.year}"><div class="paper-media"><span class="venue-tag">${p.tag}</span><img src="assets/${p.img}" alt="${p.title} — paper overview" loading="lazy"></div><div><h3><a href="${p.pdf}" target="_blank" rel="noopener">${p.title}</a></h3><p class="authors">${p.authors}</p><p class="venue">${p.status === "review" ? p.year : p.venue}</p><div class="paper-links"><a href="${p.pdf}" target="_blank" rel="noopener">PDF</a>${p.project ? `<a href="${p.project}" target="_blank" rel="noopener">PROJECT</a>` : ""}${p.code ? `<a href="${p.code}" target="_blank" rel="noopener">CODE</a>` : ""}</div></div></article>`;
}
const accepted = papers.filter((p) => p.status !== "review");
document.querySelector("#preprint-papers").innerHTML = papers
  .filter((p) => p.status === "review")
  .map(paperCard)
  .join("");
function renderAccepted(year = "all") {
  const visible = accepted.filter(
    (p) => year === "all" || String(p.year) === year,
  );
  const years = [...new Set(visible.map((p) => p.year))];
  document.querySelector("#papers").innerHTML =
    year === "all"
      ? visible.map(paperCard).join("")
      : years
          .map(
            (y) =>
              `<div class="year-group"><h3 class="year-heading">${y}</h3>${visible
                .filter((p) => p.year === y)
                .map(paperCard)
                .join("")}</div>`,
          )
          .join("");
  document.querySelector("#count").textContent =
    `${visible.length} accepted ${visible.length === 1 ? "work" : "works"}`;
}
renderAccepted();
document.querySelectorAll(".filters button").forEach((b) =>
  b.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach((x) => {
      x.classList.toggle("selected", x === b);
      x.setAttribute("aria-pressed", x === b);
    });
    renderAccepted(b.dataset.year);
  }),
);
