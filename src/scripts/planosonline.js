const container = document.querySelector(".container-card");
const prev = document.querySelector(".left");
const next = document.querySelector(".next");

next.addEventListener("click", () => {
  container.scrollBy({ left: 280, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  container.scrollBy({ left: -280, behavior: "smooth" });
});
