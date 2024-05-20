<script setup lang="ts">
import Logo from './components/logo/index.vue'
</script>

<template>
  <div class="layout-container">
    <!--  左侧菜单  -->
    <div class="layout-slider">
      <Logo></Logo>
    </div>
    <!--  顶部导航  -->
    <div class="layout-header"></div>
    <!--  内容展示区域  -->
    <div class="layout-main">
      <p style="height: 120vh; background-color: red;">哈哈哈</p>
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
  }
  .layout-header {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-header-height;
    background-color: cyan;
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
