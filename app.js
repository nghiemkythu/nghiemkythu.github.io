// AUTHOR LISTS: change this number to show more/fewer names initially.
const AUTHORS_VISIBLE = 10;
const authorStyles = document.createElement("link");
authorStyles.rel = "stylesheet";
authorStyles.href = new URL("authors.css", document.currentScript.src).href;
document.head.appendChild(authorStyles);

function renderAuthors(p) {
  const names = p.authors.split(",").map((name) => name.trim());
  if (names.length <= AUTHORS_VISIBLE) return names.join(", ");
  const id = `remaining-authors-${papers.indexOf(p)}`;
  const count = names.length - AUTHORS_VISIBLE;
  return `${names.slice(0, AUTHORS_VISIBLE).join(", ")}<span id="${id}" hidden>, ${names.slice(AUTHORS_VISIBLE).join(", ")}</span><button type="button" class="authors-toggle" aria-expanded="false" aria-controls="${id}" data-count="${count}">, and ${count} more ${count === 1 ? "author" : "authors"}</button>`;
}

// Delegation keeps the controls working after a year-filter change.
document.addEventListener("click", (event) => {
  const button = event.target.closest(".authors-toggle");
  if (!button) return;
  const expanded = button.getAttribute("aria-expanded") === "true";
  document.getElementById(button.getAttribute("aria-controls")).hidden =
    expanded;
  button.setAttribute("aria-expanded", String(!expanded));
  const count = Number(button.dataset.count);
  button.textContent = expanded
    ? `, and ${count} more ${count === 1 ? "author" : "authors"}`
    : " (show fewer)";
});

// PUBLICATION DISPLAY — renders publications.js and handles year filters.
// To update paper content, edit publications.js instead.

function paperCard(p) {
  return `<article class="paper" data-year="${p.year}"><div class="paper-media"><span class="venue-tag">${p.tag}</span><img src="assets/${p.img}" alt="${p.title} — paper overview" loading="lazy"></div><div><h3><a href="${p.pdf}" target="_blank" rel="noopener">${p.title}</a></h3><p class="authors">${renderAuthors(p)}</p><p class="venue">${p.status === "review" ? p.year : p.venue}</p><div class="paper-links"><a href="${p.pdf}" target="_blank" rel="noopener">PDF</a>${p.project ? `<a href="${p.project}" target="_blank" rel="noopener">PROJECT</a>` : ""}${p.code ? `<a href="${p.code}" target="_blank" rel="noopener">CODE</a>` : ""}</div></div></article>`;
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
