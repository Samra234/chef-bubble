/**
 * Chef Bubble Kitchen - Recipes Data Manager
 */

let allRecipes = [];

// Fallback embedded recipes array in case fetch fails
const embeddedRecipesFallback = [
  {
    "id": "oven-baked-bbq-chicken",
    "slug": "oven-baked-bbq-chicken",
    "title": "Oven-Baked BBQ Chicken",
    "category": "Chicken Recipes",
    "prepTime": "15 mins",
    "cookTime": "45 mins",
    "totalTime": "60 mins",
    "servings": "4",
    "difficulty": "Easy",
    "featured": true,
    "image": "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80",
    "shortIntro": "Tender, juicy chicken thighs and drumsticks glazed with a smoky, sweet homemade BBQ sauce baked to golden perfection.",
    "longDescription": "Chef Bubble's Oven-Baked BBQ Chicken brings the irresistible smoky aroma of outdoor grilling straight to your kitchen oven..."
  }
];

async function loadRecipesData() {
  try {
    const response = await fetch('/data/recipes.json');
    if (response.ok) {
      allRecipes = await response.json();
    } else {
      console.warn('Failed to load recipes.json, using fallback');
      allRecipes = embeddedRecipesFallback;
    }
  } catch (err) {
    console.error('Error fetching recipes.json:', err);
    allRecipes = embeddedRecipesFallback;
  }
  return allRecipes;
}

function getAllRecipesSync() {
  return allRecipes;
}

function getRecipeBySlug(slug) {
  return allRecipes.find(r => r.slug === slug || r.id === slug);
}

function getFeaturedRecipes() {
  return allRecipes.filter(r => r.featured === true);
}

function renderRecipeCard(recipe) {
  const isFav = isFavoriteRecipe(recipe.id);
  const diffClass = recipe.difficulty ? `diff-${recipe.difficulty.toLowerCase()}` : 'diff-easy';
  const recipeUrl = `/recipes/${recipe.slug}.html`;

  return `
    <article class="recipe-card" data-id="${recipe.id}" data-category="${recipe.category}" data-difficulty="${recipe.difficulty}">
      <div class="card-image-wrap">
        <a href="${recipeUrl}">
          <img src="${recipe.image}" alt="${recipe.title}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80';">
        </a>
        <span class="card-category-badge">${recipe.category}</span>
        <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="toggleFavorite('${recipe.id}', event)" aria-label="Save to favorites">
          ♥
        </button>
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="meta-item">⏱️ ${recipe.cookTime || recipe.totalTime}</span>
          <span class="meta-item">👥 ${recipe.servings || '4'} servings</span>
        </div>
        <h3 class="card-title">
          <a href="${recipeUrl}">${recipe.title}</a>
        </h3>
        <p class="card-intro">${recipe.shortIntro || ''}</p>
        <div class="card-footer">
          <span class="badge-difficulty ${diffClass}">${recipe.difficulty || 'Easy'}</span>
          <a href="${recipeUrl}" class="btn-view-recipe">
            View Full Recipe →
          </a>
        </div>
      </div>
    </article>
  `;
}
