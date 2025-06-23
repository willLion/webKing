import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5122,
    host: '0.0.0.0',
    open: true
  },
  devServer: {
    overlay: {
      warnings: false, //不显示警告
      errors: false //不显示错误
    }
  },
  lintOnSave: false,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
