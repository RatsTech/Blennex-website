// src/scripts/navbarScroll.js
import lightLogo from '../assets/images/logo-light.png';
import darkLogo from '../assets/images/logo-dark.png';

export function initNavbarScroll() {
  const handleScroll = () => {
    const navbar = document.getElementById('myNavbar');
    const logo = document.getElementById('navbarLogo');

    //  Add null checks to avoid errors on pages that don't include these elements
    if (!navbar || !logo) return;

    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      logo.src = darkLogo;
    } else {
      navbar.classList.remove('scrolled');
      logo.src = lightLogo;
    }
  };

  window.addEventListener('scroll', handleScroll);
  window.addEventListener('load', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('load', handleScroll);
  };
}
