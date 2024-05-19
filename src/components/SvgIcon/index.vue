<template>
  <svg :style="styleObject">
    <use :xlink:href="prefix + name" :fill="color"></use>
  </svg>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  prefix: {
    type: String,
    default: '#icon-'
  },
  name: String,
  color: String,
  width: {
    type: String,
    default: '16px'
  },
  height: {
    type: String,
    default: '16px'
  }
})

const styleObject = {
  width: props.width,
  height: props.height
}
</script>

<style scoped>

</style>
