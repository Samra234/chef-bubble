/**
 * Chef Bubble Kitchen - Search Functionality
 */

function setupSearchListeners() {
  const searchInputs = document.querySelectorAll('.recipe-search-input');
  searchInputs.forEach(input => {
    input.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      applyFiltersAndSearch(query);
    });
  });
}

function filterRecipesByQuery(recipes, query) {
  if (!query) return recipes;
  return recipes.filter(r => {
    const titleMatch = r.title && r.title.toLowerCase().includes(query);
    const categoryMatch = r.category && r.category.toLowerCase().includes(query);
    const introMatch = r.shortIntro && r.shortIntro.toLowerCase().includes(query);
    const descMatch = r.longDescription && r.longDescription.toLowerCase().includes(query);
    const ingMatch = r.ingredients && r.ingredients.some(i => i.toLowerCase().includes(query));
    return titleMatch || categoryMatch || introMatch || descMatch || ingMatch;
  });
}
