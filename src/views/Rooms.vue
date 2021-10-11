<template>
  <div>
    <van-nav-bar
        :title="title"
        left-text=""
        left-arrow
            @click-left="onClickLeft"

            @click-right="onClickRight"
    />
    <van-form >
      <van-cell-group inset>
        <van-field v-model="roomId" label="番号" placeholder="部屋番号を入力する"/>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="info">参加</van-button>
      </div>
    </van-form>
    <div style="margin-top: 200px">
      <van-button square block color="#F4A7B9" @click="joinSakura" >さくら</van-button>

    </div>


  </div>
</template>

<script>
import {joinSakura} from "@/utils/api";
import Cookies from "js-cookie";
import {Toast} from "vant";
export default {
  name: "Rooms",
  data() {
    return {
      title: '部屋',
      roomId: '',
    }
  },
  methods: {
    onClickLeft() {

    },
    onClickRight() {

    },
    async joinSakura() {
      if (Cookies.get('id')) {
        const res = await joinSakura();
        if (res.status === 200) {
          this.$router.push({path: '/JinroNormal', query: {gameId: res.data.gameId, gameStatus: res.data.gameStatus}})
          console.log(res.data.gameStatus)
          console.log(res.data.gameId)
        }
      } else {
        Toast("先に名前を設定してください。")
      }


    },

  }

}
</script>

<style scoped>

</style>
