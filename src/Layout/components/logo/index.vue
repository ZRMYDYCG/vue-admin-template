<script setup lang="ts">
import setting from '../../../../setting.ts'
import  useLayOutSettingStore from '@/store/modules/setting/setting.ts'

const layoutSettingStore = useLayOutSettingStore()
</script>

<template>
  <div class="logo" v-if="setting.logoHidden">
    <img :src="setting.logo" alt="">
    <p v-if="!layoutSettingStore.isFold">{{ setting.title }}</p>
  </div>
</template>

<style scoped lang="scss">
.logo {
  width: 100%;
  height: $base-menu-logo-height;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  p {
    margin-left: 10px;
  }
  img {
    width: 40px;
    height: 40px;
    border-radius: 5px;
  }
}
</style>
