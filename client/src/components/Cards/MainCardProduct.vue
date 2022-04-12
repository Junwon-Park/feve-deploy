<template>

  <div class="w-full md:w-6/12  lg:w-4/12 xl:w-3/12 px-4 mb-5">
  <div
      class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0"
  >
    <div class="flex-auto pt-4" @click="goView(`${PRODUCT_KEY}`)" style="cursor: pointer;">
      <div class="flex flex-wrap">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <div class="w-full mb-5" style="overflow: hidden; width:15vw; height: 15vw;" >
            <img
                alt="아이템 사진"
                 style="object-fit: cover;border-radius: .5rem;  background: #f4f4f4; width:100%; height: 100%;"
                :src= "imageUrl + PRODUCT_PIC" crossorigin>
          </div>
          <h5 class="text-black uppercase font-bold text-xs underline">
            {{ PRODUCT_CATE.cate }}
          </h5>
          <span class="text-sm text-black">
            {{ PRODUCT_NAME}}
          </span>
          <span class="font-semibold text-sm text-blueGray-700 block">
            {{ minPrice }} 원
          </span>
        </div>
      </div>
      <p class="text-xs text-blueGray-400">
        <span class="whitespace-nowrap">즉시구매가</span>
      </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      minPrice:'',
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
    }
  },
  watch:{
    SELL_PRICE:function(){
      this.setMinPrice()
    }
  },
  props:{
    PRODUCT_KEY: {
      default: 0,
    },
    PRODUCT_NAME: {
      type: String,
      default: "Lego Firehouse Headquarters",
    },
    PRODUCT_BRAND: {
      type: String,
      default: "Lego",
    },
    PRODUCT_CATE: {
      default: 0,
    },
    PRODUCT_PIC: {
      type: String,
      default: "Architecture",
    },
    PRODUCT_ORIPRICE: {
      default: 550000
    },
    PRODUCT_MNUM: {
      type: String,
      default: "Lego",
    },
    PRODUCT_DELETE: {
      type: String,
      default: '0',
    },
    SELL_PRICE: {
      default: 550000
    },
  },
  created(){
    this.setMinPrice()
  },
  methods:{
    setMinPrice(){
      //console.log("this.item.MIN_PRICE: ", this.item.MIN_PRICE);
      this.minPrice = (this.SELL_PRICE == null) ? '-' : this.SELL_PRICE.toLocaleString('ko-KR') + "원";
    },

    goView(PRODUCT_KEY){
      this.$router.push({path:'./shopview',
        name:'Shopview',
        params:{
          PRODUCT_KEY: PRODUCT_KEY}
      });
    }
  }
}
</script>