<template>
  <div>
    <van-cell-group>
      <van-cell title="人狼">
        <van-stepper integer v-model="jinroNum" :max="playerList.length/2" min="1"></van-stepper>

      </van-cell>
    </van-cell-group>
    <div class="padding20" v-if="!canUpdateSetting">
      <van-tag type="primary" size="large" :key="key" v-for="key in Object.keys(gameSetting)" >{{getJobTextByName(key)}}  {{gameSetting[key]}}</van-tag>

    </div>
    <div class="padding20" v-if="canUpdateSetting">
      <van-checkbox-group v-model="jobBox" direction="horizontal" :disabled="!canUpdateSetting"
                          :max="playerList.length - jinroNum">
        <van-checkbox :name="job.name" :key="job.name" style="margin: 5px" v-for="job in jobBoxData">{{ job.text }}
        </van-checkbox>
      </van-checkbox-group>
    </div>
    <div style="position: relative; bottom: 0;left: 0">
      <van-row>
        <van-col span="4" offset="2">
          <van-button size="large" :icon="settingBtnType" type="warning" @click="changeUpdateMode"></van-button>
        </van-col>
        <van-col span="6">
          <van-button size="large" type="info" v-if="readyBtnType==='primary'" @click="onClickFirstBtn">優先</van-button>
        </van-col>
        <van-col span="8">
          <van-button size="large"  :type="readyBtnType" @click="readyGame">{{readyBtnText}}</van-button>
        </van-col>
        <van-col span="2">
          <van-button size="large" icon="close" type="danger" @click="changeKickMode"></van-button>
        </van-col>

        <van-col span="12" style="padding-top: 50px" offset="6"><span style="font-size: 120%" v-if="this.$store.state.isKickMode">今Iconをクリックしたら相手を無くす</span> </van-col>
      </van-row>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
          show-toolbar
          confirm-button-text="確認"
          cancel-button-text="取り消し"
          :columns="firstJobList"
          @confirm="onConfirmFirstJob"
          @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import {Dialog, Toast} from "vant";
import {jobMap, readyGame, updateGameSetting} from "@/utils/api";
import Cookies from "js-cookie";

export default {
  name: "JinroNormalWaitting",
  data() {
    return {
      canUpdateSetting: false,
      settingBtnType: 'edit',
      showPicker: false,
      jobMap,
      gameId: '',
      jinroNum: 1,
      readyBtnText: '準備',
      firstJob: 'No',
      readyBtnType: 'primary',
      jobBox: [],

      jobBoxData: [{
        'name': "OR",
        "text": "占い師"
      },
        {
          'name': "KN",
          "text": "騎士"
        },
        {
          "name": "CB",
          "text": "狂人"
        }, {
          "name": 'WH',
          "text": "魔女"
        }
      ],
    }
  },
  computed: {
    firstJobList: function () {
      const keys = Object.keys(this.gameSetting);
      const res = []
      for (let key of keys) {
        res.push(this.getJobTextByName(key));
      }
      return res;
    }
  },
  created() {
    this.gameId = Cookies.get('gameId');
    console.log("cccc:");
  },
  methods: {
    gameWillStart() {
      console.log("gameWillStart");
      this.$emit("game-start")
    },
    getJobTextByName(name) {
      // console.log(name, "name")
      const keys = jobMap.keys();
      for (let key of keys) {
        let value = jobMap.get(key);
        if (value === name) {
          return key;
        }
        // console.log(key);  // map.get(key)可得value值。
      }
      // this.jobMap.forEach(function(value, key) {
      //   if (value === name) {
      //     console.log(key, value);
      //     console.log(key)
      //     return key;
      //   }
      // })
      return name;
    },
    onConfirmFirstJob(val) {
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
        this.readyBtnText = '準備完了';
        this.canUpdateSetting = false;
      }
      const res = await readyGame({
        gameId: this.gameId,
        firstJob: jobMap.get(this.firstJob),
        isReady: this.readyBtnType === 'danger'

      });
      if (res.status === 200) {
        const gameStatus = res.data.gameStatus;
        if (gameStatus === 1) {
          this.gameWillStart();
        }
      }
      console.log(res);
    },
    changeKickMode() {

      Dialog.confirm({
        message: "!KICK MODE!",
      })
          .then(() => {
            this.$store.commit("set_isKickMode", true);
          })
          .catch(() => {
            this.$store.commit("set_isKickMode", false);
          });
    },
    async changeUpdateMode() {
      if (this.readyBtnType === 'primary') {
        if (this.canUpdateSetting) {
          const setting = {
            "WF": this.jinroNum,
            "HM": this.playerList.length - this.jinroNum - this.jobBox.length,
          };
          this.jobBox.forEach(i => {
            setting[i.toString()] = 1;
          });
          const data = {
            gameId: this.gameId,
            setting: setting,
          };
          const res = await updateGameSetting(data);

          if (res.status === 200) {
            Toast("ゲーム設定を保存しました。");
          }
          console.log("check", this.jobBox);
          this.settingBtnType = 'passed';
        }
        this.canUpdateSetting = !this.canUpdateSetting;
      }
    },
    onClickFirstBtn() {
      if (this.readyBtnType === 'primary') {
        this.showPicker = true;
      }
    },
    async checkJob(val) {
      const setting = {
        "WF": this.jinroNum,
        "HM": this.playerList.length - this.jinroNum - val.length,
      }
      val.forEach(i => {
        setting[i.toString()] = 1;
      })
      const data = {
        gameId: this.gameId,
        setting: setting,
      }
      const res = await updateGameSetting(data);

      if (res.status === 200) {
        Toast("ゲーム設定を保存しました。");
      }
      console.log("check", val);
    },
  },
  props: ["playerList", 'gameSetting'],
  updated() {
    console.log("update")
  },
  beforeUpdate() {
    // var jb_arr = Object.keys(this.gameSetting);
    // var njb = [];
    // for (let i = 0; i < jb_arr.length; i++) {
    //   if (jb_arr[i] === 'WF' || jb_arr[i] === 'HM') {
    //     console.log("Skip")
    //   } else {
    //     njb.push(jb_arr[i]);
    //     if (this.jobBox.indexOf(jb_arr[i]) !== -1) {
    //       this.jobBox.push(jb_arr[i]);
    //     }
    //   }
    // }
    // this.jobBox = [];

    // console.log("njb", njb)
    console.log("before: update", this.jobBox);
  },
  mounted() {
    console.log("mounted");
  },


};
</script>

<style scoped>
.padding20{
  padding-top: 50px;
  padding-left: 30px;
  padding-bottom: 50px;
}
</style>
