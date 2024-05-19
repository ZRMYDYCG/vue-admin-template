import { createApp } from 'vue'
import App from '@/App.vue'

import 'virtual:svg-icons-register' // svg 配置
import globalComponent from '@/components/index.ts' // 引入自定义插件对象：注册整个项目的全局组件
import '@/styles/index.scss' // 引入全局样式

const app = createApp(App)

app.use(globalComponent) // 安装自定义插件
app.mount('#app')
