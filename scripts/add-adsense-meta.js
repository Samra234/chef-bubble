import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const ADSENSE_TAG = '<meta name="google-adsense-account" content="ca-pub-1410868323930404">';

function processHtmlFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  if (content.includes('ca-pub-1410868323930404') || content.includes('google-adsense-account')) {
    console.log(`Already has AdSense tag: ${path.relative(rootDir, filePath)}`);
    return false;
  }

  // Insert inside <head>
  if (content.includes('<head>')) {
    content = content.replace('<head>', `<head>\n  ${ADSENSE_TAG}`);
  } else if (content.includes('<HEAD>')) {
    content = content.replace('<HEAD>', `<HEAD>\n  ${ADSENSE_TAG}`);
  } else {
    console.warn(`No <head> tag found in: ${filePath}`);
    return false;
  }

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`✓ Added AdSense meta tag to: ${path.relative(rootDir, filePath)}`);
  return true;
}

function scanDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === 'node_modules' || entry.name === '.git') {
        continue;
      }
      scanDir(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      processHtmlFile(fullPath);
    }
  }
}

console.log('Adding Google AdSense meta tag to all HTML files...');
scanDir(rootDir);
console.log('Finished updating HTML files.');
