<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-12" v-for="(item, idx) in items" :key="idx">
        <AdminCardPageLists v-bind="item" />
      </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/AdminCardPageLists.vue";
export default {
  data() {
    return {
      items: [
        {
          title: "상품리스트",
          seq: '',
          PRODUCT_NAME: '',
          PRODUCT_BRAND: '',
          PRODUCT_CATE: '',
          PRODUCT_ORIPRICE: 0,
          // dealCount: 0,
          // inspecCount: 0,
          // inspecStatus: 0,
          // inspecComplete: 0,
        },
      ]
    }
  },
  components: {
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
