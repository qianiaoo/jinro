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

      <van-grid-item v-for="item in playerList" :key='item.id' @click="onClickPlayer(item.id)">
        <van-image :src="item.pic"/>
        {{ item.name }}
      </van-grid-item>
    </van-grid>
    <jinro-normal-waitting v-if="gameStatus===0" :player-list="playerList"></jinro-normal-waitting>

  </div>
</template>

<script>
import {Toast} from "vant";
import JinroNormalWaitting from "@/components/JinroNormalWaitting";

export default {
  name: "JinroNormal",
  components: {JinroNormalWaitting},
  data() {
    return {

      title: "ゲームまち",
      gameStatus: 0,
      playerList: [
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
          "id": "1",
        },
        {
          "pic": "https://img01.yzcdn.cn/vant/apple-3.jpg",
          "name": '田中',
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
      Toast(val)
    },
    checkJob(val) {
      console.log(val);
    },

  },
}
</script>

<style scoped>


</style>
