import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
});

import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});