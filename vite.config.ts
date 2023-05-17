import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8080,
    hmr: {
      host: "localhost",
      port: 8081
    },
    //https代理
    proxy: {
      '/api': {
        target: "",
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\api/, "")
      }
    },
  },
  resolve:{
   alias:{
    "@":path.resolve(__dirname,"src")
   }   
  }
})
