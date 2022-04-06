<template>
          <div class="divide-y-b-gray flex"
          style="align-items:center">
            <img
              :src= "imageUrl + item.PRODUCT_PIC"
              style="border-radius: 8px; width:5rem; height:5rem; margin-top:1rem; margin-bottom:1rem"
              crossorigin
            >

            <div class="ml-3">
                <h5 class="font-bold underline mt-2">
                {{ item.PRODUCT_BRAND }}
                </h5>
                <h5>
                {{ item.PRODUCT_NAME }}
                </h5>
                <h5 class="font-bold mt-1">
                {{ item.MIN_PRICE.toLocaleString('ko-KR') }}원
                </h5>
            </div>
            <!-- <h5 class="text-gray-400" style="font-size: 0.7rem; line-height: 0.75rem; margin-top:-0.2rem">
              즉시 구매가
            </h5> -->
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-btn
                  style="background: #EF6253; color: white;"
                  rounded
                  text
              >
                구매
              </v-btn>
            </v-list-item-action>
          </div>
</template>

<script>
export default {
  props:{
    item:Object,
  },
  data() {
    return {
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
    }
  },
};
</script>
