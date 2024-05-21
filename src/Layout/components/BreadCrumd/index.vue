<script setup lang="ts">
import  useLayOutSettingStore from '@/store/modules/setting/setting.ts'

const layoutSettingStore = useLayOutSettingStore()
const changeIcon = () => {
  layoutSettingStore.changeFoldStatus()
}
</script>

<template>
  <!--   折叠   -->
  <el-icon style="margin-right: 10px" @click="changeIcon">
    <component :is="layoutSettingStore.isFold ? 'Fold' : 'Expand'"></component>
  </el-icon>
  <!--   面包屑   -->
  <el-breadcrumb separator-icon="ArrowRight">
    <el-breadcrumb-item v-for="(item, index) in $route.matched" :key="index" :to="item.path" v-show="item.meta.title">
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss">

</style>
