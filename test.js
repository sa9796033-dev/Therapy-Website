// Smooth Scroll
document.querySelectorAll('header ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Navbar Color Change on Scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Scroll Reveal Animation
const sections = document.querySelectorAll('section');
const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.8;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // run on load

// Feedback Form
const form = document.querySelector('.feedback form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("✅ Thank you for your feedback!");
    form.reset();
  });
}
