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
        <div class="container">
          <!-- <v-form ref="form" @submit.prevent="send"> -->
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
                <v-chip class="ma-2" v-model="cate" @click="goFilter('3,4,5,6,7,8,9')" > 전체 </v-chip>
                <v-chip class="ma-2" color="primary" v-model="cate" @click="goFilter('3,4,5')"> 레고 </v-chip>
                <v-chip class="ma-2" color="secondary" v-model="cate" @click="goFilter('6,7,8,9')"> 베어브릭 </v-chip>
               </div>
            </div>
          </div>
          <hr />
          
          <div class="flex mt-5">
            <div class="flex w-full lg:w-3/12 px-4 mb-5">
              <Category ref="category" @changeitems="changeitems($event)"/>
            </div>
            <div class="w-full px-4 mb-5 flex flex-wrap">
              <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-5" v-for="(item,i) in items" :key="i">
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
import ProductCards from "@/components/Cards/Shop/ProductCards.vue";
import team2 from "@/assets/img/team-2-800x800.jpg";
import legoBg from "@/assets/img/bg-lego5.jpg";
import productLego1 from "@/assets/img/product-lego1.jpg";
import Category from './Category';

export default {
  data() {
    return {
      team2,
      legoBg,
      productLego1,

      items: [
        {
          PRODUCT_KEY:0,
          PRODUCT_PIC:'',
          PRODUCT_NAME: '',
          PRODUCT_BRAND: '',
          PRODUCT_CATE:0,
          SELL_PRICE: 0
        }
      ],

      cate:'',
      price:''
    };
  },
  components: {
    ProductCards,
    Category
  },
  beforeCreate() {
    var vm = this;
    this.$axios.get('http://localhost:8080/shop/shoplist')
        .then(function(res){
          // console.log("디비에서 결과 가져옴", res);
          // console.log("res.data값은?", res.data);
          vm.items = res.data;
          // console.log("res.data[0].Sells[0] 값은?",res.data[0].Sells[0]);
          // console.log("res.data[0].Sells[0].SELL_PRICE의 값은?",res.data[0].Sells[0].SELL_PRICE);
          // for(const i in vm.items)
          // {
          //   console.log(res.data[i].Sells[0].SELL_PRICE);
          //   vm.items.SELL_PRICE=res.data[i].Sells[0].SELL_PRICE;
          // }
        })
        .catch(function(err){
          console.log(err);
        });
  },
  methods:{
    changeitems(e){
      console.log("changeitems의 e 값",e);
      this.items = e;
    },
    goFilter(cate){
      console.log("chip 버튼을 누름");
      console.log(cate);
      this.$axios.post('http://localhost:8080/shop/min',{
          cate:cate})
      .then( (res) => {			
          console.log(res.data);
          this.items=res.data;
      })
      .catch((err)=>{
      console.log(err);
      });
    }

  //  computed() {
  //   var PRODUCT_PIC = this.PRODUCT_PIC;
  //   this.$axios.get('http://localhost:8080/shop/shoplist')
  //       .then(function(res){
  //         console.log(res);
  //         PRODUCT_PIC = res.data.PRODUCT_PIC;
  //       })
  //       .catch(function(err){
  //         console.log(err);
  //       });
  }

};
</script>
