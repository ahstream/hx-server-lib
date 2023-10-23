import { resolve } from 'path';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    eslint(),
    nodePolyfills({
      // exclude: ['assert', 'buffer', 'child_process', 'cluster', 'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'net', 'os', 'path', 'punycode', 'querystring', 'readline', 'stream', 'string_decoder', 'timers', 'tls', 'tty', 'url', 'util', 'v8', 'vm', 'zlib'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
  ],
  build: {
    ssr: true,
    outDir: './dist',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'main',
      fileName: (format) => `main.${format}.js`,
      formats: ['cjs', 'es'],
    },
  },
});
