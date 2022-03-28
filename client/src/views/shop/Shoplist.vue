<template>
  <div>
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"          
          :style="{ backgroundImage: `url(${legoBg})` }"
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
        <div class="">
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
          <div class="px-6">
             <h3
                class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center"
              >SHOP</h3>
          </div>
          <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
            <div class="relative w-full max-w-full flex-grow flex-1 text-right">
               <div class="text-center">
    <v-chip
      class="ma-2"
    >
      전체
    </v-chip>

    <v-chip
      class="ma-2"
      color="primary"
    >
      레고
    </v-chip>

    <v-chip
      class="ma-2"
      color="secondary"
    >
      베어브릭
    </v-chip>

  </div>
            </div>
          </div>
          <hr />
          
          <div class="flex mt-5">
            <div class="flex w-full lg:w-3/12 px-4 mb-5">
              <Category />
            </div>
            <div class="w-full px-4 mb-5 flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-5" v-for="item in items" :key="item.seq">
                <ProductCards v-bind="item" />
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import ProductCards from "@/components/Cards/ProductCards.vue";
import team2 from "@/assets/img/team-2-800x800.jpg";
import legoBg from "@/assets/img/bg-lego5.jpg";

import Category from './Category';

export default {
  data() {
    return {
      team2,
      legoBg,
      items: [
        {
          PRODUCT_KEY:'',
          PRODUCT_PIC:'',
          PRODUCT_NAME: '',
          PRODUCT_BRAND: '',
          PRODUCT_CATE: '',
          PRODUCT_ORIPRICE: 0,
        }
      ]
    };
  },
  components: {
    ProductCards,
    Category
  },
  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/shop/shoplist')
        .then(function(res){
          console.log(res);
          that.items = res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
