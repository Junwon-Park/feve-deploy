<template>
    <div class="flex flex-wrap">
      <div class="w-full lg:w-4/12 md:w-4/12 px-4 my-5"
           style="margin-bottom: 15vh;"
           v-for="item in items" :key="item.PRODUCT_NAME"
      >
        
          <div style="width: 200px; height: 200px; border-radius: 8px;">
            <img
              :src= "imageUrl + item.PRODUCT_PIC"
              style="object-fit: cover; width: 100%; height: 100%;"
              crossorigin
            >
          </div>

            <h5 class="font-bold underline mt-2">
              {{ item.PRODUCT_BRAND }} sdfsdfsdfdsfdsfsd
            </h5>
            <h5>
            {{ item.PRODUCT_NAME }}
            </h5>
            <h5 class="font-bold mt-1">
              {{ item.MIN_PRICE.toLocaleString('ko-KR') }}원
            </h5>
            <h5 class="text-gray-400" style="font-size: 0.7rem; line-height: 0.75rem; margin-top:-0.2rem">
              즉시 구매가
            </h5>
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
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
    }
  },
};
</script>
