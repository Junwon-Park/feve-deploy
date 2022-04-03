<template>
  <div style="padding-bottom: 20vh">
    <div class="flex flex-wrap">

      <HeaderStats class=" w-full"/>
      <div class="w-full  mb-12 xl:mb-0 px-4 -mt-24">

        <AdminLineChart
            :items="items" :title="title"
            style="min-height: 30vh;"
        />
      </div>
<!--      <div class="w-full xl:w-4/12 px-4  -mt-24">-->
      <div class="w-full mb-12 xl:mb-0 px-4 mt-8">
        <AdminBarChart
            style="min-height: 30vh;"
        />
      </div>
    </div>
  </div>
</template>
<script>
import AdminLineChart from "@/components/Cards/Admin/AdminLineChart.vue";
import HeaderStats from "@/components/Cards/Admin/HeaderStats.vue";
import AdminBarChart from "@/components/Cards/Admin/AdminBarChart.vue";

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
    }
  },
  components: {
    AdminBarChart,
    AdminLineChart,
    HeaderStats
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
  }
};
</script>
