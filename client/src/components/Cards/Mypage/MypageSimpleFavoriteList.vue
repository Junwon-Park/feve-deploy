<template>
    <div class="flex flex-wrap">
      <div class="w-full xl:w-3/12 lg:w-4/12 md:w-4/12 px-4 mb-5" v-for="item in items" :key="item.PRODUCT_NAME">
        
          <div >
            <img
              :src= "url + item.PRODUCT_PIC"
              style="border-radius: 8px;"
            >

            <h5 class="font-bold underline mt-2">
              {{ item.PRODUCT_BRAND }}
            </h5>
            <h5>
            {{ item.PRODUCT_NAME }}
            </h5>
            <h5 class="font-bold mt-1">
              {{ item.PRODUCT_ORIPRICE.toLocaleString('ko-KR') }}원
            </h5>
            <h5 class="text-gray-400" style="font-size: 0.7rem; line-height: 0.75rem; margin-top:-0.2rem">
              즉시 구매가
            </h5>
          </div>
      </div>
    </div>
</template>

<script>
export default {
  props:{
    items:Array,
  },
  data() {
    return {
      url: this.$store.getters.LocalUrl + '/product/',
    }
  },
  created(){
    console.log(this.url);
  },
};
</script>
