<template>
  <div class="setting">
    <span style="font-size: 250%; ">設定</span><br/>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field v-model="name" label="名前" placeholder="名前の設定"/>
        <van-field
            readonly
            clickable
            name="picker"
            :value="job"
            label="優先"
            placeholder="優先したい職位"
            @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
              show-toolbar
              :columns="jobs"
              @confirm="onConfirm"
              @cancel="showPicker = false"
          />
        </van-popup>
      </van-cell-group>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      name: "",
      showPicker: false,
      job: "",
      jobs: ["人狼", '占い師', '騎士', '狂人']

    }
  },
  methods: {
    onConfirm(value) {
      this.job = value;
      this.showPicker = false;
    },
    onSubmit(form) {
      console.log(form)
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
