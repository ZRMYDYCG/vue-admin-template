<script setup lang="ts">
import useLayOutSettingStore from '@/store/modules/setting/setting.ts'

const layOutSettingStore = useLayOutSettingStore()

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
</script>

<template>
  <el-button plain size="small" icon="Refresh" circle @click="updateRefresh"></el-button>
  <el-button plain size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-button plain size="small" icon="Setting" circle></el-button>
  <img style="width: 30px; height: 30px;margin: 0 10px" src="../../../../public/logo.jpg" alt="">
  <el-dropdown>
        <span>
          一勺
          <el-icon>
            <arrow-down />
          </el-icon>
        </span>
    <template #dropdown>
      <el-dropdown>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown>
    </template>
  </el-dropdown>
</template>

<style scoped lang="scss">

</style>
