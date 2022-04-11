<template>
  <div class="">
    <main class="profile-page">
      <CscenterSidebar/>
      <section class="relative py-16 mt-24 md:ml-64">

        <div class="container mx-auto px-4">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg "
          >
            <div class="px-6">

              <div class="relative w-full px-auto max-w-full flex-grow flex-1 border-b-2 py-4" style="border-color: black;">
                <h1
                    class="font-semibold text-lg text-left "
                >
                  검수 기준
                </h1>
              </div>
              <div class="mt-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12">
                    <div class="">
                      <div class="w-full mb-12 xl:mb-0 " style="min-height: 70vh">
                          <CscenterStandardList v-bind="items" :items="items" :title="title"/>
                         
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
  
  },

};
</script>


