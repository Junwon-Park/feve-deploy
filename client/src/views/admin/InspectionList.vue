<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-12">
        <AdminInspecLists v-bind="items" :items="items" :title="title"/>
    </div>
    </div>
  </div>
</template>
<script>
import AdminInspecLists from "@/components/Cards/Admin/AdminInspecLists.vue";
export default {
  data() {
    return {
      title: "검수리스트",
      items:
        {
          PRODUCT_KEY: 0,
          PRODUCT_NAME: '',
          PRODUCT_BRAND: '',
          PRODUCT_CATE: '',
          PRODUCT_ORIPRICE: '',
          USER_ID: '',
          inspecCount:0,
          INSPECTION_STATUS: '',
          INSPECTION_RESULT: '',
          INSPECTION_RDATE: ''
        },
    }
  },
  components: {
    AdminInspecLists,
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadInspection')
        .then(function(res){
          that.items=res.data;
          // that.items.PRODUCT_KEY= res.data[0].Product.PRODUCT_KEY;
          // that.items.PRODUCT_NAME= res.data[0].Product.PRODUCT_NAME;
          // that.items.PRODUCT_BRAND= res.data[0].Product.PRODUCT_BRAND;
          // that.items.PRODUCT_CATE= res.data[0].Product.PRODUCT_CATE;
          // that.items.PRODUCT_ORIPRICE= res.data[0].Product.PRODUCT_ORIPRICE;
          // that.items.USER_ID= res.data[0].User.USER_ID;
          // that.items.inspecCount= 1;
          // that.items.INSPECTION_STATUS=res.data.INSPECTION_STATUS;
          // that.items.INSPECTION_RESULT=res.data.INSPECTION_RESULT;
          // that.items.INSPECTION_RDATE=res.data.INSPECTION_RDATE;
        })
        .catch(function(err){
          console.log(err);
        });
  },
};
</script>
