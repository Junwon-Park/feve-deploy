<template>
  <div>
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"          
          :style="{ backgroundImage: `url(${instaBg})` }"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-30 bg-white"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
          <div class="px-6">
             <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center"
              >STYLE</h3>
          </div>
          <hr class="mt-8 mb-8" />
          <div class="flex flex-wrap">
             <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-5" v-for="item in items" :key="item.seq">
            <CardStyle v-bind="item" />
          </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import CardStyle from "@/components/Cards/CardStyle.vue";
import team2 from "@/assets/img/team-2-800x800.jpg";
import instaBg from "@/assets/img/bg-instagram.jpg";
import itemPic1 from "@/assets/img/bg-bearbrick1.jpg";
import itemPic2 from "@/assets/img/bg-bearbrick2.jpg";

export default {
  data() {
    return {
      team2,
      instaBg,
      itemPic1,
      itemPic2,
      items: [
        {
          seq:1,
          productPic: itemPic1,
          statSubtitle: "월e",
          statTitle:"230,000",
          statArrow:"up",
          statPercent:"12",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          seq:2,
          productPic: itemPic2,
          statSubtitle: "PERFORMANCE",
          statTitle:"530,000",
          statArrow:"up",
          statPercent:"10",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          seq:3,
          productPic: itemPic1,
          statSubtitle: "아키텍처",
          statTitle:"930,000",
          statArrow:"up",
          statPercent:"19",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          seq:4,
          productPic: itemPic1,
          statSubtitle: "PERFORMANCE",
          statTitle:"49,65%",
          statArrow:"up",
          statPercent:"12",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          seq:5,
          productPic: itemPic1,
          statSubtitle: "PERFORMANCE",
          statTitle:"49,65%",
          statArrow:"up",
          statPercent:"12",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        }, {
          seq:6,
          productPic: itemPic2,
          statSubtitle: "PERFORMANCE",
          statTitle:"49,65%",
          statArrow:"up",
          statPercent:"12",
          statPercentColor:"text-emerald-500",
          statDescripiron:"Since last month",
        },
      ]
    };
  },
  components: {
    CardStyle,
  },
};
</script>
