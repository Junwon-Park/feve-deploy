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
          :calcCountDeal="calcCountDeal"
          :calcCountUser="calcCountUser"
          :calcCountSell="calcCountSell"
          :calcCountBuy="calcCountBuy"
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
      calcCountDeal: 0,
      calcCountUser: 0,
      calcCountSell: 0,
      calcCountBuy: 0,
    }
  },
  components: {
    AdminBarChart,
    AdminLineChart,
    HeaderStats
  },
  created() {
    this.countTotalUserFunc()
    this.countTotalBuyFunc()
    this.countTotalSellFunc()
    this.countTotalDealFunc()

    this.befCountTotalUserFunc()
    this.befCountTotalBuyFunc()
    this.befCountTotalSellFunc()
    this.befCountTotalDealFunc()

    this.countUserFunc()
    this.countDealFunc()
    this.bidBuyArrayFunc()
    this.bidSellArrayFunc()

    this.calcCountDeal= this.countTotalBuy-this.beforeCountTotalBuy;
    this.calcCountUser= this.countTotalUser-this.beforeCountTotalUser;
    this.calcCountSell= this.countTotalSell-this.beforeCountTotalSell;
    this.calcCountBuy= this.countTotalBuy-this.beforeCountTotalBuy;
  },
  watch:{
    countTotalUser: function(){
      this.calcCountUser= this.countTotalUser-this.beforeCountTotalUser;
    },
    countTotalBuy: function(){
      this.calcCountBuy= this.countTotalBuy-this.beforeCountTotalBuy;
    },
    countTotalSell: function(){
      this.calcCountSell= this.countTotalSell-this.beforeCountTotalSell;
    },
    countTotalDeal: function(){
      this.calcCountDeal= this.countTotalDeal-this.beforeCountTotalDeal;
    },
  },

  methods:{
    countTotalUserFunc(){
      let that = this;
      this.$axios.get('http://localhost:8080/admin/count/user/total')
          .then(function(res){
            that.countTotalUser = res.data[0].cnt;
          })
          .catch(function(err){
            console.log(err);
          });
    },

    countTotalBuyFunc(){
      let that = this;
      this.$axios.get('http://localhost:8080/admin/count/buy/total')
          .then(function(res){
            that.countTotalBuy = res.data[0].cnt;
            //console.log("totalbuy",that.countTotalBuy)
          })
          .catch(function(err){
            console.log(err);
          });
    },

    countTotalSellFunc(){
      let that = this;
      this.$axios.get('http://localhost:8080/admin/count/sell/total')
          .then(function(res){
            that.countTotalSell = res.data[0].cnt;
            //console.log(res.data[0].cnt)
          })
          .catch(function(err){
            console.log(err);
          });
    },

    countTotalDealFunc(){
      let that = this;

      this.$axios.get('http://localhost:8080/admin/count/deal/total')
          .then(function(res){
            that.countTotalDeal = res.data[0].cnt;
          })
          .catch(function(err){
            console.log(err);
          });
    },

    befCountTotalUserFunc(){
      let that = this;
      this.$axios.get('http://localhost:8080/admin/count/bef/user/total')
          .then(function(res){
            // console.log(res.data);
            // console.log("usertotal",res.data[0].cnt)
            that.beforeCountTotalUser = res.data[0].cnt;
            // console.log("that.beforeCountTotalUser",that.beforeCountTotalUser)
          })
          .catch(function(err){
            console.log(err);
          });
  },

    befCountTotalBuyFunc(){
      let that = this;

      this.$axios.get('http://localhost:8080/admin/count/bef/buy/total')
          .then(function(res){
            //console.log(res.data);
            //console.log("buytotal",res.data[0].cnt)
            that.beforeCountTotalBuy = res.data[0].cnt;
            //console.log("that.beforeCountTotalBuy",that.beforeCountTotalBuy)
          })
          .catch(function(err){
            console.log(err);
          });
    },

    befCountTotalSellFunc(){
      let that = this;

      this.$axios.get('http://localhost:8080/admin/count/bef/sell/total')
          .then(function(res){
            //console.log(res.data);
            // console.log("selltotal",res.data[0].cnt)
            that.beforeCountTotalSell = res.data[0].cnt;
            //console.log("that.beforeCountTotalSell",that.beforeCountTotalSell)
          })
          .catch(function(err){
            console.log(err);
          });
    },

    befCountTotalDealFunc(){
      let that = this;
      this.$axios.get('http://localhost:8080/admin/count/bef/deal/total')
          .then(function(res){
            //console.log(res.data);
            //console.log("dealtotal",res.data[0].cnt)
            that.beforeCountTotalDeal = res.data[0].cnt;
            //console.log("that.beforeCountTotalDeal",that.beforeCountTotalDeal)
          })
          .catch(function(err){
            console.log(err);
          });
    },

    countUserFunc(){
      let that = this;

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
    },

    countDealFunc(){
      let that = this;

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
    },

    bidBuyArrayFunc(){
      let that = this;

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
    },
    bidSellArrayFunc(){
      let that = this;

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
    },
  },
  updated(){
  }
};
</script>
