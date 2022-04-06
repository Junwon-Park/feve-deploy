<template>
  <div class="text-center mt-auto">
    <v-pagination
        v-model="currentPage"
        @input="goPage"
        :length="pageSize"
        prev-icon="<"
        next-icon=">"
        color="black"
        class="my-5"
        :total-visible="5"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      pageSize:0,
      perPage: 0,
    }
  },
  props:{
    totalListCount :{
      required: true,
    },
    listPerPage:{
      required: true,
    }
  },
  watch:{
    totalListCount:function(){
      this.initPage();
    }
  },
  methods: {
    goPage(page){
      console.log("onPageChanged.page: ", page);
      this.$emit("onPageChanged", page);
    },

    initPage(){
      console.log("created: 쿼리 실행 후 가져온 레코드 수: ",this.totalListCount);
      console.log("한 페이지당 보여야 하는 레코드 수: ",this.listPerPage);

      let that = this;
      that.pageSize = Math.ceil(this.totalListCount / this.listPerPage);
      //console.log("that.pageSize: ", that.pageSize, "/this.totalListCount:", this.totalListCount, "/this.listPerPage", this.listPerPage);
      that.perPage=this.listPerPage;
      
      console.log("총 페이지수: ",this.pageSize)
    },
  },
}
</script>