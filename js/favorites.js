/**
 * Chef Bubble Kitchen - Favorites Manager
 */

const FAV_STORAGE_KEY = 'chef_bubble_favorites';

function getFavoriteIds() {
  try {
    const data = localStorage.getItem(FAV_STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function isFavoriteRecipe(id) {
  const favs = getFavoriteIds();
  return favs.includes(id);
}

function toggleFavorite(id, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  let favs = getFavoriteIds();
  if (favs.includes(id)) {
    favs = favs.filter(item => item !== id);
    showToast('Removed from Favorite Recipes');
  } else {
    favs.push(id);
    showToast('Added to Favorite Recipes! ❤️');
  }

  localStorage.setItem(FAV_STORAGE_KEY, JSON.stringify(favs));
  updateFavoriteBadgeCount();
  updateFavoriteButtonsState(id);
  renderFavoriteDrawerList();
}

function updateFavoriteBadgeCount() {
  const favs = getFavoriteIds();
  const badge = document.getElementById('favCountBadge');
  if (badge) {
    badge.textContent = favs.length;
  }
}

function updateFavoriteButtonsState(id) {
  const buttons = document.querySelectorAll(`button[onclick*="'${id}'"]`);
  const isFav = isFavoriteRecipe(id);
  buttons.forEach(btn => {
    if (isFav) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

function renderFavoriteDrawerList() {
  const container = document.getElementById('favDrawerItems');
  if (!container) return;

  const favIds = getFavoriteIds();
  const recipes = getAllRecipesSync();
  const favRecipes = recipes.filter(r => favIds.includes(r.id));

  if (favRecipes.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem; color: var(--text-muted);">
        <p style="font-size: 2.5rem; margin-bottom: 0.5rem;">💔</p>
        <p style="font-weight: 700; margin-bottom: 0.25rem;">No Favorites Saved Yet</p>
        <p style="font-size: 0.85rem;">Click the heart icon on any recipe to bookmark your favorite dishes!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = favRecipes.map(r => `
    <div style="display: flex; gap: 1rem; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border-color);">
      <img src="${r.image}" alt="${r.title}" style="width: 60px; height: 60px; border-radius: 8px; object-fit: cover;">
      <div style="flex: 1;">
        <a href="/recipes/${r.slug}.html" style="font-weight: 700; font-size: 0.95rem; color: var(--text-dark);">${r.title}</a>
        <p style="font-size: 0.8rem; color: var(--text-muted);">${r.category} • ⏱️ ${r.cookTime || r.totalTime}</p>
      </div>
      <button onclick="toggleFavorite('${r.id}', event)" style="background:none; border:none; color:#e53935; cursor:pointer; font-size:1.2rem;">✕</button>
    </div>
  `).join('');
}

function openFavoritesDrawer() {
  const modal = document.getElementById('favDrawerModal');
  if (modal) {
    modal.classList.add('active');
    renderFavoriteDrawerList();
  }
}

function closeFavoritesDrawer() {
  const modal = document.getElementById('favDrawerModal');
  if (modal) {
    modal.classList.remove('active');
  }
}
