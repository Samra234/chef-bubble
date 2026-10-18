import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const recipesJsonPath = path.resolve(rootDir, 'data', 'recipes.json');
const sitemapPath = path.resolve(rootDir, 'sitemap.xml');

const recipes = JSON.parse(fs.readFileSync(recipesJsonPath, 'utf-8'));
const today = new Date().toISOString().split('T')[0]; // e.g. 2026-10-18

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Main Pages -->
  <url>
    <loc>https://chefbubble.netlify.app/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://chefbubble.netlify.app/categories.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://chefbubble.netlify.app/about.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://chefbubble.netlify.app/contact.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://chefbubble.netlify.app/privacy-policy.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>https://chefbubble.netlify.app/terms.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>

  <!-- Recipe Pages (${recipes.length} authentic recipes) -->
`;

for (const recipe of recipes) {
  xml += `  <url>
    <loc>https://chefbubble.netlify.app/recipes/${recipe.slug}.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;
}

xml += `</urlset>\n`;

fs.writeFileSync(sitemapPath, xml, 'utf-8');
console.log(`✓ Generated sitemap.xml with ${recipes.length + 6} URLs including lastmod and changefreq!`);
