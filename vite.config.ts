import { UserConfig } from 'vite';
import path from 'path';

export default {
  server: {
    host: 'localhost',
    port: 3000,
    watch: {}
  },
  build: {
    outDir: 'dist'
  },
  publicDir: 'static',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src')
    }
  }
} as UserConfig;
