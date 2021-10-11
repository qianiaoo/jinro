<template>
  <div class="setting">
    <span style="font-size: 250%; ">設定</span><br/>
    <van-form >
      <van-cell-group inset>
        <van-field v-model="name"  label="名前" placeholder="名前でlog in"/>

        <div style="margin-top: 50px; margin-bottom: 50px" v-if="icon_url">
          <van-image
              width="10rem"
              height="10rem"
              fit="cover"
              :src="icon_url"
          />

        </div>
        <div v-if="icon_url">
          <van-uploader :before-read="beforeRead" :after-read="afterRead">
            <van-button  type="primary">アイコン設定</van-button>
          </van-uploader>
        </div>


      </van-cell-group>
      <div style="margin: 16px;">
        <van-button @click="onSubmit" round block type="info">LOG IN</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import {Toast} from "vant";
import {baseImgPath, login, uploadIcon} from "@/utils/api";
import Cookies from 'js-cookie'

export default {
  name: "Setting",
  created() {
    this.name = Cookies.get('name');
    this.icon_url = Cookies.get('icon_url');
    console.log("setting created!")

  },
  updated() {
    // console.log("updated!")
  },
  beforeMount() {
    // console.log("beforeMount");
  },
  mounted() {
    // console.log("mounted");
  },
  beforeUpdate() {
    // console.log("beforeUpdate");
  },


  data() {
    return {
      name: "",
      showPicker: false,
      job: "",
      icon_url: '',
      jobs: ["人狼", '占い師', '騎士', '狂人']

    }
  },
  methods: {

    async onSubmit() {
      const data = {
        'name': this.name,
      }
      const res = await login(data);
      if (res.status === 200) {
        this.icon_url = baseImgPath + res.data.icon_url;
        // this.$store.commit("set_name", this.name)
        // this.$store.commit("set_icon_url", this.icon_url)
        Cookies.set('id', res.data.id)
        Cookies.set('name', this.name);
        Cookies.set('icon_url', this.icon_url);
        Toast("LOG IN 成功")

      }
      console.log(res);
    },
    beforeRead(file) {
      // console.log(file.file)
      if (file.size > 1024 * 1024 * 2) {
        Toast("もっと小さいサイズでお願いします。")
        return false;
      }

      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        return true;
      }

      Toast('画像をお願いします。');
      return false;
    },
    async afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
      let res = await uploadIcon(file.file);
      console.log(res);
    },
  }
}
</script>

<style scoped>
.setting {
  text-align: center;
  margin-top: 50px
}

.setting > * {
  padding: 50px;

}

</style>
