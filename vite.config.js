import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),//set @
    }
  },
  base: './', //set pack
  server: {
    port: 4000,
    open: true,
    cors: true,
    // proxy 解决响应EMQX服务器的跨域问题
    proxy:{ 
      '/mqtt': {
        target: 'http://101.34.225.32:18083/api/v4',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/mqtt/, '')
      },
      '/qwf': {
        target: 'https://qcyc5b.api.cloudendpoint.cn',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/qwf/, '')
      }
    }
  }
})
