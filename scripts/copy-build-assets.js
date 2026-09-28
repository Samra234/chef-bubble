import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyFileSafe(srcFile, destFile) {
  if (fs.existsSync(srcFile)) {
    const dir = path.dirname(destFile);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.copyFileSync(srcFile, destFile);
  }
}

console.log('Ensuring all static directories are synced into dist/ for Netlify build...');

// Copy critical folders
copyDirRecursive(path.join(rootDir, 'css'), path.join(distDir, 'css'));
copyDirRecursive(path.join(rootDir, 'js'), path.join(distDir, 'js'));
copyDirRecursive(path.join(rootDir, 'data'), path.join(distDir, 'data'));
copyDirRecursive(path.join(rootDir, 'assets'), path.join(distDir, 'assets'));
copyDirRecursive(path.join(rootDir, 'recipes'), path.join(distDir, 'recipes'));

// Copy Netlify redirects and config
copyFileSafe(path.join(rootDir, '_redirects'), path.join(distDir, '_redirects'));
copyFileSafe(path.join(rootDir, 'netlify.toml'), path.join(distDir, 'netlify.toml'));
copyFileSafe(path.join(rootDir, 'robots.txt'), path.join(distDir, 'robots.txt'));
copyFileSafe(path.join(rootDir, 'sitemap.xml'), path.join(distDir, 'sitemap.xml'));
copyFileSafe(path.join(rootDir, 'favicon.ico'), path.join(distDir, 'favicon.ico'));

console.log('✓ Successfully populated dist/ directory for Netlify deployment.');
