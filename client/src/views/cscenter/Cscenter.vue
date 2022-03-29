<template>

  <div>
     
    <main class="profile-page">
      
        <CscenterSidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>
     
      
     
      <section class="relative py-20 bg-white-200">
        <div class="container mx-auto px-10">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-auto"
          >
            <div class="px-10">
              <div class="flex flex-wrap justify-center">
                <div
                  class="w-full lg:w-3/12 px-4 lg:order-10 flex justify-center"
                >
                </div> 
              </div>
              <div class="text-center mt-20 ">
                <h3 class="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  고객센터
                </h3>
              </div>
              <div class="mt-10 py-5 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 px-4">
                    <card-table />
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
import CardTable from "@/components/Cards/CardTable.vue";



export default {
  data() {
    return {
     
    };
  },
  components: {
    CardTable,
    CscenterSidebar,
  },
};
</script>
