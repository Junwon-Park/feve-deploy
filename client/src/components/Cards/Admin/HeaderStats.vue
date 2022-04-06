<template>
  <!-- Header -->
  <div class="relative bg-gray-200 md:pt-32 pb-48 pt-12">
    <div class="px-1 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="총 거래 건수"
              :statTitle="countTotalDeal+' 건'"
              statArrow="up"
              :statPercent="dealRatio"
              statPercentColor="text-emerald-500"
              statDescripiron="지난 달"
              statIconName="far fa-chart-bar"
              statIconColor="bg-purple-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="총 회원수 "
              :statTitle="countTotalUser+'명'"
              statArrow="down"
              :statPercent="userRatio"
              statPercentColor="text-red-500"
              statDescripiron="지난 주"
              statIconName="fas fa-users"
              statIconColor="bg-orange-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="판매 입찰 건수"
              :statTitle="countTotalSell+' 건'"
              statArrow="down"
              :statPercent="sellRatio"
              statPercentColor="text-orange-500"
              statIconName="fas fa-chart-pie"
              statDescripiron="어제"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="구매 입찰 건수"
              :statTitle="countTotalBuy+' 건'"
              statArrow="up"
              :statPercent="buyRatio"
              statDescripiron="어제"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-red-500"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/Admin/CardStats.vue";

export default {
  data(){
    return{
      dealRatio: "0",
      userRatio: "0",
      sellRatio: "0",
      buyRatio: "0",
    }
  },
  props:{
    countTotalUser: {
      default: 0
    },
    countTotalBuy: {
      default: 0
    },
    countTotalSell: {
      default: 0
    },
    countTotalDeal: {
      default: 0
    },
    beforeCountTotalUser: {
      default: 0
    },
    beforeCountTotalBuy: {
      default: 0
    },
    beforeCountTotalSell: {
      default: 0
    },
    beforeCountTotalDeal: {
      default: 0
    },
  },
  components: {
    CardStats,
  },
  created(){
    console.log(this.beforeCountTotalDeal, this.beforeCountTotalUser, this.beforeCountTotalSell, this.beforeCountTotalBuy);
    console.log(this.countTotalDeal, this.countTotalUser, this.countTotalSell, this.countTotalBuy);

    this.dealRatio= isNaN((this.countTotalDeal/this.beforeCountTotalDeal)*100) ? 0 :( (this.countTotalDeal/this.beforeCountTotalDeal)*100).toString();
    this.userRatio=isNaN((this.countTotalUser/this.beforeCountTotalUser)*100) ? 0 : ( (this.countTotalUser/this.beforeCountTotalUser)*100).toString();
    this.sellRatio= isNaN((this.countTotalSell/this.beforeCountTotalSell)*100) ? 0 : ((this.countTotalSell/this.beforeCountTotalSell)*100).toString();
    this.buyRatio= isNaN((this.countTotalBuy/this.beforeCountTotalBuy)*100) ? 0 : ((this.countTotalBuy/this.beforeCountTotalBuy)*100).toString();
  },
};
</script>
