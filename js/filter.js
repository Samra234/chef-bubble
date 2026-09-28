/**
 * Chef Bubble Kitchen - Filter & Sort Logic
 */

let currentSelectedCategory = 'All';
let currentSelectedDifficulty = 'All';
let currentSortOption = 'default';

function setupFilterControls() {
  const categorySelect = document.getElementById('categoryFilterSelect');
  const diffSelect = document.getElementById('difficultyFilterSelect');
  const sortSelect = document.getElementById('sortFilterSelect');
  const resetBtn = document.getElementById('resetFiltersBtn');

  if (categorySelect) {
    categorySelect.addEventListener('change', (e) => {
      currentSelectedCategory = e.target.value;
      applyFiltersAndSearch();
    });
  }

  if (diffSelect) {
    diffSelect.addEventListener('change', (e) => {
      currentSelectedDifficulty = e.target.value;
      applyFiltersAndSearch();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSortOption = e.target.value;
      applyFiltersAndSearch();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      currentSelectedCategory = 'All';
      currentSelectedDifficulty = 'All';
      currentSortOption = 'default';

      if (categorySelect) categorySelect.value = 'All';
      if (diffSelect) diffSelect.value = 'All';
      if (sortSelect) sortSelect.value = 'default';

      const searchInputs = document.querySelectorAll('.recipe-search-input');
      searchInputs.forEach(i => i.value = '');

      applyFiltersAndSearch();
    });
  }
}

function selectCategory(categoryName) {
  currentSelectedCategory = categoryName;
  const categorySelect = document.getElementById('categoryFilterSelect');
  if (categorySelect) {
    categorySelect.value = categoryName;
  }
  applyFiltersAndSearch();

  const allSection = document.getElementById('all-recipes');
  if (allSection) {
    allSection.scrollIntoView({ behavior: 'smooth' });
  }
}

function applyFiltersAndSearch(queryOverride = null) {
  const recipesContainer = document.getElementById('allRecipesGrid');
  if (!recipesContainer) return;

  const searchInput = document.querySelector('.recipe-search-input');
  const query = queryOverride !== null ? queryOverride : (searchInput ? searchInput.value.toLowerCase().trim() : '');

  let filtered = getAllRecipesSync();

  // 1. Query search
  filtered = filterRecipesByQuery(filtered, query);

  // 2. Category Filter
  if (currentSelectedCategory && currentSelectedCategory !== 'All') {
    filtered = filtered.filter(r => r.category === currentSelectedCategory);
  }

  // 3. Difficulty Filter
  if (currentSelectedDifficulty && currentSelectedDifficulty !== 'All') {
    filtered = filtered.filter(r => r.difficulty === currentSelectedDifficulty);
  }

  // 4. Sorting
  if (currentSortOption === 'title-asc') {
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  } else if (currentSortOption === 'time-asc') {
    filtered.sort((a, b) => parseInt(a.totalTime || a.cookTime) - parseInt(b.totalTime || b.cookTime));
  } else if (currentSortOption === 'difficulty-asc') {
    const diffMap = { 'Easy': 1, 'Medium': 2, 'Hard': 3 };
    filtered.sort((a, b) => (diffMap[a.difficulty] || 1) - (diffMap[b.difficulty] || 1));
  }

  // Count indicator
  const countElem = document.getElementById('recipeResultCount');
  if (countElem) {
    countElem.textContent = `${filtered.length} Recipe${filtered.length === 1 ? '' : 's'} Found`;
  }

  // Render cards
  if (filtered.length === 0) {
    recipesContainer.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; background: white; border-radius: 16px; border: 1px solid var(--border-color);">
        <p style="font-size: 3rem; margin-bottom: 0.5rem;">🍳</p>
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No Recipes Found</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">We couldn't find any recipes matching your current filters or search terms.</p>
        <button onclick="document.getElementById('resetFiltersBtn').click()" class="btn-primary">Reset Filters & Show All</button>
      </div>
    `;
  } else {
    recipesContainer.innerHTML = filtered.map(r => renderRecipeCard(r)).join('');
  }
}
