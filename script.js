// Observer for about-container animations
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
    }
  });
});

document.querySelectorAll('.about-container').forEach(el => aboutObserver.observe(el));

// Observer for service cards
const serviceObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.animation = 'floatUp 1s ease forwards';
    }
  });
}, { threshold: 0.2 });

const cards = document.querySelectorAll('.service-card');
cards.forEach(card => {
  serviceObserver.observe(card);
});
