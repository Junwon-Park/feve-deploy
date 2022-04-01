<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-12">
        <AdminCardPageLists v-bind="items" :items="items" :title="title">
                <AdminCards  />
        </AdminCardPageLists>
    </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/Admin/AdminCardPageLists.vue";
import AdminCards from "@/components/Cards/Admin/AdminCards.vue";
export default {
  data() {
    return {
      title: "상품리스트",
      items: [{
          PRODUCT_KEY: 0,
          PRODUCT_NAME: '',
          PRODUCT_BRAND: '',
          PRODUCT_CATE: '',
          PRODUCT_ORIPRICE: 0,
          PRODUCT_MNUM: '',
          PRODUCT_PIC: "",
          PRODUCT_DESC: "",
        }],

    }
  },
  components: {
    AdminCards,
    AdminCardPageLists,
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadproduct')
        .then(function(res){
          console.log(res);
          that.items = res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
