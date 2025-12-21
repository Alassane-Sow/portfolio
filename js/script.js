/* ============================================
   SCRIPT.JS - MAIN JAVASCRIPT FILE
   ============================================ */

/* ============================================
   1. DYNAMIC YEAR IN FOOTER
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("year");
  if (yearElement) {
    yearElement.textContent = currentYear;
  }
});

/* ============================================
   2. PROJECTS ARRAY - ALLE PROJECTEN
   ============================================ */
const projects = [
  { id: 1, title: "Python Scripting", link: "python.html" },
  { id: 2, title: "Datacom & Netwerken", link: "datacom.html" },
  { id: 3, title: "Serverbeheer", link: "server.html" },
  { id: 4, title: "Webtechnologie Portfolio", link: "webtch.html" },
  { id: 5, title: "Besturingssystemen", link: "bestering.html" },
  { id: 6, title: "Packet Tracer Netwerk", link: "packettracer.html" }
];

/* ============================================
   3. POPULATE PROJECT DROPDOWN
   ============================================ */
function populateProjectDropdown() {
  const dropdown = document.getElementById("projectDropdown");
  if (dropdown) {
    projects.forEach((project) => {
      const li = document.createElement("li");
      li.innerHTML = `<a class="dropdown-item" href="${project.link}">${project.title}</a>`;
      dropdown.appendChild(li);
    });
  }
}

// Call de functie wanneer de pagina laadt
document.addEventListener('DOMContentLoaded', populateProjectDropdown);

/* ============================================
   4. SMOOTH SCROLL LINKS
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

/* ============================================
   5. ACTIVE NAV LINK ON SCROLL
   ============================================ */
function updateActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', updateActiveNavLink);

/* ============================================
   6. FORM VALIDATION (voor contact.html)
   ============================================ */
function validateForm(formElement) {
  if (!formElement) return true;
  
  const inputs = formElement.querySelectorAll('input, textarea, select');
  let isValid = true;
  
  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.classList.add('is-invalid');
      isValid = false;
    } else {
      input.classList.remove('is-invalid');
    }
  });
  
  return isValid;
}

// Form submission handler
const contactForm = document.querySelector('form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    if (!validateForm(this)) {
      e.preventDefault();
      alert('Please fill in all fields');
    }
  });
}

/* ============================================
   7. LAZY LOAD IMAGES (Performance)
   ============================================ */
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  });

  document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

/* ============================================
   8. MOBILE MENU CLOSE ON LINK CLICK
   ============================================ */
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler.offsetParent !== null) { // only if visible
      navbarCollapse.classList.remove('show');
    }
  });
});

/* ============================================
   9. BACK TO TOP BUTTON (Optional)
   ============================================ */
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '↑';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: none;
  font-size: 24px;
  font-weight: bold;
  z-index: 999;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.4);
`;

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'flex';
    backToTopBtn.style.alignItems = 'center';
    backToTopBtn.style.justifyContent = 'center';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

backToTopBtn.addEventListener('mouseover', () => {
  backToTopBtn.style.transform = 'scale(1.1)';
  backToTopBtn.style.background = '#0052cc';
});

backToTopBtn.addEventListener('mouseout', () => {
  backToTopBtn.style.transform = 'scale(1)';
  backToTopBtn.style.background = '#0066ff';
});

/* ============================================
   10. DARK MODE TOGGLE (Optional)
   ============================================ */
function initDarkMode() {
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  const htmlElement = document.documentElement;
  
  if (darkModeToggle) {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
      htmlElement.setAttribute('data-theme', 'dark');
      darkModeToggle.checked = true;
    }
    
    darkModeToggle.addEventListener('change', () => {
      if (darkModeToggle.checked) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'true');
      } else {
        htmlElement.removeAttribute('data-theme');
        localStorage.setItem('darkMode', 'false');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', initDarkMode);

/* ============================================
   11. CONSOLE LOG - DEBUG INFO
   ============================================ */
console.log('Portfolio website loaded');
console.log('Current Year: ' + new Date().getFullYear());
console.log('Projects loaded: ' + projects.length);

/* ============================================
   12. ERROR HANDLING
   ============================================ */
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

/* ============================================
   TRANSLATION / I18N SYSTEM
   ============================================ */

let currentLanguage = localStorage.getItem('language') || 'en';
let translations = {};

// Load all language files
async function loadLanguages() {
  try {
    const languages = ['nl', 'en', 'fr'];
    
    for (const lang of languages) {
      const response = await fetch(`languages/${lang}.json`);
      translations[lang] = await response.json();
    }
    
    // Set initial language
    setLanguage(currentLanguage);
  } catch (error) {
    console.error('Error loading language files:', error);
  }
}

// Set language and update page
function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('language', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const keys = element.getAttribute('data-i18n').split('.');
    let value = translations[lang];
    
    for (const key of keys) {
      value = value[key];
    }
    
    if (value) {
      element.textContent = value;
    }
  });
  
  // Update language button
  const langCode = lang.toUpperCase();
  document.getElementById('currentLang').textContent = langCode;
  
  // Update HTML lang attribute
  document.documentElement.lang = lang;
  
  console.log(`Language changed to: ${lang}`);
}

// Load translations when page loads
document.addEventListener('DOMContentLoaded', loadLanguages);