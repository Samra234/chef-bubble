import fs from 'fs';
import path from 'path';

const recipesPath = path.resolve('data/recipes.json');
const recipesDir = path.resolve('recipes');

if (!fs.existsSync(recipesDir)) {
  fs.mkdirSync(recipesDir, { recursive: true });
}

const recipes = JSON.parse(fs.readFileSync(recipesPath, 'utf8'));

recipes.forEach(r => {
  const filePath = path.join(recipesDir, `${r.slug}.html`);

  const ingredientsHTML = (r.ingredients || []).map((ing, idx) => `
    <li class="ingredient-item">
      <input type="checkbox" id="ing-${idx}">
      <label for="ing-${idx}">${ing}</label>
    </li>
  `).join('');

  const stepsHTML = (r.instructions || []).map((step, idx) => `
    <div class="step-card">
      <div class="step-num">${idx + 1}</div>
      <div class="step-text">${step}</div>
    </div>
  `).join('');

  const faqsHTML = (r.faqs || []).map(faq => `
    <div class="faq-item">
      <div class="faq-question">
        <span>❓ ${faq.question}</span>
        <span>▼</span>
      </div>
      <div class="faq-answer">
        ${faq.answer}
      </div>
    </div>
  `).join('');

  // Related recipes
  const relatedSlugs = r.related || [];
  const relatedRecipes = recipes.filter(item => relatedSlugs.includes(item.slug));
  const relatedHTML = relatedRecipes.map(rel => `
    <div class="recipe-card">
      <div class="card-image-wrap">
        <a href="/recipes/${rel.slug}.html">
          <img src="${rel.image}" alt="${rel.title}" loading="lazy">
        </a>
        <span class="card-category-badge">${rel.category}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">
          <a href="/recipes/${rel.slug}.html">${rel.title}</a>
        </h3>
        <p class="card-intro">${rel.shortIntro}</p>
        <a href="/recipes/${rel.slug}.html" class="btn-view-recipe">View Recipe →</a>
      </div>
    </div>
  `).join('');

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${r.title} Recipe | Chef Bubble Kitchen</title>
  <meta name="description" content="${r.shortIntro}">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/responsive.css">
  <link rel="stylesheet" href="/css/recipe.css">
  <link rel="stylesheet" href="/css/animations.css">
</head>
<body>

  <!-- Navigation -->
  <header class="navbar">
    <div class="container navbar-inner">
      <a href="/" class="brand-logo">
        <div class="brand-icon">🍳</div>
        <span>Chef Bubble Kitchen</span>
      </a>

      <nav>
        <ul class="nav-menu" id="navMenu">
          <li><a href="/" class="nav-link">Home</a></li>
          <li><a href="/#all-recipes" class="nav-link">Recipes</a></li>
          <li><a href="/categories.html" class="nav-link">Categories</a></li>
          <li><a href="/about.html" class="nav-link">About</a></li>
          <li><a href="/contact.html" class="nav-link">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-actions">
        <button class="btn-favorites" onclick="openFavoritesDrawer()">
          <span>❤️</span>
          <span>Favorites</span>
          <span class="fav-badge" id="favCountBadge">0</span>
        </button>
        <button class="nav-toggle" id="navToggleBtn">☰</button>
      </div>
    </div>
  </header>

  <!-- Recipe Main Container -->
  <main class="recipe-header-section">
    <div class="container">

      <!-- Breadcrumbs -->
      <nav class="recipe-breadcrumb">
        <a href="/">Home</a> <span>/</span>
        <a href="/categories.html">${r.category}</a> <span>/</span>
        <span style="color: var(--text-dark); font-weight: 600;">${r.title}</span>
      </nav>

      <!-- Recipe Hero Box -->
      <article class="recipe-hero-card">
        <!-- Recipe Title -->
        <h1 class="recipe-main-title">${r.title}</h1>

        <!-- Beautiful Recipe Image -->
        <div class="recipe-featured-img-wrap">
          <img src="${r.image}" alt="${r.title}">
        </div>

        <!-- Long SEO-Friendly Introduction -->
        <p class="recipe-lead-intro">
          ${r.longDescription}
        </p>

        <!-- Recipe Overview Bar -->
        <div class="recipe-meta-grid">
          <div class="meta-box-item">
            <span class="meta-box-label">Prep Time</span>
            <span class="meta-box-value">⏱️ ${r.prepTime || '15 mins'}</span>
          </div>
          <div class="meta-box-item">
            <span class="meta-box-label">Cooking Time</span>
            <span class="meta-box-value">🔥 ${r.cookTime || '30 mins'}</span>
          </div>
          <div class="meta-box-item">
            <span class="meta-box-label">Total Time</span>
            <span class="meta-box-value">⏳ ${r.totalTime || '45 mins'}</span>
          </div>
          <div class="meta-box-item">
            <span class="meta-box-label">Servings</span>
            <span class="meta-box-value">👥 ${r.servings || '4'} Persons</span>
          </div>
          <div class="meta-box-item">
            <span class="meta-box-label">Difficulty</span>
            <span class="meta-box-value">📊 ${r.difficulty || 'Easy'}</span>
          </div>
        </div>
      </article>

      <!-- Two Column Grid for Ingredients & Instructions -->
      <div class="recipe-content-grid">
        <!-- Ingredients Section -->
        <section class="recipe-ingredients-box">
          <h2 class="box-title-icon">
            <span>🥗</span> Ingredients
          </h2>
          <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem;">Check items off as you prepare your kitchen station:</p>
          <ul class="ingredient-list">
            ${ingredientsHTML}
          </ul>
        </section>

        <!-- Step-by-Step Instructions -->
        <section class="recipe-steps-box">
          <h2 class="box-title-icon">
            <span>👨‍🍳</span> Step-by-Step Instructions
          </h2>
          <div class="steps-list">
            ${stepsHTML}
          </div>
        </section>
      </div>

      <!-- Chef Bubble's Tips -->
      <section class="chef-tips-box">
        <h3 class="chef-tips-title">💡 Chef Bubble's Secret Tip</h3>
        <p class="chef-tips-desc">${r.chefTips || 'Always use fresh spices and let the dish rest for 5 minutes before serving to settle the flavors.'}</p>
      </section>

      <!-- Serving & Storage -->
      <div class="serving-storage-grid">
        <div class="info-card-block">
          <h4>🍽️ Serving Suggestions</h4>
          <p>${r.servingSuggestions || 'Serve warm with fresh garlic naan, salad, and mint raita.'}</p>
        </div>

        <div class="info-card-block">
          <h4>📦 Storage Instructions</h4>
          <p>${r.storageInstructions || 'Keep refrigerated in an airtight container for up to 3 days.'}</p>
        </div>
      </div>

      <!-- Nutrition Information -->
      <section class="nutrition-section">
        <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">🥗 Nutrition Information (Per Serving)</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted);">Estimated average nutritional metrics for balanced portion size:</p>
        <div class="nutrition-grid">
          <div class="nutrition-item">
            <span class="nutrition-label">Calories</span>
            <div class="nutrition-val">${r.nutrition ? r.nutrition.calories : '350 kcal'}</div>
          </div>
          <div class="nutrition-item">
            <span class="nutrition-label">Protein</span>
            <div class="nutrition-val">${r.nutrition ? r.nutrition.protein : '25g'}</div>
          </div>
          <div class="nutrition-item">
            <span class="nutrition-label">Carbs</span>
            <div class="nutrition-val">${r.nutrition ? r.nutrition.carbs : '30g'}</div>
          </div>
          <div class="nutrition-item">
            <span class="nutrition-label">Fat</span>
            <div class="nutrition-val">${r.nutrition ? r.nutrition.fat : '15g'}</div>
          </div>
          <div class="nutrition-item">
            <span class="nutrition-label">Fiber</span>
            <div class="nutrition-val">${r.nutrition ? r.nutrition.fiber : '3g'}</div>
          </div>
        </div>
      </section>

      <!-- Frequently Asked Questions -->
      <section class="faq-section">
        <h3 style="font-size: 1.35rem; margin-bottom: 0.5rem;">❓ Frequently Asked Questions</h3>
        <div class="faq-list">
          ${faqsHTML}
        </div>
      </section>

      <!-- Share Recipe -->
      <section class="share-bar-box">
        <div>
          <h4 style="font-size: 1.1rem; margin-bottom: 0.25rem;">Loved this recipe?</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted);">Share it with your family and fellow food lovers!</p>
        </div>

        <div class="share-buttons-group">
          <button class="btn-share btn-share-whatsapp" onclick="window.open('https://api.whatsapp.com/send?text=' + encodeURIComponent('${r.title}: ' + window.location.href))">
            WhatsApp
          </button>
          <button class="btn-share btn-share-facebook" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href))">
            Facebook
          </button>
          <button class="btn-share btn-share-twitter" onclick="window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent('${r.title} recipe by Chef Bubble Kitchen') + '&url=' + encodeURIComponent(window.location.href))">
            X / Twitter
          </button>
          <button class="btn-share btn-share-copy" onclick="copyToClipboard(window.location.href)">
            Copy Link 📋
          </button>
        </div>
      </section>

      <!-- Related Recipes -->
      ${relatedHTML ? `
      <section style="margin-top: 4rem;">
        <h2 style="font-size: 1.85rem; margin-bottom: 1.5rem; text-align: center;">🍲 Related Recipes You'll Love</h2>
        <div class="recipes-grid">
          ${relatedHTML}
        </div>
      </section>
      ` : ''}

    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-bottom" style="border:none; padding:0;">
        <p>© 2026 Chef Bubble Kitchen. All rights reserved.</p>
        <p><a href="/" style="color:var(--secondary);">Back to Homepage</a></p>
      </div>
    </div>
  </footer>

  <!-- Favorites Modal Drawer -->
  <div class="modal-overlay" id="favDrawerModal">
    <div class="modal-drawer">
      <div class="drawer-header">
        <h3>❤️ My Favorite Recipes</h3>
        <button class="btn-close-drawer" onclick="closeFavoritesDrawer()">✕</button>
      </div>
      <div class="drawer-body" id="favDrawerItems"></div>
    </div>
  </div>

  <script src="/js/recipes.js"></script>
  <script src="/js/favorites.js"></script>
  <script src="/js/main.js"></script>
</body>
</html>`;

  fs.writeFileSync(filePath, htmlContent, 'utf8');
});

console.log(`Successfully generated ${recipes.length} HTML recipe pages!`);
