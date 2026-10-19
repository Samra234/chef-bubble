import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const recipesJsonPath = path.resolve(rootDir, 'data', 'recipes.json');
const rootAtomPath = path.resolve(rootDir, 'atom.xml');
const publicAtomPath = path.resolve(rootDir, 'public', 'atom.xml');
const distAtomPath = path.resolve(rootDir, 'dist', 'atom.xml');

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

const recipes = JSON.parse(fs.readFileSync(recipesJsonPath, 'utf-8'));
const now = new Date();
const updatedIso = now.toISOString();

let xml = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Chef Bubble Kitchen - Delicious Recipes &amp; Cooking Guides</title>
  <subtitle>Authentic Pakistani, Desi, Fast Food, Breakfast, and Dessert recipes with step-by-step instructions from Chef Bubble.</subtitle>
  <link rel="alternate" type="text/html" href="https://chefbubble.netlify.app/"/>
  <link rel="self" type="application/atom+xml" href="https://chefbubble.netlify.app/atom.xml"/>
  <id>https://chefbubble.netlify.app/atom.xml</id>
  <updated>${updatedIso}</updated>
  <rights>Copyright (c) 2026 Chef Bubble Kitchen. All rights reserved.</rights>
  <icon>https://chefbubble.netlify.app/favicon.ico</icon>
  <logo>https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&amp;fit=crop&amp;w=800&amp;q=80</logo>
  <author>
    <name>Chef Bubble</name>
    <uri>https://chefbubble.netlify.app/about.html</uri>
    <email>samramuhammadsiddique831@gmail.com</email>
  </author>
`;

for (const recipe of recipes) {
  const url = `https://chefbubble.netlify.app/recipes/${recipe.slug}.html`;
  const cleanTitle = escapeXml(recipe.title);
  const cleanCategory = escapeXml(recipe.category || 'Recipes');
  const cleanSummary = escapeXml(recipe.shortIntro || recipe.longDescription || '');

  const ingredientsListHtml = (recipe.ingredients || [])
    .map(ing => `<li>${escapeXml(ing)}</li>`)
    .join('');

  const instructionsListHtml = (recipe.instructions || [])
    .map(step => `<li>${escapeXml(step)}</li>`)
    .join('');

  const contentHtml = `
    <div>
      ${recipe.image ? `<img src="${recipe.image}" alt="${cleanTitle}" style="max-width:100%;height:auto;border-radius:8px;margin-bottom:16px;"/>` : ''}
      <p><strong>Category:</strong> ${cleanCategory} | <strong>Prep:</strong> ${escapeXml(recipe.prepTime || 'N/A')} | <strong>Cook:</strong> ${escapeXml(recipe.cookTime || 'N/A')} | <strong>Difficulty:</strong> ${escapeXml(recipe.difficulty || 'Easy')}</p>
      <p>${escapeXml(recipe.longDescription || recipe.shortIntro || '')}</p>
      <h3>Ingredients:</h3>
      <ul>${ingredientsListHtml}</ul>
      <h3>Instructions:</h3>
      <ol>${instructionsListHtml}</ol>
      ${recipe.chefTips ? `<p><strong>Chef's Tip:</strong> ${escapeXml(recipe.chefTips)}</p>` : ''}
      <p><a href="${url}">View full step-by-step recipe with nutrition facts on Chef Bubble Kitchen &rarr;</a></p>
    </div>
  `.trim();

  xml += `
  <entry>
    <title>${cleanTitle}</title>
    <link rel="alternate" type="text/html" href="${url}"/>
    <id>${url}</id>
    <updated>${updatedIso}</updated>
    <published>${updatedIso}</published>
    <summary type="text">${cleanSummary}</summary>
    <category term="${cleanCategory}" label="${cleanCategory}"/>
    <author>
      <name>Chef Bubble</name>
    </author>
    <content type="html"><![CDATA[${contentHtml}]]></content>
  </entry>
`;
}

xml += `</feed>\n`;

fs.writeFileSync(rootAtomPath, xml, 'utf-8');
fs.writeFileSync(publicAtomPath, xml, 'utf-8');
if (fs.existsSync(path.dirname(distAtomPath))) {
  fs.writeFileSync(distAtomPath, xml, 'utf-8');
}

console.log(`✓ Generated atom.xml with ${recipes.length} recipe entries at root, public/, and dist/!`);
