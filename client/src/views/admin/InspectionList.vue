<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-12">
        <AdminInspecLists v-bind="items" :items="items" :title="title"/>
        <Pagination />
    </div>
    </div>
  </div>
</template>
<script>
import AdminInspecLists from "@/components/Cards/Admin/AdminInspecLists.vue";
import Pagination from "@/components/Pagination.vue" ;
export default {
  data() {
    return {
      title: "검수리스트",
      dialog: false,
      items:[{
          PRODUCT_KEY: 0,
          PRODUCT_BRAND: "",
          PRODUCT_CATE: "",
          PRODUCT_NAME: "",
          PRODUCT_ORIPRICE:0,
          INSPECTION_KEY: 0,
          INSPECTION_ADATE: "",
          INSPECTION_DATE: 0,
          INSPECTION_RDATE: 0,
          INSPECTION_RESULT: 0,
          INSPECTION_STATUS: "",
          USER_ID: '',
          inspecCount: 1,
          isArrayNull: false,
        }],
    }
  },
  components: {
    AdminInspecLists,
    Pagination,
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadInspection')
        .then(function(res){
          that.items=res.data;
          if(res.data.length===0) {
            that.items.isArrayNull=false
          }
          console.log("isNulllllllllll",that.items.isArrayNull)
        })
        .catch(function(err){
          console.log(err);
        });

  },
  methods: {

  },
};
</script>
