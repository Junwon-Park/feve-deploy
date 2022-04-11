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
    <div class="block w-full overflow-x-auto" style="min-height: 58vh;">
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
          <AdminAnswerCards
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
    <CscenterAnswer
      :dialog="recDialog"
      :table="table"
      :title="title"
      :item="item"
      :receivedCscenterKey="receivedCscenterKey"
      :receivedUserid="receivedUserid"
      @sendDialog="sendDialog"
      @updateList="updateList"/>

    <Pagination
        :pageSize="pageSize"
        @onPageChanged="onPageChanged"
    />
  </div>

</template>
<script>
import AdminAnswerCards from "@/components/Cards/Admin/AdminAnswerCards.vue";
import CscenterAnswer from "@/components/Cards/Admin/CscenterAnswer.vue";
import Pagination from "@/components/Pagination.vue" ;
export default {
  props:{
    title: {
      type: String,
      default: "리스트",
    },
    items: {
      required: true,
    },
    pageSize:Number,
    itemPerPage: Number,
    totalListCount: Number,
  },
  data () {
    return {
      table: ["번호", "제목", "작성자", "작성시간", "답변여부", "관리"],
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
    AdminAnswerCards,
    CscenterAnswer,
    Pagination,
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

      //console.log(that.receivedCscenterKey)

      this.$axios.post('http://localhost:8080/admin/cscenter/one',{
        sendCscenterKey: that.receivedCscenterKey,
        sendUserid: that.receivedUserid,
        sendUserkey: that.receivedUserkey,
      }).then(function(res){
        that.item=res.data[0];
        //console.log("res", res);
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
      }).then(function(){
        //console.log(res)
      })
          .catch(function(err){
            console.log(err);
          });
    },

    onPageChanged(page){
      //console.log("페이지 버튼 클릭: ", page +"번");
      let requestPage = page;
      let sendStart = (page -1) * this.itemPerPage;
      let sendEnd=page * this.itemPerPage -1;
      //console.log("sendStart: ",sendStart, "sendEnd: ", sendEnd)

      this.$emit("startend", sendStart, sendEnd, requestPage);
    }
  },
}
</script>