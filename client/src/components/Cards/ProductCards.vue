<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <div class="w-full mb-5" style="height: 150px; overflow: hidden;" >
            <img :src="require(`@/assets/img/${PRODUCT_PIC}.jpg`)" alt="아이템 사진" style="object-fit: cover;">
          </div>
          <h5 class="text-blueGray-400 uppercase font-bold text-xs">
            {{ PRODUCT_BRAND }}
          </h5>
           <h5 v-if="false">
           {{PRODUCT_KEY}}
          </h5>
          <span class="font-semibold text-xl text-blueGray-700">
            {{ PRODUCT_NAME }}
          </span>
          <span v-if="false">
            {{PRODUCT_CATE}}
          </span>
        </div>
      </div>
      <p class="text-lg text-black mt-4">
        <span class="whitespace-nowrap">{{ SELL_PRICE }}원</span>
      </p>
    </div>
  </div>
</template>
<script>
import itemPic5 from "@/assets/img/product-lego5.jpg";
export default {
  props: {
    PRODUCT_KEY: {
      default: "0",
    },
    PRODUCT_PIC: {
      type: String,
      default: itemPic5,
    },
    PRODUCT_BRAND: {
      type: String,
      default: "LEGO",
    },
    PRODUCT_NAME: {
      type: String,
      default: "Standard lego",
    },
    SELL_PRICE: {
      default: "350,897",
    },
    PRODUCT_CATE: {
      default: "3",
    }
  },
};
</script>
