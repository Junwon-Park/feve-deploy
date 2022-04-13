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
              :statArrow="icon"
              :statPercentColor="color"
              :statPercent="dealCount"
              statDescripiron="지난 달"
              statIconName="far fa-chart-bar"
              statIconColor="bg-purple-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="총 회원수 "
              :statTitle="countTotalUser+'명'"
              :statPercent="userCount"
              :statArrow="icon"
              :statPercentColor="color"
              statDescripiron="지난 달"
              statIconName="fas fa-users"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="판매 입찰 건수"
              :statTitle="countTotalSell+' 건'"
              :statArrow="icon"
              :statPercentColor="color"
              :statPercent="sellCount"
              statIconName="fas fa-chart-pie"
              statDescripiron="어제"
              statIconColor="bg-emerald-500"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
            <card-stats
              statSubtitle="구매 입찰 건수"
              :statTitle="countTotalBuy+' 건'"
              :statArrow="icon"
              :statPercentColor="color"
              :statPercent="buyCount"
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
      deal: false,
      user: false,
      sell: false,
      buy: false,
      dealCount: 0,
      userCount: 0,
      sellCount: 0,
      buyCount: 0,
      color:"",
      icon:"up",
    }
  },
  props:{
    countTotalUser: Number,
    countTotalBuy: Number,
    countTotalSell: Number,
    countTotalDeal:  Number,
    beforeCountTotalUser: Number,
    beforeCountTotalBuy: Number,
    beforeCountTotalSell:  Number,
    beforeCountTotalDeal: Number,
    calcCountDeal: Number,
    calcCountUser: Number,
    calcCountSell: Number,
    calcCountBuy: Number,
  },
  components: {
    CardStats,
  },
  watch: {
    calcCountDeal: function(){
      this.dealCount=this.calcCountDeal
      this.countTotalDealFunc()
    },
    calcCountUser : function(){
      this.userCount= this.calcCountUser
      this.countTotalUserFunc()
    },
    calcCountSell: function(){
      this.sellCount=this.calcCountSell
      this.countTotalSellFunc()
    },
    calcCountBuy : function(){
      this.buyCount=this.calcCountBuy
      this.countTotalBuyFunc()
    }
  },
  methods:{
    countTotalDealFunc() {
      if (this.dealCount > 0) {
        this.color = "text-emerald-500"
        this.icon = "up"
      } else if( this.dealCount === 0 ){
        this.color = "text-blueGray-400"
        this.icon = "down"
      } else {
        this.color = "text-red-500"
        this.icon = "down"
      }
    },

    countTotalUserFunc() {
      if (this.userCount > 0) {
        this.color = "text-emerald-500"
        this.icon = "up"
      }else if( this.userCount === 0 ){
        this.color = "text-blueGray-400"
        this.icon = "down"
      } else {
        this.color = "text-red-500"
        this.icon = "down"
      }
    },

    countTotalSellFunc() {
      if (this.sellCount > 0) {
        this.color = "text-emerald-500"
        this.icon = "up"
      }else if( this.sellCount === 0 ){
        this.color = "text-blueGray-400"
        this.icon = "down"
      } else {
        this.color = "text-red-500"
        this.icon = "down"
      }
    },

    countTotalBuyFunc(){
      if( this.buyCount>0) {
        this.color="text-emerald-500"
        this.icon="up"
      }else if( this.buyCount === 0 ){
        this.color = "text-blueGray-400"
        this.icon = "down"
      } else {
        this.color="text-red-500"
        this.icon="down"
      }
    }
  },
  created(){
    this.countTotalDealFunc()
    this.countTotalUserFunc()
    this.countTotalSellFunc()
    this.countTotalBuyFunc()
  },
};
</script>
