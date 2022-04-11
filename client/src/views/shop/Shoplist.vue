<template>
  <div>
    <Slide />
    <main class="profile-page ">
      <section class="relative py-8 bg-white" style="min-height: 100vh;">
        <div class="container">
          <!-- <v-form ref="form" @submit.prevent="send"> -->
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8  w-full"
          >
          <div class="px-6">
             <h3
                class="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center"
              >SHOP</h3>
          </div>
            <div class="flex flex-wrap mt-5">
              <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                <div class="text-left">
                  <v-chip class="ma-2" color="#f4f4f4" v-model="cate" @click="getProductList()" > 전체 </v-chip>
                  <v-chip class="ma-2" color="#f4f4f4"   v-model="cate" @click="goFilter('3,4,5')"> 레고 </v-chip>
                  <v-chip class="ma-2" color="#f4f4f4"   v-model="cate" @click="goFilter('6,7,8,9')"> 베어브릭 </v-chip>
                </div>
              </div>
            </div>
          
          <div class="flex mt-10">
            <div class="flex px-4 mb-5" style="width:25%;">
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
import Slide from '@/components/Cards/Slide.vue';

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
    Category,
    Slide
  },
  created() {
    this.getProductList()
  },
  methods:{
    getProductList:function(){
      var vm = this;
      this.$axios.get('http://localhost:8080/shop/shoplist')
        .then(function(res){
          //console.log("디비에서 결과 가져옴", res);
          vm.items = res.data;
          for(var i=0; i<res.data.length;i++)
          {  
            if(res.data[i].PRODUCT_BRAND =='LE')
              {
                vm.items[i].PRODUCT_BRAND = "레고";
                //console.log(vm.items[i].PRODUCT_BRAND);
              }
            else
             {
              vm.items[i].PRODUCT_BRAND = "베어브릭";
              //console.log(vm.items[i].PRODUCT_BRAND);
             }
          }
        })
        .catch(function(err){
          console.log(err);
        });
    },
    changeitems(e){
      //console.log("changeitems의 e 값",e);
      this.items = e;
    },
    goFilter(cate){
      //console.log("chip 버튼을 누름");
      //console.log(cate);
      this.$axios.post('http://localhost:8080/shop/filterCate',{
          cate:cate})
      .then( (res) => {			
          //console.log(res.data);
          this.items=res.data;
      })
      .catch((err)=>{
      console.log(err);
      });
    },
  }

};
</script>
