const menuBtn = document.querySelector('[data-menu-btn]');
const navLinks = document.querySelector('[data-nav-links]');

if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}
