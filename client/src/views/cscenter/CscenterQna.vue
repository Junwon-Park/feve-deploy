<template>
  <div>
    <main class="profile-page">
      <CscenterSidebar />
      <section class="relative py-16  md:ml-64">
      
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg "
          >
            <div class="px-6">
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 px-4">
                    <div class="container">
                      <div class="w-full mb-12 xl:mb-0 px-4 mt-12" style="min-height: 70vh">
                          <CscenterQnaList 
                          v-bind="items"
                          :items="items"
                          :totalListCount="totalListCount"
                          :pageSize="pageSize"
                          :itemPerPage="itemPerPage"
                          @startend="startend"
                          :title="title"
                          />
                         
                      </div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    </main>
  </div>
</template>
<script>
import CscenterSidebar from "@/components/Sidebar/CscenterSidebar.vue";
import CscenterQnaList from "@/components/Cards/Cscenter/CscenterQnaList.vue";



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
          USER_NAME:''
          
        },

    }
  },
  components: {
    
    CscenterSidebar,
    CscenterQnaList,
  
  },
 methods:{
   startend(start,end,reqpage) {
     let that = this;
     that.limitStart = start;
     that.limitEnd = end;
     that.currentPage = reqpage;
     console.log(start, end, reqpage)

     this.$axios.post('http://localhost:8080/cscenter/cscenterInsert/cscenter', {
        limitStart: this.limitStart,
        limitEnd: this.limitEnd,
        requestPage: this.currentPage,
      })
          .then(function(res){
            that.items = res.data;
            console.log(this.items)
          })
          .catch(function(err){
            console.log(err);
          });
   }
 
  },
  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/cscenter/cscenterInsert/totalCnt')
        .then(function(res){
          that.totalListCount = res.data[0].totalCnt;
          that.pageSize=Math.ceil(that.totalListCount/that.itemPerPage);
          console.log("페이지 버튼 개수: ",Math.ceil(that.totalListCount/that.itemPerPage))
        })
        .catch(function(err){
          console.log(err);
        });
  },

   mounted(){
    let that = this;
    this.$axios.post('http://localhost:8080/cscenter/cscenterInsert/cscenter', {
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


