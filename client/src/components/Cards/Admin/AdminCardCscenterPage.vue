<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded"
  >
    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            문의 내역
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto"  style="min-height: 80vh;">
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
          <AdminAnswerCards
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
    <CscenterAnswer
      :dialog="recDialog"
      :table="table"
      :title="title"
      :item="item"
      :receivedProductKey="receivedProductKey"
      :receivedUserid="receivedUserid"
      @sendDialog="sendDialog"
      @updateList="updateList"/>
  </div>
</template>
<script>
import AdminAnswerCards from "@/components/Cards/Admin/AdminAnswerCards.vue";
import CscenterAnswer from "@/components/Cards/Admin/CscenterAnswer.vue";
export default {
  props:{
    title: {
      type: String,
      default: "리스트",
    },
    items: {
      required: false,
    },
  },
  data () {
    return {
      table: ["번호", "제목", "작성자", "작성시간", "답변여부", "관리"],
      receivedProductKey: 0,
      receivedUserid:"",
      receivedUserkey:0,
      sendInspectionStatus: 0,
      sendInsepctionResult: 0,
      recDialog: false,
      item:{
        CSCENTER_KEY: 0,
        CSCENTER_TITLE: '',
        CSCENTER_CONTENTS: '',
        CSCENTER_WDATE: '',
        CSCENTER_STATUS: '',
        CSCENTER_COMMENT: '',
        CSCENTER_COMMENT_WDATE: '',
        USER_KEY: '',
        USER_ID:'',
      }
    }
  },
  components:{
    AdminAnswerCards,
    CscenterAnswer
  },
  methods: {
    cDialog(){
      this.recDialog=true;
    },
    sendDialog(){
      this.recDialog = false
    },
    sendItems(recP, recU, recUk) {
      let that=this;
      that.receivedProductKey=recP;
      that.receivedUserid=recU;
      that.receivedUserkey=recUk;

      this.$axios.post('http://localhost:8080/admin/loadInspection/one',{
        sendProductKey: that.receivedProductKey,
        sendUserid: that.receivedUserid,
        sendUserkey: that.receivedUserkey,
      }).then(function(res){
        that.item=res.data[0];
        console.log("res", res);
      }).catch(function(err){
        console.log(err);
      });
    },
    updateList(newS, newR){
      let that = this;
      that.sendInspectionStatus = newS;
      that.sendInsepctionResult = newR;

      this.$axios.post('http://localhost:8080/admin/updateInspection', {
        sendInspectionStatus: that.sendInspectionStatus,
        sendInsepctionResult: that.sendInsepctionResult,
        sendProductKey: that.receivedProductKey,
        sendUserid: that.receivedUserid,
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