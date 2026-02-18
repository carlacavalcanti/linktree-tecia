const container = document.querySelector(".planos-container");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

next.addEventListener("click", () => {
  container.scrollBy({ left: 260, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  container.scrollBy({ left: -260, behavior: "smooth" });
});
