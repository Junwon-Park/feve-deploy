<template>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-3/12 xl:w-1/6 px-4 mb-5" v-for="item in items" :key="item.seq">
        <card-stats v-bind="item" />
      </div>
    </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import itemPic1 from "@/assets/img/product-lego1.jpg";
import itemPic2 from "@/assets/img/product-lego2.jpg";
import itemPic3 from "@/assets/img/product-lego3.jpg";
import itemPic4 from "@/assets/img/product-lego4.jpg";

export default {
  components: {
    CardStats,
  },
  data() {
    return {
      itemPic1,
      itemPic2,
      itemPic3,
      itemPic4,
      items: [
        {
          // seq:1,
          productPic: itemPic1,
          statSubtitle: "월e",
          statTitle:"230,000",
          statArrow:"up",
          statPercent:"12",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          productPic: itemPic2,
          statSubtitle: "PERFORMANCE",
          statTitle:"530,000",
          statArrow:"up",
          statPercent:"10",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          productPic: itemPic3,
          statSubtitle: "아키텍처",
          statTitle:"930,000",
          statArrow:"up",
          statPercent:"19",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          productPic: this.itemPic4,
          statSubtitle: "PERFORMANCE",
          statTitle:"49,65%",
          statArrow:"up",
          statPercent:"12",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          productPic: itemPic1,
          statSubtitle: "PERFORMANCE",
          statTitle:"49,65%",
          statArrow:"up",
          statPercent:"12",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          productPic: itemPic2,
          statSubtitle: "PERFORMANCE",
          statTitle:"49,65%",
          statArrow:"up",
          statPercent:"12",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        },
      ]
    }
  },
};
</script>
