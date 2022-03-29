<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-12">
        <AdminCardPageLists v-bind="inspecItems" :items="inspecItems" :title="title2">
          <AdminCards />
        </AdminCardPageLists>
      </div>
      <div class="w-full xl:w-4/12 px-4 mt-12">
        <AdminCardCscenterPage />
      </div>
      <div class="w-full  mb-12 xl:mb-0 px-4">
        <AdminCardPageLists
            v-bind="items" :items="items" :title="title"
            v-bine="table" :table="table"
        >
          <AdminCards />
        </AdminCardPageLists>
      </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/Admin/AdminCardPageLists.vue";
import AdminCards from "@/components/Cards/Admin/AdminCards.vue";
import AdminCardCscenterPage from "@/components/Cards/Admin/AdminCardCscenterPage.vue";
export default {
  name: "dashboard-page",
  data() {
    return {
      title: "상품 리스트",
      title2: "검수 리스트",
      items:
          {
            seq: '',
            PRODUCT_NAME: '',
            PRODUCT_BRAND: '',
            PRODUCT_CATE: '',
            PRODUCT_ORIPRICE: 0,
            // dealCount: 0,
            // inspecCount: 0,
            // inspecStatus: 0,
            // inspecComplete: 0,
          },
      inspecItems:
          {
            seq: '',
            PRODUCT_NAME: '',
            PRODUCT_BRAND: '',
            PRODUCT_CATE: '',
            PRODUCT_ORIPRICE: 0,
            // dealCount: 0,
            // inspecCount: 0,
            // inspecStatus: 0,
            // inspecComplete: 0,
          },
      table: {
        tablePnum: "번호",
        tablePname: "상품명",
        tablePbrand: "브랜드",
        tablePcate: "카테고리",
        tablePoriprice: "발매가",
        tablePcount: "낙찰가",
        tablePinspeccount: "구매자",
        tablePinspecstatus: "판매자",
        tablePstatus: "검수상태"
      }
    }
  },
  components: {
    AdminCardPageLists,
    AdminCards,
    AdminCardCscenterPage,
  },
  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadproduct/limit')
        .then(function(res){
          that.items = res.data;
        })
        .catch(function(err){
          console.log(err);
        });


    this.$axios.get('http://localhost:8080/admin/loadproduct/limit')
        .then(function(res){
          that.inspecItems = res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
