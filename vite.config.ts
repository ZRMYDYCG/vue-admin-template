import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // 引入 svg 图标所需要的插件
import vue from '@vitejs/plugin-vue'
import path from 'path'
import {viteMockServe} from "vite-plugin-mock";

// https://vitejs.dev/config/
// command 区分项目所处的环境
export default defineConfig(({ command }) => {
  return {
    plugins: [vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')], // 图标的存放目录
        symbolId: 'icon-[dir]-[name]'
      }),
      viteMockServe({
        enable: command === 'serve'  // 保证项目开发阶段可以使用 mock 接口
      })
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
      }
    },
    // scss 全局变量的一个配置
    css: {
      preprocessorOptions: {
        scss: {
          javascriptEnabled: true,
          additionalData: '@import "./src/styles/variable/index.scss";'
        }
      }
    }
  }
})
