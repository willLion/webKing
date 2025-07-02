import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import postcssNesting from "postcss-nesting";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";



const baseUrl = 'http://localhost:3333' // 后端接口
// https://vite.dev/config/
// @ts-ignore
export default defineConfig({
  plugins: [
    vue(),

    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/auto-import.d.ts",
      //  resolvers: [AntDesignVueResolver()]
    }),
    Components({
      dts: "src/components.d.ts",
      //  resolvers: [AntDesignVueResolver({importStyle: true, resolveIcons: true})]
    }),
  ],
  server: {
    port: 5600,
    host: "0.0.0.0",
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      [process.env.VUE_APP_BASE_API]: {
        target: baseUrl,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_BASE_API]: ''
        }
      },
      // springdoc proxy
      '^/v3/api-docs/(.*)': {
        target: baseUrl,
        changeOrigin: true
      }
    },
    disableHostCheck: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
