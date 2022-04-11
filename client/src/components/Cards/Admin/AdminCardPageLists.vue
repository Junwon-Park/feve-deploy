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
        <div
            class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"
        >
          <router-link to="/admin/addProduct">
          <button
              class="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
          >
            상품 생성하기
          </button>
          </router-link>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
        <tr>
          <th
              class="px-6 bg-gray-200 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
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
              colspan="7"
          >
            아직 등록된 상품이 없습니다.
          </td>
        </tr>
          <AdminCards
              id="productList"
              v-else
              v-for="(item, idx) in items"
              :key="idx"
              v-bind="item"
              :items="items"
              @sendDialog="cDialog"
              @sendItems="sendItems"
              @sendDeleteItem="sendDeleteItem"
              @sendUndoDeleteItem="sendUndoDeleteItem" />
        </tbody>
      </table>
    </div>
    <AdminProductModi
        :dialog="recDialog"
        :table="table"
        :title="title"
        :item="item"
        :receivedProductKey="receivedProductKey"
        @sendDialog="sendDialog"
        @updateList="updateList"/>

    <Pagination
        :pageSize="pageSize"
        @onPageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import AdminCards from "@/components/Cards/Admin/AdminCards.vue";
import AdminProductModi from "@/components/Cards/Admin/AdminProductModi.vue";
import Pagination from "@/components/Pagination.vue" ;

export default {
  props: {
    title: {
      type: String,
      default: "리스트",
    },
    items: {
      required: false
    },
    isArrayNull:{
      required: false
    },
    pageSize:Number,
    itemPerPage: Number,
    totalListCount: Number,
  },
  computed:{
    rows(){
      return this.items.length
    }
  },
  data() {
    return {
      table: ["번호", "상품명", "모델명", "브랜드", "카테고리", "발매가","관리"],
      sendProductKey: 0,
      receivedProductKey: 0,
      receivedMnum: "",
      recDialog: false,
      brandStatus: "",
      categoryStatus: "",
      newProductName:"",
      newProductMnum:"",
      newProductLdate:"",
      newProductPic:"",
      newProductDesc:"",
      newProductOriprice:"",
      requestPage: 0,
      currentPage: 0,
      item:{
        PRODUCT_KEY: 0,
        PRODUCT_MNUM: "",
        PRODUCT_PIC: "",
        PRODUCT_NAME: "",
        PRODUCT_ORIPRICE: 0,
        PRODUCT_CATE: "",
        PRODUCT_BRAND: "",
        PRODUCt_LDATE: "",
        PRODUCT_DELETE: '0',
      }
    }
  },
  components: {
    AdminCards,
    AdminProductModi,
    Pagination,
  },
  methods: {
    sendItems(recP, recM) {
      let that = this;
      that.receivedProductKey = recP;
      that.receivedMnum = recM;

      this.$axios.post('http://localhost:8080/admin/loadproduct/one', {
        sendProductKey: that.receivedProductKey,
        sendMnum: that.receivedMnum,
      }).then(function (res) {
        that.item = res.data[0];
      }).catch(function (err) {
        console.log(err);
      });
    },

    sendDeleteItem(recP, recM) {
      let that = this;
      that.receivedProductKey = recP;
      that.receivedMnum = recM;

      this.$axios.post('http://localhost:8080/admin/deleteProduct', {
        sendProductKey: that.receivedProductKey,
        sendMnum: that.receivedMnum,
      }).then(function (res) {
        that.item = res.data[0];
      }).catch(function (err) {
        console.log(err);
      });
    },

    sendUndoDeleteItem(recP, recM) {
      let that = this;
      that.receivedProductKey = recP;
      that.receivedMnum = recM;

      this.$axios.post('http://localhost:8080/admin/deleteProduct/undo', {
        sendProductKey: that.receivedProductKey,
        sendMnum: that.receivedMnum,
      }).then(function (res) {
        that.item = res.data[0];
      }).catch(function (err) {
        console.log(err);
      });
    },

    cDialog(){
      this.recDialog=true;
    },

    sendDialog(){
      this.recDialog = false
    },

    updateList(recPk, recN, recM, recL,recP, recD,recO, recB, recC) {
      let that = this;
      that.sendProductKey = recPk;
      that.brandStatus = recB,
      that.categoryStatus = recC,
      that.newProductName = recN,
      that.newProductMnum = recM,
      that.newProductLdate = recL,
      that.newProductPic = recP,
      that.newProductDesc = recD,
      that.newProductOriprice = recO,

      this.$axios.post('http://localhost:8080/admin/updateProduct', {
        sendProductKey: that.sendProductKey,
        brandStatus: that.brandStatus,
        categoryStatus:  that.categoryStatus,
        newProductName: that.newProductName,
        newProductMnum: that.newProductMnum,
        newProductLdate: that.newProductLdate,
        newProductPic: that.newProductPic,
        newProductDesc: that.newProductDesc,
        newProductOriprice:  that.newProductOriprice,
      }).then(function () {
        //console.log(res)
      })
      .catch(function (err) {
        console.log(err);
      });
    },

    onPageChanged(page){
      let requestPage = page;
      let sendStart = (page -1) * this.itemPerPage;
      let sendEnd=page * this.itemPerPage -1;
      //console.log("sendStart: ",sendStart, "sendEnd: ", sendEnd)

      this.$emit("startend", sendStart, sendEnd, requestPage);
    }
  },
}
</script>
