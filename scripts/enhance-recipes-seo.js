import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const recipesDir = path.resolve(rootDir, 'recipes');
const recipesJsonPath = path.resolve(rootDir, 'data', 'recipes.json');

const recipesData = JSON.parse(fs.readFileSync(recipesJsonPath, 'utf-8'));
const recipeMap = new Map();
for (const r of recipesData) {
  recipeMap.set(r.slug, r);
}

function parseDuration(timeStr) {
  if (!timeStr) return undefined;
  const match = timeStr.match(/(\d+)\s*(min|hr|hour)/i);
  if (!match) return undefined;
  const val = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();
  if (unit.startsWith('hr') || unit.startsWith('hour')) {
    return `PT${val}H`;
  }
  return `PT${val}M`;
}

const files = fs.readdirSync(recipesDir).filter(f => f.endsWith('.html'));
console.log(`Processing ${files.length} recipe HTML files...`);

for (const file of files) {
  const slug = file.replace('.html', '');
  const recipe = recipeMap.get(slug);
  const filePath = path.join(recipesDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');

  if (!recipe) {
    console.warn(`No recipe found for slug: ${slug}`);
    continue;
  }

  // Remove any existing canonical, robots, og, twitter, and ld+json tags to ensure clean injection
  content = content.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, '');
  content = content.replace(/<meta\s+name=["']robots["'][^>]*>\s*/gi, '');
  content = content.replace(/<meta\s+property=["']og:[^"']*["'][^>]*>\s*/gi, '');
  content = content.replace(/<meta\s+name=["']twitter:[^"']*["'][^>]*>\s*/gi, '');
  content = content.replace(/<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>\s*/gi, '');

  const canonicalUrl = `https://chefbubble.netlify.app/recipes/${slug}.html`;
  const recipeTitle = `${recipe.title} Recipe | Chef Bubble Kitchen`;
  const cleanDescription = (recipe.shortIntro || recipe.longDescription || '').replace(/"/g, '&quot;');
  const imageUrl = recipe.image || 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=1200&q=80';

  const prepIso = parseDuration(recipe.prepTime);
  const cookIso = parseDuration(recipe.cookTime);
  const totalIso = parseDuration(recipe.totalTime);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Recipe",
    "name": recipe.title,
    "image": [imageUrl],
    "description": recipe.shortIntro || recipe.longDescription,
    "author": {
      "@type": "Person",
      "name": "Chef Bubble"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Chef Bubble Kitchen",
      "logo": {
        "@type": "ImageObject",
        "url": "https://chefbubble.netlify.app/favicon.ico"
      }
    },
    "datePublished": "2026-01-01",
    "recipeYield": `${recipe.servings || '4'} servings`,
    "recipeCategory": recipe.category || "Main Course",
    "recipeCuisine": "Pakistani",
  };

  if (prepIso) jsonLd.prepTime = prepIso;
  if (cookIso) jsonLd.cookTime = cookIso;
  if (totalIso) jsonLd.totalTime = totalIso;

  if (recipe.nutrition && recipe.nutrition.calories) {
    jsonLd.nutrition = {
      "@type": "NutritionInformation",
      "calories": recipe.nutrition.calories,
      "proteinContent": recipe.nutrition.protein || undefined,
      "carbohydrateContent": recipe.nutrition.carbs || undefined,
      "fatContent": recipe.nutrition.fat || undefined
    };
  }

  if (Array.isArray(recipe.ingredients)) {
    jsonLd.recipeIngredient = recipe.ingredients;
  }

  if (Array.isArray(recipe.instructions)) {
    jsonLd.recipeInstructions = recipe.instructions.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "text": step
    }));
  }

  const seoBlock = `  <link rel="canonical" href="${canonicalUrl}">
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

  <!-- OpenGraph Social Metadata -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="${recipeTitle}">
  <meta property="og:description" content="${cleanDescription}">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:site_name" content="Chef Bubble Kitchen">
  <meta property="og:image" content="${imageUrl}">

  <!-- Twitter Card Metadata -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${recipeTitle}">
  <meta name="twitter:description" content="${cleanDescription}">
  <meta name="twitter:image" content="${imageUrl}">

  <!-- Schema.org Recipe Structured Data for Google Rich Results -->
  <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
  </script>
  <link rel="icon" href="/favicon.ico" type="image/x-icon">
`;

  // Insert right before `<link rel="stylesheet" href="/css/style.css">`
  if (content.includes('<link rel="stylesheet" href="/css/style.css">')) {
    content = content.replace(
      '<link rel="stylesheet" href="/css/style.css">',
      `${seoBlock}  <link rel="stylesheet" href="/css/style.css">`
    );
  } else if (content.includes('</head>')) {
    content = content.replace('</head>', `${seoBlock}</head>`);
  }

  fs.writeFileSync(filePath, content, 'utf-8');
}

console.log('✓ Successfully enhanced SEO and Schema.org for all recipe files!');
