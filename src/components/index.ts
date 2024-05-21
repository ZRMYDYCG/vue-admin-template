/*
 * 注册整个项目的全局组件
*/
import SvgIcon from './SvgIcon/index.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import { App } from 'vue'
const allGlobalComponent: any = { SvgIcon }
console.log(allGlobalComponent)
export default {
    // 默认会注入 app
    install(app: App) {
        // 注册全部的全局组件
        Object.keys(allGlobalComponent).forEach(key => {
            // 注册为全局组件
            console.log(key)
            app.component(key, allGlobalComponent[key])
        })
        // 将 element-plus 提供的图标全部注册为全局组件
        for(const [key, component] of Object.entries(ElementPlusIconsVue)) {
            app.component(key, component)
        }
    }
}
