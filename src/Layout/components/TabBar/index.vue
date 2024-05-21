<script setup lang="ts">
import BreadCrumb from '../BreadCrumd/index.vue'
import Setting from '../Setting/index.vue'
</script>

<template>
  <div class="tabBar">
    <div class="tabBar_left">
      <BreadCrumb></BreadCrumb>
    </div>
    <div class="tabBar_right">
      <Setting></Setting>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabBar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  .tabBar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
  .tabBar_right {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
