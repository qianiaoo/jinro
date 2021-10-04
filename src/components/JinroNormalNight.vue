<template>
  <div>
    <van-row type="flex" style="padding-top: 20px" align="center" justify="center">
      <van-col ><span  style="font-size: 110%;" >田中が処刑された。</span></van-col>
    </van-row>
    <van-row type="flex" style="padding-top: 30px;padding-bottom: 40px; font-size: 130%" align="center" justify="center">
      <van-col v-show="goPlayer" ><span>{{ goPlayer }}でよろしいですか</span></van-col>
    </van-row>

    <van-button v-show="goPlayer&&!turnOver" type="primary" size="large" style="display: block;margin: 0 auto;
" @click="exile">占い｜噛む｜守る|怪しい</van-button>
  </div>
</template>

<script>
export default {
  name: "JinroNormalNight",

  data() {
    return {
      goPlayer: '',
      turnOver: false

    }
  },
  methods: {
    async exile() {
      if (this.goPlayer) {
        console.log("処刑する！");
        this.turnOver = true;
      }
    },

  },
  created() {
    this.goPlayer = this.toPlayer;
  },
  watch: {
    toPlayer(val) {
      this.goPlayer = val;
    }
  },
  props: ['playerList', 'toPlayer']
}
</script>

<style scoped>

</style>