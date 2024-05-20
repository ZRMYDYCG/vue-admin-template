<script setup lang="ts">
defineProps(['menuList'])
</script>

<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<template>
    <template v-for="(item, index) in menuList"  :key="item.path">
      <!--   没有子路由   -->
      <template v-if="!item.children">
        <el-menu-item v-if="!item.meta.hidden" :index="item.path">
          <template #title>
            {{ item.meta.title }}
          </template>
        </el-menu-item>
      </template>
      <!--   有子路由，个数为一个   -->
      <template v-if="item.children && item.children.length === 1">
        <el-menu-item v-if="!item.children[0].meta.hidden" :index="item.children[0].path">
          <template #title>{{ item.children[0].meta.title }}</template>
        </el-menu-item>
      </template>
      <!--   有子路由且个数大于一个   -->
      <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
        <!--   递归组件     -->
        <Menu :menuList="item.children"></Menu>
      </el-sub-menu>
    </template>
</template>

<style scoped lang="scss">

</style>
