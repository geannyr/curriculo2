document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll effect ---
  const header = document.getElementById('header');

  const handleHeaderScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  };

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // --- Mobile nav toggle ---
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close mobile nav on link click
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close mobile nav on outside click
  document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('open') &&
        !navLinks.contains(e.target) &&
        !navToggle.contains(e.target)) {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // --- Active nav state on scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  const observerNav = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navItems.forEach(item => {
          item.classList.toggle('active', item.getAttribute('href') === '#' + id);
        });
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '-80px 0px -50% 0px'
  });

  sections.forEach(section => observerNav.observe(section));

  // --- Scroll reveal ---
  const reveals = document.querySelectorAll('.reveal');

  const observerReveal = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observerReveal.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  reveals.forEach(el => observerReveal.observe(el));

  // --- Back to top ---
  const backToTop = document.getElementById('backToTop');

  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  // --- Footer year ---
  const footerCopy = document.getElementById('footerCopy');
  if (footerCopy) {
    footerCopy.textContent = '\u00A9 ' + new Date().getFullYear() + ' Geanny Rodrigues. Todos os direitos reservados.';
  }

});
