<template>
  <v-row class="divide-y-b-gray mt-4" style="align-self:center">
    
    <v-col style="align-self:center" class="flex">
      <img
        :src= "imageUrl + item.Product.PRODUCT_PIC"
        style="border-radius:8px; width:5rem; height:5rem;"
        crossorigin
      >
      <v-col>
      <h5 class="font-bold underline">
        {{ item.Product.PRODUCT_BRAND }}
      </h5>
      <h5>
        {{ item.Product.PRODUCT_NAME }}
      </h5>
      </v-col>
    </v-col>
      
    <v-col style="align-self:center">
      <h5 class="font-bold underline">
      {{ item.strState }}
      </h5>
    </v-col>

    <v-col style="align-self:center">
      <h5 class="font-bold">
        {{ price.toLocaleString('ko-KR') }}원
      </h5>
    </v-col>
      
    <v-col style="align-self:center">
      <h5>
        {{ eDate }}
      </h5>
    </v-col>
      
    <!-- <v-list-item-action > -->
      <v-col class="flex">
        <v-col style="align-self:center"
        v-if="IsFinalize()">
          <v-btn
            style="background: #EF6253; color: white; border-radius: 8px;"
            rounded
            text
            @click="onFinalizeClicked(0)"
          >
            구매확정
          </v-btn>
        </v-col>

        <v-col style="align-self:center"
        v-if="IsFinalize()">
          <v-btn
            style="background: #999999; color: white; border-radius: 8px;"
            rounded
            text
            @click="onFinalizeClicked(1)"
          >
            구매취소
          </v-btn>
        </v-col>

        
        <v-col style="align-self:center"
        v-if="IsWaitDeliver()">
          <v-btn
            style="background: #EF6253; color: white; border-radius: 8px;"
            rounded
            text
            @click="onDeliverClicked(0)"
          >
            발송완료
          </v-btn>
        </v-col>

        <v-col style="align-self:center"
        v-if="IsWaitDeliver()">
          <v-btn
            style="background: #999999; color: white; border-radius: 8px;"
            rounded
            text
            @click="onDeliverClicked(1)"
          >
            판매취소
          </v-btn>
        </v-col>

      </v-col>
     <!-- </v-list-item-action> -->
    
  </v-row>
</template>

<script>
export default {
  props:{
    isFromBuy:Number, //0:BuyList, 1:SellList
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
      if(this.isFromBuy == 1)
        return false;
      // console.log("isFinalize.state: ", this.item.BUY_STATUS);
      // console.log("isFinalize.INSPECTION_STATUS: ", this.item.INSPECTION_STATUS);
      // console.log("isFinalize.INSPECTION_RESULT: ", this.item.INSPECTION_RESULT);

      if(this.item.BUY_STATUS == null || this.item.BUY_STATUS != '3' || this.item.INSPECTION_STATUS == null || this.item.INSPECTION_RESULT == null)
        return false;

      if(this.item.INSPECTION_STATUS == 1 && this.item.INSPECTION_RESULT == 1)
        return true;
      
      return false;
    },

    //true : 발송요청 버튼 표시
    IsWaitDeliver(){
      if(this.isFromBuy == 0)
        return false;

      //console.log("IswaitDeliver: ", this.item);
      if( (this.item.sell_status != null && this.item.sell_status == '3') || (this.item.BUY_STATUS != null && this.item.BUY_STATUS == '3') )
      {
        if(this.item.INSPECTION_STATUS == null)
          return true;
      }
        return false;
    },

    onFinalizeClicked(decision){
      this.$emit("onFinalizeClicked", this.item, decision);
    },

    onDeliverClicked(decision){
      this.$emit("onDeliverClicked", this.item, decision);
    }
  },
};
</script>
