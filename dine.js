// Reservation form handler
document.getElementById("reservationForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("confirmMsg").textContent = "✅ Reservation confirmed! See you soon.";
});

// Lightbox functionality
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeBtn = document.getElementById("closeBtn");

galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.remove("hidden");
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
// Animate menu items when they come into view
const menuItems = document.querySelectorAll('.menu-item');

function animateOnScroll() {
  menuItems.forEach(item => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      item.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
