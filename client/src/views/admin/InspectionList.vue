<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 90vh">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-24">
        <AdminInspecLists
            v-bind="items"
            :totalListCount="totalListCount"
            :pageSize="pageSize"
            :itemPerPage="itemPerPage"
            :items="items"
            @startend="startend"
            :title="title"/>
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
      dialog: false,
      totalListCount:0,
      limitStart:0,
      limitEnd:0,
      currentPage: 0,
      itemPerPage: 10,
      pageSize: 0,
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
        }],
    }
  },
  components: {
    AdminInspecLists,
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadInspection/totalCnt')
        .then(function(res){
          that.items=res.data;
          that.totalListCount = res.data[0].totalCnt;
          that.pageSize=Math.ceil(that.totalListCount/that.itemPerPage);
          //console.log("페이지 버튼 개수: ",Math.ceil(that.totalListCount/that.itemPerPage))
        })
        .catch(function(err){
          console.log(err);
        });
  },
  mounted(){
    let that = this;
    this.$axios.post('http://localhost:8080/admin/loadInspection', {
      limitStart: 0,
      limitEnd: 10
    })
        .then(function(res){
          that.items=res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  },
  methods: {
    startend(start,end,reqpage) {
      let that = this;
      that.limitStart = start;
      that.limitEnd = end;
      that.currentPage = reqpage;
      //console.log(start, end, reqpage);

      this.$axios.post('http://localhost:8080/admin/loadInspection', {
        limitStart: this.limitStart,
        limitEnd: this.limitEnd,
        requestPage: this.currentPage,
      })
          .then(function(res){
            that.items = res.data;
            //console.log(this.items)
          })
          .catch(function(err){
            console.log(err);
          });
    }
  },
};
</script>
