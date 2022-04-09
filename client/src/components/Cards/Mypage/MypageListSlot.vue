<template>
          <div class="divide-y-b-gray flex"
          style="align-items:center">
            <img
              :src= "imageUrl + item.Product.PRODUCT_PIC"
              style="border-radius: 8px; width:5rem; height:5rem; margin-top:1rem; margin-bottom:1rem"
              crossorigin
            >
            
            <div class="ml-3">
                <h5 class="font-bold underline mt-2">
                {{ item.Product.PRODUCT_BRAND }}
                </h5>
                <h5>
                {{ item.Product.PRODUCT_NAME }}
                </h5>
            </div>
            &nbsp;

            <!-- <h5 class="text-gray-400" style="font-size: 0.7rem; line-height: 0.75rem; margin-top:-0.2rem">즉시 구매가</h5> -->

            <div>
              <h5 class="font-bold underline mt-2">
              {{ item.strState }}
              </h5>
            </div>
            &nbsp;

            <div>
              <h5 class="font-bold mt-1">
                {{ price.toLocaleString('ko-KR') }}원
              </h5>
            </div>
            &nbsp;

            <div>
              <h5>
                {{ eDate }}
              </h5>
            </div>
                
          </div>
</template>

<script>

export default {
  props:{
    item:Object,
    price:Number,
    state:Number,
    eDate:String,
  },
  data() {
    return {
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
    }
  },
};
</script>
