import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDocs from './plugin/md-docs';
import svgLoader from 'vite-svg-loader';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    open: true,
    host: '0.0.0.0',
    port: 2233,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './'),
      'arco-next': path.resolve(__dirname, '../ui'),
    },
  },
  plugins: [
    vueDocs(),
    vue({
      include: [/\.vue$/, /\.md$/],
      exclude: [/\/CHANGELOG\.md$/, /\/CHANGELOG.zh-CN\.md$/],
    }),
    vueJsx(),
    svgLoader(),
  ],
});
