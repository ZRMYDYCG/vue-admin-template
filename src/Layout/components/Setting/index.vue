<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import useLayOutSettingStore from '@/store/modules/setting/setting.ts'
import useUserStore from '@/store/modules/user/user.ts'

const layOutSettingStore = useLayOutSettingStore()
const userStore = useUserStore()
const $router = useRouter()
const $route = useRoute()

const updateRefresh = () => {
  layOutSettingStore.refresh = !layOutSettingStore.refresh
}

const fullScreen = () => {
  // DOM对象的一个属性用来判断是否是全屏的模式
  let full = document.fullscreenElement
  if(!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const logoOut = () => {
  // 1. 需要向服务器发请求[目的：本次的身份校验token是无效的]
  // 2. 关于用户相关的数据进行清空
  // 3. 跳转到登录页面
  userStore.userLogout()
  // 4. 回到 login
  $router.push({ path:'/login', query: { redirect: $route.path } })
}
</script>

<template>
  <el-button plain size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
  <el-button plain size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button plain size="small" icon="Setting" circle></el-button>
  <img style="width: 30px; height: 30px;margin: 0 10px" :src="userStore.avatar" alt="">
  <el-dropdown>
        <span>
          {{ userStore.username }}
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
    <template #dropdown>
      <el-dropdown>
        <el-dropdown-item @click="logoOut">退出登录</el-dropdown-item>
      </el-dropdown>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">

</style>
