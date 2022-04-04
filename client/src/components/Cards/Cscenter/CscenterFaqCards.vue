<template>
<div id="__nuxt">
  <div class="category_list"> 
    <div class="category_list_items">
      <a class="nuxt-link-active category category_on">전체</a>
      <a class="nuxt-link-active category">이용정책</a>
      <a class="nuxt-link-active category">공통</a>
      <a class="nuxt-link-active category">구매</a>
      <a class="nuxt-link-active category">판매</a>
    </div>
  </div>
</div>
 
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
