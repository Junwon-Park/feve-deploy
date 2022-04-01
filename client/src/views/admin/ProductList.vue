<template>
  <div>
    <div class="flex flex-wrap" >
      <div class="w-full mb-12 xl:mb-0 px-4 mt-12">
        <AdminCardPageLists v-bind="items" :items="items" :title="title"  style="min-height: 80vh;">
                <AdminCards  />
        </AdminCardPageLists>
        <Pagination />
    </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/Admin/AdminCardPageLists.vue";
import AdminCards from "@/components/Cards/Admin/AdminCards.vue";
import Pagination from "@/components/Pagination.vue" ;
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
          PRODUCT_DELETE:'',
          PRODUCT_DESC: "",
          isArrayNull: false
        }],

    }
  },
  components: {
    AdminCards,
    AdminCardPageLists,
    Pagination,
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadproduct')
        .then(function(res){
          that.items = res.data;
          if(res.data.length===0) {
               that.items.isArrayNull=false
            }
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
