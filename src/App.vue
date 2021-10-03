<template>
  <div id="app">
    <router-view/>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/"></van-tabbar-item>
<!--      <van-tabbar-item icon="search">标签</van-tabbar-item>-->
<!--      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>-->
      <van-tabbar-item icon="setting" to="setting"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less">

</style>
