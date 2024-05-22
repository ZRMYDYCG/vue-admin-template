<script setup lang="ts">
import { onMounted } from "vue"
import useUserStore from "@/store/modules/user/user.ts"
let userStore = useUserStore()

onMounted(() => {
  userStore.userInfo()
})
</script>

<template>
  <div>
    <iframe src="http://gotozrm.top" style="height: 100vh; width: 100%;"></iframe>
<!--    <iframe src="https://github.com/ZRMYDYCG/" style="height: 100vh; width: 100%;"></iframe>-->
  </div>
</template>

<style scoped lang="scss">
</style>
