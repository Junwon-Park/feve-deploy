<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 90vh">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-24">
        <AdminCardPageLists v-bind="items" :totalList="totalList" :items="items" :title="title"  style="min-height: 59vh;" />
    </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/Admin/AdminCardPageLists.vue";
export default {
  data() {
    return {
      title: "상품리스트",
      totalList:0,
      items: [{
          PRODUCT_KEY: 0,
          PRODUCT_NAME: '',
          PRODUCT_BRAND: '',
          PRODUCT_CATE: '',
          PRODUCT_ORIPRICE: 0,
          PRODUCT_MNUM: '',
          PRODUCT_PIC: "",
          PRODUCT_DELETE:'',
          PRODUCT_DESC: "",
        }],
    }
  },
  components: {
    AdminCardPageLists,
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadproduct')
        .then(function(res){
          that.items = res.data;
          that.totalList=that.items.length;
          console.log(that.totalList)
          console.log(that.items.length)
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
