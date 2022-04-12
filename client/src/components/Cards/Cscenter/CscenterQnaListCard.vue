<template>
  <tr @click="fDialog(); sendItems();" style="cursor:pointer;">
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ CSCENTER_KEY }}
    </td>
    
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
       
        style="cursor:pointer;"
    >
      {{ CSCENTER_TITLE }} 
    </td>
   
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
        
    >
      {{ USER_NAME }}
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
    USER_NAME:  {
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
      let sendUserkey=that.USER_KEY;
      this.$emit("sendItems", sendCscenterKey, sendUserkey);
    }
  },
  created(){
    console.log(this.$props.CSCENTER_STATUS)
  }
}
</script>