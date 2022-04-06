<template>
  <div style="padding-bottom: 20vh">
    <div class="flex flex-wrap">

      <HeaderStats
          :countTotalUser="countTotalUser"
          :countTotalBuy="countTotalBuy"
          :countTotalSell="countTotalSell"
          :countTotalDeal="countTotalDeal"
          :beforeCountTotalUser="beforeCountTotalUser"
          :beforeCountTotalBuy="beforeCountTotalBuy"
          :beforeCountTotalSell="beforeCountTotalSell"
          :beforeCountTotalDeal="beforeCountTotalDeal"
          class=" w-full"
      />

      <div class="w-full  mb-12 xl:mb-0 px-4 -mt-24">
        <AdminLineChart
            :countUser="countUser"
            :userCnt="userCnt"
            :dealCnt="dealCnt"
            :title="title"
            style="min-height: 30vh;"
        />
      </div>

      <div class="w-full mb-12 xl:mb-0 px-4 mt-8">
        <AdminBarChart
            :bidBuyCnt="bidBuyCnt"
            :bidSellCnt="bidSellCnt"
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
      countDeal:[],
      userCnt: [],
      dealCnt: [],
      bidBuyArray:[],
      bidSellArray:[],
      bidBuyCnt: [],
      bidSellCnt: [],
      countTotalUser: 0,
      countTotalBuy: 0,
      countTotalSell: 0,
      countTotalDeal: 0,
      beforeCountTotalUser: 0,
      beforeCountTotalBuy: 0,
      beforeCountTotalSell: 0,
      beforeCountTotalDeal: 0,
    }
  },
  components: {
    AdminBarChart,
    AdminLineChart,
    HeaderStats
  },
  beforeCreate() {
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

    this.$axios.get('http://localhost:8080/admin/count/bef/user/total')
        .then(function(res){
          console.log(res)
          if(res.data[0].cnt===0) {
            that.beforeCountTotalUser=1
          } else {
            that.beforeCountTotalUser = res.data[0].cnt;
          }
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/bef/buy/total')
        .then(function(res){
          console.log(res)
          if(res.data[0].cnt===0) {
            that.beforeCountTotalBuy=1
          } else {
            that.beforeCountTotalBuy = res.data[0].cnt;
          }
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/bef/sell/total')
        .then(function(res){
          console.log(res)
          if(res.data[0].cnt===0) {
            that.beforeCountTotalSell=1
          } else {
            that.beforeCountTotalSell = res.data[0].cnt;
          }
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/bef/deal/total')
        .then(function(res){
          console.log(res)
          if(res.data[0].cnt===0) {
            that.beforeCountTotalDeal=1
          } else {
            that.beforeCountTotalDeal = res.data[0].cnt;
          }
          console.log(that.beforeCountTotalDeal)
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/user')
        .then(function(res){
          that.countUser = res.data;
          for(let i=0; i<that.countUser.length;i++) {
            if(that.countUser[i].cnt===null) {
              that.userCnt[i]=0
            }
            if(that.countUser[i].cnt !=null) {
              that.userCnt.push(that.countUser[i].cnt)
            }
          }
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/deal')
        .then(function(res){
          that.countDeal = res.data;

          for(let i=0; i<that.countDeal.length;i++) {
            if(that.countDeal[i].cnt===null) {
              that.dealCnt[i]=0
            }
            if(that.countDeal[i].cnt !=null) {
              that.dealCnt.push(that.countDeal[i].cnt)
            }
          }
        })
        .catch(function(err){
          console.log(err);
        });


    this.$axios.get('http://localhost:8080/admin/count/bid/buy')
        .then(function(res){
          that.bidBuyArray = res.data;

          for(let i=0; i<that.bidBuyArray.length;i++) {
            if(that.bidBuyArray[i].cnt===null) {
              that.bidBuyCnt[i]=0
            }
            if(that.bidBuyArray[i].cnt !=null) {
              that.bidBuyCnt.push(that.bidBuyArray[i].cnt)
            }
          }
        })
        .catch(function(err){
          console.log(err);
        });

    this.$axios.get('http://localhost:8080/admin/count/bid/sell')
        .then(function(res){
          that.bidSellArray = res.data;

          for(let i=0; i<that.bidSellArray.length;i++) {
            if(that.bidSellArray[i].cnt===null) {
              that.bidSellCnt[i]=0
            }
            if(that.bidSellArray[i].cnt !=null) {
              that.bidSellCnt.push(that.bidSellArray[i].cnt)
            }
          }
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
