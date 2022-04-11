<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 90vh">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-24">
        <AdminCardPageLists
            v-bind="items"
            :totalListCount="totalListCount"
            :pageSize="pageSize"
            :itemPerPage="itemPerPage"
            :items="items"
            :title="title"
            @startend="startend"
            style="min-height: 59vh;" />
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
      totalListCount:0,
      limitStart:0,
      limitEnd:0,
      currentPage: 0,
      itemPerPage: 10,
      pageSize: 0,
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
  methods: {
    startend(start,end,reqpage) {
      let that = this;
      that.limitStart = start;
      that.limitEnd = end;
      that.currentPage= reqpage;
      //console.log(start, end, reqpage);

      this.$axios.post('http://localhost:8080/admin/loadproduct', {
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
  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/loadproduct/totalCnt')
        .then(function(res){
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
    this.$axios.post('http://localhost:8080/admin/loadproduct', {
      limitStart: 0,
      limitEnd: 10
    })
        .then(function(res){
          that.items = res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
