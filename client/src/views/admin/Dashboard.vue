<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-12">
        <AdminCardPageLists v-bind="items">
          <AdminCards />
        </AdminCardPageLists>
      </div>
      <div class="w-full xl:w-4/12 px-4 mt-12">
        <AdminCardCscenterPage />
      </div>
      <div class="w-full  mb-12 xl:mb-0 px-4">
        <AdminCards />
      </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/AdminCardPageLists.vue";
import AdminCards from "@/components/Cards/AdminCards.vue";
import AdminCardCscenterPage from "@/components/Cards/AdminCardCscenterPage.vue";
export default {
  name: "dashboard-page",
  data() {
    return {
      items: [
        {
          title: "상품리스트",
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
      ]
    }
  },
  components: {
    AdminCardPageLists,
    AdminCards,
    AdminCardCscenterPage,
  },
  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadproduct')
        .then(function(res){
          console.log(res);
          that.items = res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
