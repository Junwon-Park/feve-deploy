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
            &nbsp;
            
            <div v-if="IsFinalize()" >
            <v-spacer></v-spacer>
            <v-list-item-action>
              <v-btn
                  style="background: #EF6253; color: white;"
                  rounded
                  text
                  @click="onFinalizeClicked(0)"
              >
                구매확정
              </v-btn>

              <v-btn
                  style="background: #EF6253; color: white;"
                  rounded
                  text
                  @click="onFinalizeClicked(1)"
              >
                구매취소
              </v-btn>
              </v-list-item-action>
            </div>
          </div>
</template>

<script>

export default {
  props:{
    slotKey:Number,
    item:Object,
    price:Number,
    eDate:String,
  },
  data() {
    return {
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
    }
  },
  methods: {
    IsFinalize(){
      // console.log("isFinalize.state: ", this.item.BUY_STATUS);
      // console.log("isFinalize.INSPECTION_STATUS: ", this.item.INSPECTION_STATUS);
      // console.log("isFinalize.INSPECTION_RESULT: ", this.item.INSPECTION_RESULT);

      if(this.item.BUY_STATUS == null || this.item.BUY_STATUS != '3' || this.item.INSPECTION_STATUS == null || this.item.INSPECTION_RESULT == null)
        return false;

      if(this.item.INSPECTION_STATUS == 1 && this.item.INSPECTION_RESULT == 1)
        return true;
      
      return false;
    },

    onFinalizeClicked(decision){
      this.$emit("onFinalizeClicked", this.slotKey, decision);
    },
  },
};
</script>
