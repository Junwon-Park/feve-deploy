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
  },
  components: {
    CardStats,
  },
  watch: {
    beforeCountTotalUser: function(){
      this.countTotalDealFunc()
    },
    beforeCountTotalBuy : function(){
      this.countTotalUserFunc()
    },
    beforeCountTotalSell: function(){
      this.countTotalSellFunc()
    },
    beforeCountTotalDeal : function(){
      this.countTotalBuyFunc()
    }
  },
  methods:{
    countTotalDealFunc() {
      this.dealCount = this.countTotalDeal - this.beforeCountTotalDeal
      if (this.dealCount > 0) {
        this.color = "text-emerald-500"
        this.icon = "up"
      } else {
        this.color = "text-red-500"
        this.icon = "down"
      }
    },

    countTotalUserFunc() {

      this.userCount = this.countTotalUser - this.beforeCountTotalUser
      console.log("a",this.countTotalUser)
      console.log("b",this.beforeCountTotalUser)
      if (this.userCount > 0) {
        console.log('c')
        this.color = "text-emerald-500"
        console.log(this.color)
        console.log(this.icon)
        this.icon = "up"
        console.log(this.icon)
      } else {
        console.log('d')
        this.color = "text-red-500"
        this.icon = "down"
      }
    },

    countTotalSellFunc() {

      this.sellCount = this.countTotalSell - this.beforeCountTotalSell
      if (this.sellCount > 0) {
        this.color = "text-emerald-500"
        this.icon = "up"
      } else {
        this.color = "text-red-500"
        this.icon = "down"
      }
    },

    countTotalBuyFunc(){
      this.buy=this.countTotalBuy-this.beforeCountTotalBuy
      if( this.buy>0) {
        this.color="text-emerald-500"
        this.icon="up"
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
  }
};
</script>
