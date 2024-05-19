<script setup lang="ts">
import axios from 'axios'
import { onMounted } from "vue";

onMounted(() => {
  // 登录接口
  axios({
    url: '/api/user/login',
    method: 'POST',
    data: {
      username: 'admin',
      password: '123456789'
    }
  }).then(res => {
    console.log(res)
  })
})
</script>

<template>

</template>

<style scoped lang="scss">

</style>
