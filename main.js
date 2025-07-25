// Smooth scroll for nav links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animate header on scroll
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (header) {
    if (window.scrollY > 0) {
      header.classList.add("scrolling", "animate__fadeInDown");
    } else {
      header.classList.remove("scrolling", "animate__fadeInDown");
    }
  }
});

window.addEventListener('DOMContentLoaded', function() {
  // VanillaTilt for all cards
  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll(".card"), {
      max: 18,
      speed: 600,
      glare: true,
      "max-glare": 0.25,
      scale: 1.06,
      perspective: 1200,
    });
  }

  // Animate social icons on hover
  document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.classList.add('animate__tada');
    });
    icon.addEventListener('mouseleave', () => {
      icon.classList.remove('animate__tada');
    });
  });

  // Fade in sections on scroll
  function fadeSections() {
    document.querySelectorAll('.fade-section').forEach(section => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        section.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }
  window.addEventListener('scroll', fadeSections);
  fadeSections();
});