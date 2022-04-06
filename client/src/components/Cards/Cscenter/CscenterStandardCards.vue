<template>
  <v-row justify="center">

    <v-expansion-panels
        accordion
    >
      <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
      >
        <v-expansion-panel-header>제목 넣기 </v-expansion-panel-header>
        <v-expansion-panel-content class="p-5">
          <div class="text-left bg-blueGray-200 rounded py-5 px-4">
            내용 넣기
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  props: {
    CSCENTER_KEY: {
        default: 0
      },
    CSCENTER_TITLE: {
        type: String,
        default:"검수기준 안내 드립니다"
      },
    CSCENTER_CONTENTS:  {
        type: String,
        default:"검수기준은요~"
      },
    CSCENTER_WDATE:  {
        type: String,
        default:"2022-04-01"
      },
    CSCENTER_STATUS: {
        default: ""
      },
    CSCENTER_COMMENT:   {
        type: String,
        default:"없음"
      },
    USER_ID:  {
      type: String,
      default: 'test'
      },
    USER_KEY:{
      default: 0
    },
  },

  methods: {
    fDialog(){
      this.$emit('sendDialog');
    },
    sendItems(){
      let that = this;
      let sendCscenterKey=that.CSCENTER_KEY;
      let sendUserid=that.USER_ID;
      let sendUserkey=that.USER_KEY;
      this.$emit("sendItems", sendCscenterKey, sendUserid, sendUserkey);
    }
  },
}
</script>
