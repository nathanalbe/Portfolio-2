// Modern Portfolio JavaScript
class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.setupSmoothScrolling();
    this.setupNavbarScroll();
    this.setupSkillBars();
    this.setupParallaxEffects();
    this.setupScrollIndicator();
  }

  setupEventListeners() {
    // Mobile menu toggle
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    if (hamburgerIcon) {
      hamburgerIcon.addEventListener('click', this.toggleMenu.bind(this));
    }

    // Close mobile menu when clicking on links
    const mobileLinks = document.querySelectorAll('.menu-links .nav-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', this.closeMenu.bind(this));
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      const menu = document.querySelector('.menu-links');
      const icon = document.querySelector('.hamburger-icon');
      if (menu && !menu.contains(e.target) && !icon.contains(e.target)) {
        this.closeMenu();
      }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    if (menu && icon) {
      menu.classList.toggle('open');
      icon.classList.toggle('open');
      
      // Update aria-expanded for accessibility
      const isOpen = menu.classList.contains('open');
      icon.setAttribute('aria-expanded', isOpen);
      
      // Prevent body scroll when menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
  }

  closeMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    if (menu && icon) {
      menu.classList.remove('open');
      icon.classList.remove('open');
      icon.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          
          // Animate skill bars when experience section comes into view
          if (entry.target.classList.contains('experience-section')) {
            this.animateSkillBars();
          }
          
          // Animate project cards
          if (entry.target.classList.contains('projects-section')) {
            this.animateProjectCards();
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      observer.observe(section);
    });

    // Observe individual elements for staggered animations
    const animateElements = document.querySelectorAll('.stat-card, .skill-card, .project-card, .contact-card');
    animateElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.1}s`;
      observer.observe(el);
    });
  }

  setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupNavbarScroll() {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const navbar = document.querySelector('.nav-glass');
    
    function updateNavbar() {
      const currentScrollY = window.scrollY;
      const scrollDifference = Math.abs(currentScrollY - lastScrollY);
      
      if (navbar && scrollDifference > 5) { // Only update if scroll difference is significant
        // Add/remove scrolled class for styling
        if (currentScrollY > 100) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        
        // Hide/show navbar on scroll
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
          // Scrolling down - hide navbar
          navbar.style.transform = 'translateY(-100%)';
        } else if (currentScrollY < lastScrollY || currentScrollY <= 200) {
          // Scrolling up or near top - show navbar
          navbar.style.transform = 'translateY(0)';
        }
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    }
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    });
  }

  setupSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
      const width = bar.style.width;
      bar.style.width = '0%';
      
      // Store original width for animation
      bar.dataset.targetWidth = width;
    });
  }

  animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach((bar, index) => {
      setTimeout(() => {
        bar.style.width = bar.dataset.targetWidth;
      }, index * 200);
    });
  }

  animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('animate-in');
      }, index * 150);
    });
  }

  setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;
      
      parallaxElements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${rate * speed}px)`;
      });
    });
  }

  setupScrollIndicator() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
      // Make scroll indicator clickable
      scrollIndicator.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
      
      // Hide scroll indicator when user scrolls
      let scrollTimeout;
      window.addEventListener('scroll', () => {
        scrollIndicator.style.opacity = '0.3';
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          scrollIndicator.style.opacity = '0.8';
        }, 1000);
      });
    }
  }


  // Utility method for adding CSS animations
  addAnimation(element, animationName, duration = '0.5s') {
    element.style.animation = `${animationName} ${duration} ease forwards`;
  }

  // Method to handle form submissions (if contact form is added later)
  handleFormSubmission(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Add loading state
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Simulate form submission (replace with actual form handling)
      setTimeout(() => {
        submitBtn.textContent = 'Message Sent!';
        submitBtn.style.background = 'var(--gradient-accent)';
        
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.style.background = '';
          form.reset();
        }, 2000);
      }, 1000);
    });
  }

  // Method to handle theme switching (for future dark mode implementation)
  toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  // Method to handle scroll-to-top functionality
  setupScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M7 14l3-3 7 7"></path>
        <path d="M7 7l3-3 7 7"></path>
      </svg>
    `;
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
    
    // Show/hide scroll button based on scroll position
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollBtn.classList.add('visible');
      } else {
        scrollBtn.classList.remove('visible');
      }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Method to handle lazy loading of images
  setupLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }

  // Method to handle performance monitoring
  setupPerformanceMonitoring() {
    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    });
    
    // Monitor scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        // Scroll event handling is complete
      }, 16); // ~60fps
    });
  }
}

// Initialize the portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});

// Legacy function for backward compatibility
function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon');
  
  if (menu && icon) {
    menu.classList.toggle('open');
    icon.classList.toggle('open');
  }
}

// Add CSS for scroll-to-top button
const scrollToTopCSS = `
.scroll-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  background: var(--gradient-primary);
  border: none;
  border-radius: 50%;
  color: white;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-lg);
}

.scroll-to-top.visible {
  opacity: 1;
  visibility: visible;
}

.scroll-to-top:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-xl);
}

.scroll-to-top svg {
  width: 20px;
  height: 20px;
}
`;

// Inject scroll-to-top CSS
const style = document.createElement('style');
style.textContent = scrollToTopCSS;
document.head.appendChild(style);