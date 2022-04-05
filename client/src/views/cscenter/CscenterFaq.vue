<template>
  <div>
    <main class="profile-page">
      <CscenterSidebar/>
      <section class="relative py-16 bg-white mt-24 md:ml-64">
      
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg"
          >
            <div class="px-6">
             
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                    자주 묻는 질문
                </h3>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 px-4">
                    <div class="container">
                      <div class="w-full mb-12 xl:mb-0 px-4 mt-12" style="min-height: 70vh">
                          <CscenterFaqList v-bind="items" :items="items" :title="title"/>
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
import CscenterFaqList from "@/components/Cards/Cscenter/CscenterFaqList.vue";
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
          USER_ID:'',
        },

    }
  },
  components: {
    CscenterSidebar,
    CscenterFaqList,
    Pagination,
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


