<script setup lang="ts">
import { reactive, ref } from "vue"
import useUserStore from "@/store/modules/user/user.ts";
import { useRouter } from "vue-router"
import { getTime } from '@/utils/getTime/index.ts'
import { ElNotification } from "element-plus";

const userStore = useUserStore()
let router = useRouter()

let loginForm = reactive({
  username: 'admin',
  password: '123456789'
})

let loading = ref(false)
const login = async () => {
  loading.value = true
  try {
    await userStore.userLogin(loginForm)
    await router.push('/')
    loading.value = false
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: 'HI ' + getTime()
    })
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: '登录失败'
    })
  }
}
</script>

<template>
  <div class="login-container">
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="loginForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="login" :loading="loading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login-container {
  width: 100%;
  height: 100vh;
}
</style>
