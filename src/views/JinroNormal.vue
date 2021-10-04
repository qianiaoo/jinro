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
        <van-image :src="item.pic"/>
        {{ item.name }}
      </van-grid-item>
    </van-grid>
    <jinro-normal-waitting v-if="gameStatus===0" :player-list="playerList"></jinro-normal-waitting>
    <jinro-normal-daytime :dead-people="deadPeople" :to-player="toPlayer" :player-list="playerList" v-if="gameStatus%3===1"></jinro-normal-daytime>
    <jinro-normal-night  :player-list="playerList" v-if="gameStatus%3===2"></jinro-normal-night>
  </div>
</template>

<script>
import {Toast} from "vant";
import JinroNormalWaitting from "@/components/JinroNormalWaitting";
import JinroNormalNight from "@/components/JinroNormalNight";
import JinroNormalDaytime from "@/components/JinroNormalDaytime";

export default {
  name: "JinroNormal",
  components: {JinroNormalDaytime, JinroNormalNight, JinroNormalWaitting},
  data() {
    return {
      toPlayer: '',
      deadPeople: [],
      title: "ゲームまち",
      gameStatus: 1,
      playerList: [
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "1",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田2中',
          "id": "2",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "3",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "4",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "5",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "6",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "7",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "9",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "10",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "8",
        },
      ],
    }
  },
  methods: {
    onClickLeft() {
      Toast('返回');
    },
    onClickRight() {
      Toast('按钮');
    },
    onClickPlayer(val) {
      if (this.gameStatus % 3 === 1) {
        // console.log(val);
        this.toPlayer = val;
      } else if (this.gameStatus % 3 === 2) {
        this.toPlayer = val;
      }
      Toast(this.toPlayer);
    },


  },
}
</script>

<style scoped>


</style>
