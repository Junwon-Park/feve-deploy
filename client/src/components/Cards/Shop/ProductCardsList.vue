<template>
  <div>
  <div class="w-full px-4 mb-5 flex flex-wrap">
      <ProductCards 
      v-for="(item,i) in items" 
      :key="i" 
      v-bind="item"
      :items="items" />
  </div>
    <Pagination
        :pageSize="pageSize"
        @onPageChanged="onPageChanged"
    />
  </div>
</template>
<script>
import ProductCards from "@/components/Cards/Shop/ProductCards.vue";
import Pagination from "@/components/Pagination.vue" ;
export default {
  props: {
    items: {
      required: false
    },
    pageSize:Number,
    itemPerPage: Number,
    totalListCount: Number,
  },
  computed:{
    rows(){
      return this.items.length
    }
  },
  data() {
    return {
      requestPage: 0,
      currentPage: 0,
      item:{
        PRODUCT_KEY:0,
        PRODUCT_PIC:'',
        PRODUCT_NAME: '',
        PRODUCT_BRAND: '',
        PRODUCT_CATE:0,
        SELL_PRICE: 0
      }
    }
  },
  components: {
    ProductCards,
    Pagination
  },
  methods: {
    onPageChanged(page){
      let requestPage = page;
      let sendStart = (page -1) * this.itemPerPage;
      let sendEnd=page * this.itemPerPage -1;
      //console.log("sendStart: ",sendStart, "sendEnd: ", sendEnd)

      this.$emit("startend", sendStart, sendEnd, requestPage);
    }
  },
}
</script>