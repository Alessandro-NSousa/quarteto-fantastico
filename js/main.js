// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });

  // Close mobile menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
  });
}

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
  // Show/hide button on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove('opacity-0', 'invisible');
      backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
      backToTopBtn.classList.add('opacity-0', 'invisible');
      backToTopBtn.classList.remove('opacity-100', 'visible');
    }
  });

  // Scroll to top on click
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Header Background on Scroll
const header = document.querySelector('header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-2xl');
    } else {
      header.classList.remove('shadow-2xl');
    }
  });
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    
    // Don't prevent default for footer link
    if (href === '#' || href === '#footer') {
      return;
    }
    
    e.preventDefault();
    const target = document.querySelector(href);
    
    if (target) {
      const headerHeight = header ? header.offsetHeight : 80;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Initialize Team Swiper Carousel
const teamSwiper = new Swiper('.teamSwiper', {
  // Basic settings
  loop: true,
  speed: 600,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  
  // Responsive breakpoints
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.teamSwiper .swiper-button-next',
    prevEl: '.teamSwiper .swiper-button-prev',
  },
  
  // Pagination bullets
  pagination: {
    el: '.teamSwiper .swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  // Enable keyboard control
  keyboard: {
    enabled: true,
  },
  
  // Touch settings
  grabCursor: true,
  
  // Accessibility
  a11y: {
    prevSlideMessage: 'Atleta anterior',
    nextSlideMessage: 'Próximo atleta',
  },
});

// Pause team carousel on hover
const teamSwiperContainer = document.querySelector('.teamSwiper');
if (teamSwiperContainer && teamSwiper) {
  teamSwiperContainer.addEventListener('mouseenter', () => {
    teamSwiper.autoplay.stop();
  });
  
  teamSwiperContainer.addEventListener('mouseleave', () => {
    teamSwiper.autoplay.start();
  });
}

// Initialize Events Swiper Carousel
const eventsSwiper = new Swiper('.eventsSwiper', {
  // Basic settings
  loop: true,
  speed: 600,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  
  // Responsive breakpoints
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
  
  // Navigation arrows
  navigation: {
    nextEl: '.eventsSwiper .swiper-button-next',
    prevEl: '.eventsSwiper .swiper-button-prev',
  },
  
  // Pagination bullets
  pagination: {
    el: '.eventsSwiper .swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  // Enable keyboard control
  keyboard: {
    enabled: true,
  },
  
  // Touch settings
  grabCursor: true,
  
  // Accessibility
  a11y: {
    prevSlideMessage: 'Evento anterior',
    nextSlideMessage: 'Próximo evento',
  },
});

// Pause events carousel on hover
const eventsSwiperContainer = document.querySelector('.eventsSwiper');
if (eventsSwiperContainer && eventsSwiper) {
  eventsSwiperContainer.addEventListener('mouseenter', () => {
    eventsSwiper.autoplay.stop();
  });
  
  eventsSwiperContainer.addEventListener('mouseleave', () => {
    eventsSwiper.autoplay.start();
  });
}

// Initialize Gallery Swiper Carousel
const gallerySwiper = new Swiper('.gallerySwiper', {
  // Basic settings
  loop: true,
  speed: 800,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  
  // Responsive breakpoints
  slidesPerView: 1,
  spaceBetween: 0,
  
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  
  // Enable keyboard control
  keyboard: {
    enabled: true,
  },
  
  // Touch settings
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  
  // Lazy loading (when using real images)
  lazy: {
    loadPrevNext: true,
  },
  
  // Effect
  effect: 'slide',
  
  // Accessibility
  a11y: {
    prevSlideMessage: 'Imagem anterior',
    nextSlideMessage: 'Próxima imagem',
    firstSlideMessage: 'Esta é a primeira imagem',
    lastSlideMessage: 'Esta é a última imagem',
  },
});

// Pause autoplay on hover
const swiperContainer = document.querySelector('.gallerySwiper');
if (swiperContainer && gallerySwiper) {
  swiperContainer.addEventListener('mouseenter', () => {
    gallerySwiper.autoplay.stop();
  });
  
  swiperContainer.addEventListener('mouseleave', () => {
    gallerySwiper.autoplay.start();
  });
}

// Animate elements on scroll (Intersection Observer)
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.card, section > div').forEach(el => {
  observer.observe(el);
});

// Add animation classes
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
`;
document.head.appendChild(style);

// Log initialization
console.log('%c🏃 Quarteto Fantástico - Landing Page carregada com sucesso!', 'color: #b4ff00; font-size: 16px; font-weight: bold;');
console.log('%cDesenvolvido com HTML5, Tailwind CSS e JavaScript', 'color: #1a1a4d; font-size: 12px;');
