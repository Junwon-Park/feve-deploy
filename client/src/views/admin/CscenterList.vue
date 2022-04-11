<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 90vh">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-24">
        <AdminCardCscenterPage
            v-bind="items"
            :items="items"
            :totalListCount="totalListCount"
            :pageSize="pageSize"
            :itemPerPage="itemPerPage"
            @startend="startend"
            :title="title"/>
    </div>
    </div>
  </div>
</template>
<script>
import AdminCardCscenterPage from "@/components/Cards/Admin/AdminCardCscenterPage.vue";

export default {
  data() {
    return {
      title: "문의 내역",
      totalListCount:0,
      limitStart:0,
      limitEnd:0,
      currentPage: 0,
      itemPerPage: 10,
      pageSize: 0,
      items:
        {
          CSCENTER_KEY: 0,
          CSCENTER_TITLE: '',
          CSCENTER_CONTENTS: '',
          CSCENTER_WDATE: '',
          CSCENTER_STATUS: '',
          CSCENTER_COMMENT: '',
          CSCENTER_COMMENT_WDATE: '',
          USER_KEY: '',
          USER_ID:'',
        },

    }
  },
  components: {
    AdminCardCscenterPage,
  },
  methods:{
    startend(start,end,reqpage) {
      let that = this;
      that.limitStart = start;
      that.limitEnd = end;
      that.currentPage= reqpage;
      //console.log(start, end, reqpage)

      this.$axios.post('http://localhost:8080/admin/cscenter', {
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
    this.$axios.get('http://localhost:8080/admin/cscenter/totalCnt')
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
    this.$axios.post('http://localhost:8080/admin/cscenter', {
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
