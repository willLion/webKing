import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssNesting from "postcss-nesting";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-import.d.ts",
       resolvers: [AntDesignVueResolver()]
    }),
    Components({
      dts: "src/components.d.ts",
       resolvers: [AntDesignVueResolver({importStyle: true, resolveIcons: true})]
    }),
  ],
  server: {
    port: 5600,
    host: '0.0.0.0',
    proxy: {
      "/api": {
        target: "http://localhost:3333", 
        changeOrigin: true,
        // secure: true, // 是否https接口
        // ws: true, // 是否代理websockets
        // 路径重写 ****
        // 没有写 路径重写之前 的请求: http://localhost:8000/api/admin/logout
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
