<script setup lang="ts">
import Logo from './components/logo/index.vue'
import Menu from './components/Menu/index.vue'
import Main from './components/Main/index.vue'
import TabBar from './components/TabBar/index.vue'
import { useRoute } from "vue-router"
import useUserStore from "@/store/modules/user/user.ts"

const userStore = useUserStore()
const $route = useRoute()
</script>

<template>
  <div class="layout-container">
    <!--  左侧菜单  -->
    <div class="layout-slider">
      <Logo></Logo>
      <!--   展示菜单   -->
      <!--   滚动组件   -->
      <el-scrollbar class="scrollbar">
        <!--    菜单组件    -->
        <el-menu :default-active="$route.path" router background-color="#00152B" text-color="#ffffff">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--  顶部导航  -->
    <div class="layout-header">
      <TabBar></TabBar>
    </div>
    <!--  内容展示区域  -->
    <div class="layout-main">
      <Main></Main>
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout-container {
  width: 100%;
  height: 100vh;
  .layout-slider {
    width: $base-menu-width;
    height: 100vh;
    background-color: $base-menu-background;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height - 30px);
      margin-top: 30px;
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout-header {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-header-height;
  }
  .layout-main {
    position: absolute;
    background-color: darkkhaki;
    left: $base-menu-width;
    top: $base-header-height;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-header-height);
    padding: 20px;
    overflow: auto;
  }
}
</style>
