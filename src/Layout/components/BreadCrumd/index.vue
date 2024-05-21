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
    <el-breadcrumb-item>权限管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss">

</style>
