<template>
  <div>
    <van-row type="flex" style="padding-top: 20px" align="center" justify="center">
      <van-col ><span v-show="deadPeopleChild.length !== 0" style="font-size: 110%;" >昨日 {{outDeadList}}が死んだ</span></van-col>
    </van-row>
    <van-row type="flex" style="padding-top: 30px;padding-bottom: 40px; font-size: 130%" align="center" justify="center">
      <van-col v-show="exilePlayer" ><span>{{exilePlayer}}を処刑しますか</span></van-col>
    </van-row>

    <van-button v-show="exilePlayer&&!turnOver" type="danger" size="large" style="display: block;margin: 0 auto; " @click="exile">処刑！</van-button>
  </div>
</template>

<script>
export default {
  name: "JinroNormalDaytime",

  data() {
    return {
      exilePlayer: '',
      turnOver: false,
      deadPeopleChild: [],

    }
  },
  methods: {
    outDeadList() {
      let res = '';
      this.deadPeopleChild.forEach(i=>{
        res += i;
      })
      return res
    },
    async exile() {
      if (this.exilePlayer) {
        console.log("処刑する！");
        this.turnOver = true;
      }
    },

  },
  created() {
    this.exilePlayer = this.toPlayer;
    this.deadPeopleChild = this.deadPeople;
  },
  watch: {
    toPlayer(val) {
      this.exilePlayer = val;
    },
    deadPeople(val) {
      this.deadPeopleChild = val;
    }
  },
  props: ['playerList', 'toPlayer', 'deadPeople']
}
</script>

<style scoped>
.box {
  padding-top: 20px;
  width: 400px;
  text-align:center;
}
.mid-box{
  padding-top: 20px;
  padding-bottom: 30px;
  width: 400px;
  text-align:center;
}
</style>
