<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded"
  >

    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto"  style="min-height: 58vh;">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse" >
        <thead>
        <tr>
          <th
              class="px-6  bg-gray-200 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
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
            아직 검수를 요청한 상품이 없습니다.
          </td>
        </tr>
          <AdminInspecCards
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
    <AdminInspecModi
        :dialog="recDialog"
        :table="table"
        :title="title"
        :item="item"
        :receivedProductKey="receivedProductKey"
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
import AdminInspecCards from "@/components/Cards/Admin/AdminInspecCards.vue";
import AdminInspecModi from "@/components/Cards/Admin/AdminInspecModi.vue";
import Pagination from "@/components/Pagination.vue" ;
export default {
  props: {
    title: {
      type: String,
      default: "리스트",
    },
    items: {
      required: false,
    },
    pageSize:Number,
    itemPerPage: Number,
    totalListCount: Number,
},
  data() {
    return {
      receivedProductKey: 0,
      receivedUserid:"",
      receivedUserkey:0,
      sendInspectionStatus: 0,
      sendInsepctionResult: 0,
      recDialog: false,
      requestPage: 0,
      currentPage: 0,
      table: ["번호", "상품명", "브랜드", "카테고리", "발매가", "판매자","수량", "검수도착일","검수상태","검수종료일","결과","반송일","관리"],
      item:{
        INSPECTION_KEY: 0,
        INSPECTION_DATE: "",
        INSPECTION_RESULT: "",
        INSPECTION_STATUS: "",
        INSPECTION_ADATE: "",
        INSPECTION_RDATE:"",
        PRODUCT_KEY: 0,
        PRODUCT_MNUM: "",
        USER_ID: "",
        PRODUCT_NAME: "",
        PRODUCT_ORIPRICE: 0,
        PRODUCT_CATE: "",
        PRODUCT_BRAND: "",
      }
    }
  },
  components: {
    AdminInspecCards,
    AdminInspecModi,
    Pagination,
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
        //console.log("res", res);
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
