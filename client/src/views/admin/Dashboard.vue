<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-12">
        <AdminInspecLists
            :items="inspecItems"
            :title="title2"/>
      </div>
      <div class="w-full xl:w-4/12 px-4 mt-12">
        <AdminCardCscenterPage />
      </div>
      <div class="w-full  mb-12 xl:mb-0 px-4">
        <AdminCardPageLists
            :items="items" :title="title"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/Admin/AdminCardPageLists.vue";
import AdminInspecLists from "@/components/Cards/Admin/AdminInspecLists.vue";
import AdminCardCscenterPage from "@/components/Cards/Admin/AdminCardCscenterPage.vue";
export default {
  name: "dashboard-page",
  data() {
    return {
      title: "상품 리스트",
      title2: "검수 리스트",
      items: {
        seq: '',
        PRODUCT_NAME: '',
        PRODUCT_BRAND: '',
        PRODUCT_CATE: '',
        PRODUCT_ORIPRICE: 0,
        listName: 0,
        dealCount: 0,
        inspecCount: 0,
        inspecStatus: 0,
        inspecComplete: 0,
      },
      inspecItems: {
        seq: '',
        PRODUCT_NAME: '',
        PRODUCT_BRAND: '',
        PRODUCT_CATE: '',
        PRODUCT_ORIPRICE: 0,
        listName: 1,
        dealCount: 0,
        inspecCount: 0,
        inspecStatus: 0,
        inspecComplete: 0,
      },
    }
  },
  components: {
    AdminCardPageLists,
    AdminCardCscenterPage,
    AdminInspecLists
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
