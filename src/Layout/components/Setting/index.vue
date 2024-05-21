<script setup lang="ts">

</script>

<template>
  <el-button plain size="small" icon="Refresh" circle></el-button>
  <el-button plain size="small" icon="FullScreen" circle></el-button>
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
