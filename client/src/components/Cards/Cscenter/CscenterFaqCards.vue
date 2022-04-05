<template>
  <v-row justify="center">

    <v-expansion-panels
        accordion
        :elevation="0"
    >
      <v-expansion-panel
          v-for="(item,i) in 5"
          :key="i"
          style="box-shadow: 0 !important;"
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
        default:"아이디 비번 찾기 질문 있어요~"
      },
    CSCENTER_CONTENTS:  {
        type: String,
        default:"어떤 페이지에서 찾나요?"
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
    
  },
}
</script>
