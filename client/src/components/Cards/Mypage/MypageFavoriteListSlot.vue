<template>
          <div class="divide-y-b-gray flex"
          style="align-items:center"
          type="button"
          @click="onSlotClicked"
          >
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
            </div>
            
            <v-spacer></v-spacer>
            <v-list-item-action class="mt-8" style="height: 4rem; width:10rem;">
              <v-btn
                class="flex"
                style="background: #EF6253; border-radius:8px; height:49px !important; overflow:hidden;"
                text
                @click="onBuyButtonClicked"
              >
                <v-col>
                  <h5 class="buyB" style="color:white; font-size:1.1rem; font-weight:bold;">
                    구매
                  </h5>
                </v-col>
                
                <v-col style="text-align:left;">
                  <h5 style="color:white;  font-size:1rem; font-weight:bold;">
                    {{ minPrice }}
                  </h5>
                  <h5 style="color:white; font-size:0.7rem; line-height:0.75rem; margin-top:0rem ">
                    즉시 구매가
                  </h5>
                </v-col>
              </v-btn>

              <h5 
              style="font-size:0.7rem; line-height:0.75rem; margin-top:0.2rem; text-decoration: underline;"
              type="button"
              @click="onDeleteClicked"
              >
                삭제
              </h5>
            </v-list-item-action>
          </div>
</template>

<style>
h5.buyB::after { 
  content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 63px;
    width: 1px;
    background-color: rgba(34,34,34,.1);
}
</style>

<script>
export default {
  props:{
    item:Object,
  },
  data() {
    return {
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
      minPrice:'',
    }
  },
  watch:{
    item: function() {
          // console.log('Prop changed: ', newVal, ' | was: ', oldVal)
          this.setMinPrice();
    },
  },
  created(){
    this.setMinPrice();
  },
  methods:{
    setMinPrice(){
      //console.log("this.item.MIN_PRICE: ", this.item.MIN_PRICE);
      this.minPrice = (this.item.MIN_PRICE == null) ? '-' : this.item.MIN_PRICE.toLocaleString('ko-KR') + "원";
    },

    onSlotClicked(){
      //console.log("onSlotClicked.name: ", this.item.PRODUCT_NAME);
      this.$router.push({path:'./shopview',
        name:'Shopview',
        params:{
          PRODUCT_KEY:this.item.PRODUCT_KEY
        }
      });
    },

    onBuyButtonClicked(event)
    {
      event.stopPropagation();

      this.$router.push({path:'/buy',
        name:"Buyselect",
          params:{
            PRODUCT_KEY:this.item.PRODUCT_KEY
            }
          });
    },

    onDeleteClicked(event){
      event.stopPropagation();
      this.$emit("onDeleteClicked", this.item);
    }
  },
};
</script>
