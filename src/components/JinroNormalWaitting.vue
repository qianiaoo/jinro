<template>
  <div>
    <van-cell-group>
      <van-cell title="人狼">
        <van-stepper integer v-model="jinroNum" :max="playerList.length/2" min="1"></van-stepper>

      </van-cell>
    </van-cell-group>
    <div class="padding20">
      <van-checkbox-group v-model="jobBox" direction="horizontal" @change="checkJob"
                          :max="playerList.length - jinroNum">
        <van-checkbox :name="job.text" :key="job.name" style="margin: 5px" v-for="job in jobBoxData">{{ job.text }}
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div style="position: relative; bottom: 0;left: 0">
      <van-row>
        <van-col span="8" offset="4">
          <van-button size="large" type="info" v-if="readyBtnType==='primary'" @click="onClickFirstBtn">優先</van-button>
        </van-col>
        <van-col span="8">
          <van-button size="large"  :type="readyBtnType" @click="readyGame">{{readyBtnText}}</van-button>
        </van-col>
      </van-row>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
          show-toolbar
          confirm-button-text="確認"
          cancel-button-text="取り消し"
          :columns="jobBox.concat(['人狼'])"
          @confirm="onConfirmFirstJob"
          @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "JinroNormalWaitting",
  data (){
    return {
      showPicker:false,

      jinroNum: 1,
      readyBtnText: '準備',
      firstJob: '',
      readyBtnType: 'primary',
      jobBox: [],
      jobBoxData: [{
        'name': "oracle",
        "text": "占い師"
      },
        {
          'name': "knight",
          "text": "騎士"
        },
        {
          "name": "crazyBoy",
          "text": "狂人"
        }, {
          "name": 'witch',
          "text": "魔女"
        }
      ],
    }
  },
  methods :{
    onConfirmFirstJob(val){
      this.showPicker = false;
      this.firstJob = val;
      Toast("第一志望は" + val + "にしました");
    },
    async readyGame() {
      // console.log()
      if (this.readyBtnType === 'danger') {
        this.readyBtnType = 'primary'
        this.readyBtnText = '準備';
      } else {
        this.readyBtnType = 'danger';
        this.readyBtnText = '準備完了'
        // const res = await gameReady();
        // console.log(res);
      }
    },
    onClickFirstBtn() {
      if (this.readyBtnType === 'primary') {
        this.showPicker = true;
      }
    },
    checkJob(val) {
      console.log(val);
    },
  },
  props:["playerList"]
}
</script>

<style scoped>
.padding20{
  padding-top: 50px;
  padding-left: 30px;
  padding-bottom: 50px;
}
</style>
