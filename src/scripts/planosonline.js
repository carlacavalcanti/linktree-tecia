const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

next.addEventListener("click", () => {
  carousel.scrollBy({ left: 300, behavior: "smooth" });
});

prev.addEventListener("click", () => {
  carousel.scrollBy({ left: -300, behavior: "smooth" });
});
