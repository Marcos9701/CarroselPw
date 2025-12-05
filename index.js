// ====== CAROUSEL 100% AUTOMÁTICO ======
document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;

  let index = 0;

  function atualizarCarousel() {
    if (carousel) {
      carousel.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  function iniciarAutoPlay() {
    setInterval(() => {
      index = (index + 1) % totalItems;
      atualizarCarousel();
    }, 3000); // Troca a cada 3 segundos
  }

  iniciarAutoPlay();
});
