<template>
  <div style="padding-bottom: 20vh">
    <div class="flex flex-wrap">

      <HeaderStats
          :countTotalUser="countTotalUser"
          :countTotalBuy="countTotalBuy"
          :countTotalSell="countTotalSell"
          :countTotalDeal="countTotalDeal"
          class=" w-full"
      />

      <div class="w-full  mb-12 xl:mb-0 px-4 -mt-24">
        <AdminLineChart
            :countUser="countUser" :title="title"
            style="min-height: 30vh;"
        />
      </div>

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
      countUser:[],
      countTotalUser: 0,
      countTotalBuy: 0,
      countTotalSell: 0,
      countTotalDeal: 0,
    }
  },
  components: {
    AdminBarChart,
    AdminLineChart,
    HeaderStats
  },
  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/count/user/total')
        .then(function(res){
          that.countTotalUser = res.data[0].cnt;
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/buy/total')
        .then(function(res){
          that.countTotalBuy = res.data[0].cnt;
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/sell/total')
        .then(function(res){
          that.countTotalSell = res.data[0].cnt;
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/deal/total')
        .then(function(res){
          that.countTotalDeal = res.data[0].cnt;
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/user')
        .then(function(res){
          that.countUser = res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
