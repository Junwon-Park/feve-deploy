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
                          <CscenterQnaCards 
                          v-bind="items" 
                          :items="items" 
                          :title="title"
                          @startend="startend"
                          />
                          <Pagination />
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
import CscenterQnaCards from "@/components/Cards/Cscenter/CscenterQnaCards.vue";
import Pagination from "@/components/Pagination.vue" ;


export default {
  data() {
    return {
      title: "문의 내역",
      
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
          
        },

    }
  },
  components: {
    
    CscenterSidebar,
    CscenterQnaCards,
    Pagination,
  },
 mthod:{
   startend(start,end,reqpage) {
     let that = this;
     that.limitStart = start;
     that.limitEnd = end;
     that.currentPage = reqpage;
     console.log(start, end, reqpage)

     
   }
 
  }
};
</script>


