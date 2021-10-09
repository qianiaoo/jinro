<template>
  <div class="home">
    <van-grid :border="false" :column-num="3">
      <van-grid-item icon="photo-o" to="rooms" text="人狼" />
      <van-grid-item icon="photo-o" text="ゴリラ人狼" />

    </van-grid>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      value: "",
    }
  }
}
</script>
