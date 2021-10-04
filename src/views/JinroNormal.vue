<template>
  <div >
    <van-nav-bar
        :title="title"
        left-text=""
        left-arrow
        @click-left="onClickLeft"

        @click-right="onClickRight"
    />
    <van-grid :border="false" square>

    <van-grid-item v-for="item in playerList"  :key='item.id' @click="onClickPlayer(item.id)">
      <van-image :src="item.pic" />
      {{item.name}}
    </van-grid-item>
    </van-grid>
    <van-cell-group>
      <van-cell title="人狼" >
        <van-stepper integer v-model="jinroNum" :max="playerList.length/2" min="1" ></van-stepper>
      </van-cell>

    </van-cell-group>
    <van-checkbox-group v-model="jobBox" direction="horizontal" style="" @change="checkJob" :max="playerList.length - jinroNum">
      <van-checkbox :name="job.name" :key="job.name" style="margin: 5px" v-for="job in jobBoxData">{{job.text}}</van-checkbox>
    </van-checkbox-group>
    <van-row>
      <van-col span="8" offset="4"><van-button type="info">優先</van-button></van-col>
      <van-col span="8"> <van-button :type="readyBtnType" @click="readyGame">準備</van-button></van-col>
    </van-row>

  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "JinroNormal",
  data() {
    return {
      title: "ゲームまち",
      jinroNum: 1,
      readyBtnType: 'primary',
      jobBox: [],
      jobBoxData: [{
        'name':"oracle",
        "text":"占い師"
      },
        {
          'name':"knight",
          "text":"騎士"
        },
        {
          "name": "crazyBoy",
          "text": "狂人"
        },{
        "name": 'witch',
          "text": "魔女"
        }
      ],
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
    readyGame() {
      // console.log()
      if (this.readyBtnType === 'danger') {
        this.readyBtnType = 'primary'
      } else {
        this.readyBtnType='danger';
      }
    },
  },
}
</script>

<style scoped>

</style>
