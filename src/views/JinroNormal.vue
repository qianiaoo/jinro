<template>
  <div style="height: 100%">
    <van-nav-bar
        :title="title"
        left-text=""
        left-arrow
        @click-left="onClickLeft"

        @click-right="onClickRight"
    />
    <van-grid :border="false" square>

      <van-grid-item v-for="item in playerList" :key='item.id' @click="onClickPlayer(item.name)">
          <van-image :src="baseImgPath +item.img_url" :round="item.isReady !== 'True'"  />
          {{ item.name }}

      </van-grid-item>
    </van-grid>
    <jinro-normal-waitting v-show="gameStatus===0" @game-start="gameStart" :game-setting="gameSetting" :player-list="playerList"></jinro-normal-waitting>
    <jinro-normal-daytime :dead-people="deadPeople" :to-player="toPlayer" :player-list="playerList" v-if="gameStatus%3===1"></jinro-normal-daytime>
    <jinro-normal-night  :player-list="playerList" v-if="gameStatus%3===2"></jinro-normal-night>
  </div>
</template>

<script>
import {Toast} from "vant";
import Cookies from "js-cookie";
import JinroNormalWaitting from "@/components/JinroNormalWaitting";
import JinroNormalNight from "@/components/JinroNormalNight";
import JinroNormalDaytime from "@/components/JinroNormalDaytime";
import {hall, kickPlayer} from "@/utils/api";
import {baseImgPath} from "@/utils/api";
export default {
  name: "JinroNormal",
  components: {JinroNormalDaytime, JinroNormalNight, JinroNormalWaitting},
  data() {
    return {
      baseImgPath,
      toPlayer: '',
      deadPeople: [],
      title: "ゲームまち",
      gameStatus: 0,
      gameId: '',
      jobBox: [],
      gameSetting: {},
      playerList: [],
    }
  },
  methods: {
    gameStart() {
      console.log("gameStart!!!")
    },
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    async onClickPlayer(val) {
      if (this.gameStatus % 3 === 1) {
        // console.log(val);
        this.toPlayer = val;
      } else if (this.gameStatus % 3 === 2) {
        this.toPlayer = val;
      } else if (this.gameStatus % 3 === 0 && this.$store.state.isKickMode) {
        this.toPlayer = val;
        await kickPlayer({kick_name: val});
      }
      Toast(this.toPlayer);
    },

    async flushHall() {
      const data = {
        gameId: this.gameId
      };
      const res = await hall(data);
      if (res.status === 200) {
        this.playerList = res.data.list
        if (res.data.setting) {
          this.gameSetting = JSON.parse(res.data.setting);
        }
        this.gameStatus = res.data.gameStatus;
        // console.log(res.data.setting, "setting")
      }
      console.log(this.playerList);
      console.log(this.gameSetting['WF']);
      console.log(this.gameStatus, 'gamestatus');
    },


  },
  mounted() {
    const that = this;
    this.flushHall();
    this.timer = setInterval(function(){
      //执行内容
      console.log("定时器启动")
      that.flushHall();
    }, 3000);
  },
  created() {
    this.gameId = this.$route.query.gameId
    this.gameStatus = parseInt(this.$route.query.gameStatus);
    Cookies.set('gameId', this.gameId);
    console.log("jinro created:gameId"+this.gameId)
    console.log("jinro created:gameStatus" + parseInt(this.gameStatus));
  },
  // watch: {
  //   $route: {
  //     handler: function (val) {
  //       console.log(val)
  //       this.$data.gameId = val.query.gameId
  //       this.$data.gameStatus = val.gameStatus
  //     }
  //   }
  // }
}
</script>

<style scoped>


</style>
