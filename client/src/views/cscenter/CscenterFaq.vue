<template>
  <div>
    <main class="profile-page">
      <CscenterSidebar/>
      <section class="relative py-16 bg-white mt-24 md:ml-64">
      
        <div class="container mx-auto">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg"
          >
              <div class="relative w-full px-auto max-w-full flex-grow flex-1">
                <h1
                    class="font-semibold text-lg text-left "
                >
                  공지사항
                </h1>
              </div>

            <div class="flex flex-wrap mt-5">
              <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                <div class="text-left">
                  <v-chip class="ma-2" color="#f4f4f4"> 전체 </v-chip>
                  <v-chip class="ma-2" color="#f4f4f4"> 레고 </v-chip>
                  <v-chip class="ma-2" color="#f4f4f4"> 베어브릭 </v-chip>
                </div>
              </div>
            </div>
              <div class="mt-10  border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 ">
                    <div class="container">
                      <div class="w-full mb-12 xl:mb-0  mt-1" style="min-height: 70vh">
                          <CscenterFaqList v-bind="items" :items="items" :title="title"/>
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
import CscenterFaqList from "@/components/Cards/Cscenter/CscenterFaqList.vue";
// import Pagination from "@/components/Pagination.vue" ;

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
          USER_ID:'',
        },

    }
  },
  components: {
    CscenterSidebar,
    CscenterFaqList,
    //Pagination,
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/cscenter')
        .then(function(res){
          that.items=res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>


