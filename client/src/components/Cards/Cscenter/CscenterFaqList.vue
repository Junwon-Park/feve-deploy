<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded"
  >
     <div id="faq">
        <div class="wrap">
          <div class="menu_list"> 
            <div class="menu_list_items">
              <a>전체</a>
              <a>이용정책</a>
              <a>공통</a>
              <a>구매</a>
              <a>판매</a>
            </div>
          </div>
          <div class="dropdown">
            <div class="button">
              dropdown 메뉴 구현
            </div>
            <div class="dropdown-content">
              <div class="content">
                <a>판매자와 구매자의 건전한 거래를 위하여 아래 사유에 따라 페널티가 부과됩니다. 

                    결제정보 오류로 페널티 결제 실패 시, 이용약관 제24조("서비스수수료")에 따라 별도의 고지없이 재결제를 시도합니다.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      
      <table class=" w-full bg-transparent border-collapse">
        <thead class="thead-light">
        <tr>
          <th
              class="px-6  bg-gray-200 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
              v-for="(table, idx) in table" :key="idx"
          >
            {{ table }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="this.$props.items.length===0">
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
              colspan="13"
          >
            아직 등록된 문의가 없습니다.
          </td>
        </tr>
          <CscenterFaqCards
              v-else
              v-for="(item, idx) in items"
              :key="idx"
              v-bind="item"
              :items="items"
              @sendDialog="cDialog"
              @sendItems="sendItems"
          />
        </tbody>
      </table>
    </div>
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