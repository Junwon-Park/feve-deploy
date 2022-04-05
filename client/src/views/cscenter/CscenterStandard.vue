<template>
  <div>
    <main class="profile-page">
      <CscenterSidebar/>
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"
          style="
            background-image: url('https://brickarchitect.com/wp-content/uploads/2021/05/JB2A0922.jpg');
          "
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-50 bg-black"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);"
        >
          <svg
            class="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              class="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
      <section class="relative py-16 bg-blueGray-200">
      
        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
            <div class="px-6">
             
              <div class="text-center mt-12">
                <h3
                  class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                >
                    검수 기준 
                </h3>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 px-4">
                    <div class="container">
                      <div class="w-full mb-12 xl:mb-0 px-4 mt-12" style="min-height: 70vh">
                          <CscenterStandardList v-bind="items" :items="items" :title="title"/>
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
import CscenterStandardList from "@/components/Cards/Cscenter/CscenterStandardList.vue";
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
    CscenterStandardList,
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


