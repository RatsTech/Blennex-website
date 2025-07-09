
  function handleNavbarScroll() {
    const navbar = document.getElementById('myNavbar');
    const logo = document.getElementById('navbarLogo');

    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      logo.src = 'assets/images/logo-dark.png'; // dark logo for scrolled navbar
    } else {
      navbar.classList.remove('scrolled');
      logo.src = 'assets/images/logo-light.png'; // light logo for default navbar
    }
  }

  window.addEventListener('scroll', handleNavbarScroll);
  window.addEventListener('load', handleNavbarScroll);
