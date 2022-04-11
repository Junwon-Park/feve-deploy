<template>
  <tr>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ CSCENTER_KEY }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ CSCENTER_TITLE }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ USER_ID }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ CSCENTER_WDATE }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ CSCENTER_STATUS }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
    >
      <button
          class="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          @click="fDialog(), sendItems()"
          v-if="CSCENTER_STATUS ==='답변중'"
      >
        답변하기
      </button>
    </td>
  </tr>
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
        default:"Lego"
      },
    CSCENTER_CONTENTS:  {
        type: String,
        default:"Architecture"
      },
    CSCENTER_WDATE:  {
        type: String,
        default:"건물"
      },
    CSCENTER_STATUS: {
        default: '',
      },
    CSCENTER_COMMENT:   {
        type: String,
        default:"2022-03-31"
      },
    USER_ID:  {
      type: String,
      default: 'aa'
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
  created(){
    //console.log(this.$props.CSCENTER_STATUS)
  }
}
</script>
