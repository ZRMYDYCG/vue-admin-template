<script setup lang="ts">
import Logo from './components/logo/index.vue'
import Menu from './components/Menu/index.vue'
import Main from './components/Main/index.vue'
import TabBar from './components/TabBar/index.vue'
import { useRoute } from "vue-router"
import useUserStore from "@/store/modules/user/user.ts"
import  useLayOutSettingStore from '@/store/modules/setting/setting.ts'

const layoutSettingStore = useLayOutSettingStore()

const userStore = useUserStore()
const $route = useRoute()
</script>

<template>
  <div class="layout-container">
    <!--  左侧菜单  -->
    <div class="layout-slider" :class="{fold: layoutSettingStore.isFold ? true : false}">
      <Logo></Logo>
      <!--   展示菜单   -->
      <!--   滚动组件   -->
      <el-scrollbar class="scrollbar">
        <!--    菜单组件    -->
        <el-menu :collapse="layoutSettingStore.isFold" :default-active="$route.path" router background-color="#00152B" text-color="#ffffff">
          <Menu :menuList="userStore.menuRoutes"></Menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <!--  顶部导航  -->
    <div class="layout-header" :class="{fold: layoutSettingStore.isFold ? true : false}">
      <TabBar></TabBar>
    </div>
    <!--  内容展示区域  -->
    <div class="layout-main" :class="{fold: layoutSettingStore.isFold ? true : false}">
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
    transition: all .3s;
    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height - 30px);
      margin-top: 30px;
      .el-menu {
        border-right: none;
      }
    }
    &.fold {
      width: $base-menu-min-width;
    }
  }
  .layout-header {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-header-height;
    transition: all .3s;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout-main {
    position: absolute;
    left: $base-menu-width;
    top: $base-header-height;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-header-height);
    padding: 20px;
    overflow: auto;
    transition: all .3s;

    &.fold {
      width: calc(100% - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>
