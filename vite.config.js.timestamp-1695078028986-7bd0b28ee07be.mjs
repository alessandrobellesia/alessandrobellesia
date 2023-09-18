// vite.config.js
import { defineConfig } from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/vite@4.4.9_sass@1.67.0/node_modules/vite/dist/node/index.js";
import path from "path";
import Vue from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/@vitejs+plugin-vue@4.3.4_vite@4.4.9_vue@3.3.4/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import ESLint from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@8.49.0_vite@4.4.9/node_modules/vite-plugin-eslint/dist/index.mjs";
import Stylelint from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/vite-plugin-stylelint@5.1.1_postcss@8.4.30_rollup@2.79.1_stylelint@15.10.3_vite@4.4.9/node_modules/vite-plugin-stylelint/dist/index.mjs";
import Components from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/unplugin-vue-components@0.25.2_rollup@2.79.1_vue@3.3.4/node_modules/unplugin-vue-components/dist/vite.mjs";
import AutoImport from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/unplugin-auto-import@0.16.6_@vueuse+core@10.4.1_rollup@2.79.1/node_modules/unplugin-auto-import/dist/vite.js";
import VueI18n from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/@intlify+unplugin-vue-i18n@1.2.0_rollup@2.79.1_vue-i18n@9.4.1/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/vite-plugin-pwa@0.16.5_vite@4.4.9_workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import { VolverResolver } from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/@volverjs+ui-vue@0.0.10-beta.4_@volverjs+style@0.1.12-beta.8/node_modules/@volverjs/ui-vue/dist/resolvers/unplugin.es.js";
import {
  VueRouterAutoImports,
  getPascalCaseRouteName
} from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/unplugin-vue-router@0.6.4_rollup@2.79.1_vue-router@4.2.4_vue@3.3.4/node_modules/unplugin-vue-router/dist/index.mjs";
import VueRouter from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/unplugin-vue-router@0.6.4_rollup@2.79.1_vue-router@4.2.4_vue@3.3.4/node_modules/unplugin-vue-router/dist/vite.mjs";
import generateSitemap from "file:///Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia/node_modules/.pnpm/vite-ssg-sitemap@0.5.1/node_modules/vite-ssg-sitemap/dist/index.js";
var __vite_injected_original_dirname = "/Users/alessandro.bellesia/www/alessandrobellesia/alessandrobellesia";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    // https://github.com/vitejs/vite-plugin-vue
    Vue({
      include: [/\.vue$/]
    }),
    // https://github.com/gxmari007/vite-plugin-eslint
    ESLint({
      exclude: [
        "**/node_modules/**",
        "**/@volverjs/ui-vue/**",
        "**/volver/ui-vue/**"
      ]
    }),
    // https://github.com/ModyQyW/vite-plugin-stylelint
    Stylelint(),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      getRouteName: (routeNode) => getPascalCaseRouteName(routeNode)
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue"],
      // allow auto import and register components
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "src/components.d.ts",
      exclude: [
        /[\\/]ui-vue[\\/]/,
        /[\\/]\.git[\\/]/,
        /[\\/]\.nuxt[\\/]/
      ],
      resolvers: [
        VolverResolver({
          importStyle: "scss",
          directives: true
        })
      ]
    }),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        VueRouterAutoImports,
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        "pinia"
      ],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/constants"],
      vueTemplate: true,
      eslintrc: {
        enabled: true
      }
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Volver Startup Template",
        short_name: "Scania",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    })
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    onFinished() {
      generateSitemap({
        hostname: "https://alessandrobellesia.github.io",
        outDir: "dist"
      });
    }
  },
  ssr: {
    noExternal: ["@volverjs/ui-vue"]
  },
  css: {
    preprocessorOptions: {
      scss: { additionalData: `@use "./src/assets/scss/settings" as *;` }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWxlc3NhbmRyby5iZWxsZXNpYS93d3cvYWxlc3NhbmRyb2JlbGxlc2lhL2FsZXNzYW5kcm9iZWxsZXNpYVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2FsZXNzYW5kcm8uYmVsbGVzaWEvd3d3L2FsZXNzYW5kcm9iZWxsZXNpYS9hbGVzc2FuZHJvYmVsbGVzaWEvdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2FsZXNzYW5kcm8uYmVsbGVzaWEvd3d3L2FsZXNzYW5kcm9iZWxsZXNpYS9hbGVzc2FuZHJvYmVsbGVzaWEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IEVTTGludCBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnXG5pbXBvcnQgU3R5bGVsaW50IGZyb20gJ3ZpdGUtcGx1Z2luLXN0eWxlbGludCdcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IFZ1ZUkxOG4gZnJvbSAnQGludGxpZnkvdW5wbHVnaW4tdnVlLWkxOG4vdml0ZSdcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXG5pbXBvcnQgeyBWb2x2ZXJSZXNvbHZlciB9IGZyb20gJ0B2b2x2ZXJqcy91aS12dWUvcmVzb2x2ZXJzL3VucGx1Z2luJ1xuaW1wb3J0IHtcblx0VnVlUm91dGVyQXV0b0ltcG9ydHMsXG5cdGdldFBhc2NhbENhc2VSb3V0ZU5hbWUsXG59IGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXInXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCBnZW5lcmF0ZVNpdGVtYXAgZnJvbSAndml0ZS1zc2ctc2l0ZW1hcCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcblx0cmVzb2x2ZToge1xuXHRcdGFsaWFzOiB7XG5cdFx0XHQnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG5cdFx0fSxcblx0fSxcblxuXHRwbHVnaW5zOiBbXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL3ZpdGVqcy92aXRlLXBsdWdpbi12dWVcblx0XHRWdWUoe1xuXHRcdFx0aW5jbHVkZTogWy9cXC52dWUkL10sXG5cdFx0fSksXG5cblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZ3htYXJpMDA3L3ZpdGUtcGx1Z2luLWVzbGludFxuXHRcdEVTTGludCh7XG5cdFx0XHRleGNsdWRlOiBbXG5cdFx0XHRcdCcqKi9ub2RlX21vZHVsZXMvKionLFxuXHRcdFx0XHQnKiovQHZvbHZlcmpzL3VpLXZ1ZS8qKicsXG5cdFx0XHRcdCcqKi92b2x2ZXIvdWktdnVlLyoqJyxcblx0XHRcdF0sXG5cdFx0fSksXG5cblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vTW9keVF5Vy92aXRlLXBsdWdpbi1zdHlsZWxpbnRcblx0XHRTdHlsZWxpbnQoKSxcblxuXHRcdC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N2YS91bnBsdWdpbi12dWUtcm91dGVyXG5cdFx0VnVlUm91dGVyKHtcblx0XHRcdGdldFJvdXRlTmFtZTogKHJvdXRlTm9kZSkgPT4gZ2V0UGFzY2FsQ2FzZVJvdXRlTmFtZShyb3V0ZU5vZGUpLFxuXHRcdH0pLFxuXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG5cdFx0Q29tcG9uZW50cyh7XG5cdFx0XHRleHRlbnNpb25zOiBbJ3Z1ZSddLFxuXHRcdFx0Ly8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHNcblx0XHRcdGluY2x1ZGU6IFsvXFwudnVlJC8sIC9cXC52dWVcXD92dWUvXSxcblx0XHRcdGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxuXHRcdFx0ZXhjbHVkZTogW1xuXHRcdFx0XHQvW1xcXFwvXXVpLXZ1ZVtcXFxcL10vLFxuXHRcdFx0XHQvW1xcXFwvXVxcLmdpdFtcXFxcL10vLFxuXHRcdFx0XHQvW1xcXFwvXVxcLm51eHRbXFxcXC9dLyxcblx0XHRcdF0sXG5cdFx0XHRyZXNvbHZlcnM6IFtcblx0XHRcdFx0Vm9sdmVyUmVzb2x2ZXIoe1xuXHRcdFx0XHRcdGltcG9ydFN0eWxlOiAnc2NzcycsXG5cdFx0XHRcdFx0ZGlyZWN0aXZlczogdHJ1ZSxcblx0XHRcdFx0fSksXG5cdFx0XHRdLFxuXHRcdH0pLFxuXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG5cdFx0QXV0b0ltcG9ydCh7XG5cdFx0XHRpbXBvcnRzOiBbXG5cdFx0XHRcdCd2dWUnLFxuXHRcdFx0XHRWdWVSb3V0ZXJBdXRvSW1wb3J0cyxcblx0XHRcdFx0J3Z1ZS1pMThuJyxcblx0XHRcdFx0J0B2dWV1c2UvaGVhZCcsXG5cdFx0XHRcdCdAdnVldXNlL2NvcmUnLFxuXHRcdFx0XHQncGluaWEnLFxuXHRcdFx0XSxcblx0XHRcdGR0czogJ3NyYy9hdXRvLWltcG9ydHMuZC50cycsXG5cdFx0XHRkaXJzOiBbJ3NyYy9jb21wb3NhYmxlcycsICdzcmMvY29uc3RhbnRzJ10sXG5cdFx0XHR2dWVUZW1wbGF0ZTogdHJ1ZSxcblx0XHRcdGVzbGludHJjOiB7XG5cdFx0XHRcdGVuYWJsZWQ6IHRydWUsXG5cdFx0XHR9LFxuXHRcdH0pLFxuXG5cdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2ludGxpZnkvYnVuZGxlLXRvb2xzL3RyZWUvbWFpbi9wYWNrYWdlcy92aXRlLXBsdWdpbi12dWUtaTE4blxuXHRcdFZ1ZUkxOG4oe1xuXHRcdFx0cnVudGltZU9ubHk6IHRydWUsXG5cdFx0XHRjb21wb3NpdGlvbk9ubHk6IHRydWUsXG5cdFx0XHRpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xvY2FsZXMvKionKV0sXG5cdFx0fSksXG5cblx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG5cdFx0Vml0ZVBXQSh7XG5cdFx0XHRyZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcblx0XHRcdGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXG5cdFx0XHRtYW5pZmVzdDoge1xuXHRcdFx0XHRuYW1lOiAnVm9sdmVyIFN0YXJ0dXAgVGVtcGxhdGUnLFxuXHRcdFx0XHRzaG9ydF9uYW1lOiAnU2NhbmlhJyxcblx0XHRcdFx0dGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcblx0XHRcdFx0aWNvbnM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcblx0XHRcdFx0XHRcdHNpemVzOiAnMTkyeDE5MicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UvcG5nJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuXHRcdFx0XHRcdFx0c2l6ZXM6ICc1MTJ4NTEyJyxcblx0XHRcdFx0XHRcdHR5cGU6ICdpbWFnZS9wbmcnLFxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0c3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG5cdFx0XHRcdFx0XHRzaXplczogJzUxMng1MTInLFxuXHRcdFx0XHRcdFx0dHlwZTogJ2ltYWdlL3BuZycsXG5cdFx0XHRcdFx0XHRwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHR9KSxcblx0XSxcblxuXHQvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1zc2dcblx0c3NnT3B0aW9uczoge1xuXHRcdHNjcmlwdDogJ2FzeW5jJyxcblx0XHRmb3JtYXR0aW5nOiAnbWluaWZ5Jyxcblx0XHRvbkZpbmlzaGVkKCkge1xuXHRcdFx0Z2VuZXJhdGVTaXRlbWFwKHtcblx0XHRcdFx0aG9zdG5hbWU6ICdodHRwczovL2FsZXNzYW5kcm9iZWxsZXNpYS5naXRodWIuaW8nLFxuXHRcdFx0XHRvdXREaXI6ICdkaXN0Jyxcblx0XHRcdH0pXG5cdFx0fSxcblx0fSxcblxuXHRzc3I6IHtcblx0XHRub0V4dGVybmFsOiBbJ0B2b2x2ZXJqcy91aS12dWUnXSxcblx0fSxcblxuXHRjc3M6IHtcblx0XHRwcmVwcm9jZXNzb3JPcHRpb25zOiB7XG5cdFx0XHRzY3NzOiB7IGFkZGl0aW9uYWxEYXRhOiBgQHVzZSBcIi4vc3JjL2Fzc2V0cy9zY3NzL3NldHRpbmdzXCIgYXMgKjtgIH0sXG5cdFx0fSxcblx0fSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQThYLFNBQVMsb0JBQW9CO0FBQzNaLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZUFBZTtBQUN0QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGFBQWE7QUFDcEIsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsc0JBQXNCO0FBQy9CO0FBQUEsRUFDQztBQUFBLEVBQ0E7QUFBQSxPQUNNO0FBQ1AsT0FBTyxlQUFlO0FBQ3RCLE9BQU8scUJBQXFCO0FBZjVCLElBQU0sbUNBQW1DO0FBaUJ6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTO0FBQUEsSUFDUixPQUFPO0FBQUEsTUFDTixNQUFN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
