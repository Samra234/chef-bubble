/**
 * Chef Bubble Kitchen - Main App Controller
 */

document.addEventListener('DOMContentLoaded', async () => {
  // Load recipes data
  await loadRecipesData();

  // Initialize navbar toggles
  setupNavbar();

  // Initialize page components
  if (document.getElementById('featuredRecipesGrid')) {
    renderFeaturedSection();
  }

  if (document.getElementById('allRecipesGrid')) {
    setupFilterControls();
    setupSearchListeners();
    applyFiltersAndSearch();
  }

  // Update footer year
  const yearElem = document.getElementById('currentYear');
  if (yearElem) {
    yearElem.textContent = new Date().getFullYear();
  }

  // Update favorite badge count on startup
  updateFavoriteBadgeCount();

  // Handle newsletter form submission
  setupNewsletterForm();

  // Setup Share buttons on recipe pages if present
  setupRecipePageHandlers();
});

function setupNavbar() {
  const toggleBtn = document.getElementById('navToggleBtn');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
        navMenu.classList.remove('active');
      }
    });
  }
}

function renderFeaturedSection() {
  const container = document.getElementById('featuredRecipesGrid');
  if (!container) return;

  const featured = getFeaturedRecipes();
  container.innerHTML = featured.slice(0, 4).map(r => renderRecipeCard(r)).join('');
}

function setupNewsletterForm() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (input && input.value) {
      showToast(`Thank you for subscribing to Chef Bubble Kitchen! 📧`);
      input.value = '';
    }
  });
}

function showToast(message) {
  let toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toastContainer';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>👨‍🍳</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transition = 'opacity 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

function setupRecipePageHandlers() {
  // Checkbox toggle state line-through for ingredients
  const ingredientCheckboxes = document.querySelectorAll('.ingredient-item input[type="checkbox"]');
  ingredientCheckboxes.forEach(cb => {
    cb.addEventListener('change', (e) => {
      const parent = e.target.closest('.ingredient-item');
      if (parent) {
        if (e.target.checked) {
          parent.classList.add('checked');
        } else {
          parent.classList.remove('checked');
        }
      }
    });
  });

  // FAQ Accordions
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(q => {
    q.addEventListener('click', () => {
      const parent = q.closest('.faq-item');
      if (parent) {
        parent.classList.toggle('active');
      }
    });
  });
}

function shareRecipeLink(title, url) {
  if (navigator.share) {
    navigator.share({
      title: title || 'Chef Bubble Kitchen Recipe',
      url: url || window.location.href
    }).catch(() => {});
  } else {
    copyToClipboard(url || window.location.href);
  }
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text || window.location.href).then(() => {
    showToast('Recipe link copied to clipboard! 📋');
  }).catch(() => {
    showToast('Link copied!');
  });
}
