<script setup lang="ts">
import { watch,ref,nextTick } from "vue"
import useLayOutSettingStore from '@/store/modules/setting/setting.ts'

const layOutSettingStore = useLayOutSettingStore()

let flag = ref(true)
watch(() => layOutSettingStore.refresh, () => {
  console.log(layOutSettingStore)
  console.log(layOutSettingStore.refresh)
  // 销毁
  flag.value = false
  // 销毁过后重新创建路由组件 实现刷新功能
  nextTick(() => {
    flag.value = true
  })
})

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <!--   渲染layout一级路由组件的子路由   -->
      <component :is="Component" v-if="flag"></component>
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
