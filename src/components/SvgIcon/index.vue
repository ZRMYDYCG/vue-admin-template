<template>
  <svg>
    <!--  xlink:href执行用哪一个图标，属性值务必#icon-图标名字  -->
    <!--  use标签fill属性可以设置图标的颜色  -->
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
defineProps({
    // xlink:href属性值前缀
    prefix: {
      type: String,
      default: '#icon-'
    },
    // 提供的图标使用的名字
    name: String,
    // 提供的图标填充的颜色
    color: String,
   // 接受父组件传递过来的宽高
    width: {
      type: String,
      default: '16px'
    },
    height: {
      type: String,
      default: '16px'
    }
})
</script>

<style scoped>

</style>
