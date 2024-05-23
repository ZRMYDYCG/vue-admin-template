import { createApp } from 'vue'
import App from '@/App.vue'
import 'virtual:svg-icons-register' // svg 配置
import globalComponent from '@/components/index.ts' // 引入自定义插件对象：注册整个项目的全局组件
import '@/styles/index.scss' // 引入全局样式
import router from './router/index.ts' // 路由
import ElementPlus from 'element-plus' // 完整引入
import 'element-plus/dist/index.css'
import pinia from './store/index.ts'
import './permisstion.ts' // 路由鉴权
// import ikun from 'ikun-ui'
// import 'ikui/lib/index.css'
//引入依赖和语言
import 'highlight.js/styles/stackoverflow-light.css'
import hljs from "highlight.js/lib/core";
import hljsVuePlugin from "@highlightjs/vue-plugin";
//import "highlight.js/lib/common"; //单一加载
//按需引入语言
import javascript from "highlight.js/lib/languages/javascript";
import java from "highlight.js/lib/languages/java";
import sql from "highlight.js/lib/languages/sql";
import xml from "highlight.js/lib/languages/xml";
import html from "highlight.js/lib/languages/vbscript-html";
import json from "highlight.js/lib/languages/json";
import yaml from "highlight.js/lib/languages/json";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("java", java);
hljs.registerLanguage("yaml", yaml);
hljs.registerLanguage("json", json);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", html);

const app = createApp(App)
app.use(pinia)
app.use(hljsVuePlugin)
app.use(globalComponent) // 安装自定义插件
app.use(router)
// app.use(ikun)
app.use(ElementPlus)
app.mount('#app')
