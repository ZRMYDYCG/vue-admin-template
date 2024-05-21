<script setup lang="ts">

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!--   渲染layout一级路由组件的子路由   -->
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style scoped lang="scss">
.fade-enter-from {
  opacity: 0;
  transform: scale(0);
}

.fade-enter-active {
  transition: all .3s;
}

.fade-enter-leave {
  opacity: 1;
  transform: scale(1);
}
</style>
