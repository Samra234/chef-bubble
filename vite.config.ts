import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

function getHtmlInputs() {
  const inputs: Record<string, string> = {
    main: path.resolve(__dirname, 'index.html'),
    about: path.resolve(__dirname, 'about.html'),
    contact: path.resolve(__dirname, 'contact.html'),
    categories: path.resolve(__dirname, 'categories.html'),
    privacyPolicy: path.resolve(__dirname, 'privacy-policy.html'),
    terms: path.resolve(__dirname, 'terms.html'),
    notFound: path.resolve(__dirname, '404.html'),
  };

  const recipesDir = path.resolve(__dirname, 'recipes');
  if (fs.existsSync(recipesDir)) {
    const files = fs.readdirSync(recipesDir);
    for (const file of files) {
      if (file.endsWith('.html')) {
        const name = file.replace('.html', '');
        inputs[`recipe_${name}`] = path.resolve(recipesDir, file);
      }
    }
  }

  return inputs;
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      rollupOptions: {
        input: getHtmlInputs(),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
