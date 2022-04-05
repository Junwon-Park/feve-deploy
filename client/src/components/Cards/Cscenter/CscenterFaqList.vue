<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded"
  >
          <CscenterFaqCards
              v-for="(item, idx) in items"
              :key="idx"
              v-bind="item"
              :items="items"
              @sendDialog="cDialog"
              @sendItems="sendItems"
          />

  </div>
</template>
<script>

import CscenterFaqCards from "@/components/Cards/Cscenter/CscenterFaqCards.vue";

export default {
  props:{
    title: {
      type: String,
      default: "리스트",
    },
    items: {
      required: true,
    },
  },
  data () {
    return {
      table: ["번호", "제목", "작성자", "작성시간", "", ""],
      receivedCscenterKey: 0,
      receivedUserid:"",
      receivedUserkey:0,
      cscenterComment: 0,
      recDialog: false,
      item:{
        CSCENTER_KEY: 0,
        CSCENTER_TITLE: '',
        CSCENTER_CONTENTS: '',
        CSCENTER_WDATE: '',
        CSCENTER_STATUS: '',
        CSCENTER_COMMENT: '',
        CSCENTER_COMMENT_WDATE: '',
        USER_KEY: 0,
        USER_ID:'',
      }
    }
  },
  components:{
   CscenterFaqCards,

  },
  methods: {
    cDialog(){
      this.recDialog=true;
    },
    sendDialog(){
      this.recDialog = false
    },
    sendItems(recC, recU, recUk) {
      let that=this;
      that.receivedCscenterKey=recC;
      that.receivedUserid=recU;
      that.receivedUserkey=recUk;

      console.log(that.receivedCscenterKey)

      this.$axios.post('http://localhost:8080/admin/cscenter/one',{
        sendCscenterKey: that.receivedCscenterKey,
        sendUserid: that.receivedUserid,
        sendUserkey: that.receivedUserkey,
      }).then(function(res){
        that.item=res.data[0];
        console.log("res", res);
      }).catch(function(err){
        console.log(err);
      });
    },
    updateList(newS){
      let that = this;
      that.cscenterComment = newS;

      this.$axios.post('http://localhost:8080/admin/updateCscenter', {
        sendCscenterKey: that.receivedCscenterKey,
        cscenterComment: that.cscenterComment,
        sendUserkey: that.receivedUserkey,
      }).then(function(res){
        console.log(res)
      })
          .catch(function(err){
            console.log(err);
          });
    }
  },
}
</script>
<style>
  .dropdown{
    position:relative;
    display:inline-block;
  }
  .dropdown-content{
    display:none;
    position:absolute;
    min-width:75px;
    padding:5px;
    box-shadow: 0px 8px 16px 0px rgba(0,  0,  0, 2);
  }
  .dropdown-content a {
    color:black;
    padding:8px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover{background-color: white;}
  .dropdown:hover .dropdown-content{display: block;}
  .dropdown:hover .dropdown-button{background-color:white;}
</style>