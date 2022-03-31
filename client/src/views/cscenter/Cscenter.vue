<template>

  <div>
     
    <main class="profile-page">
      
        <CscenterSidebar :currentViewState="currentViewState" @onViewStateChanged="onViewStateChanged"/>
     
      
     
      <section class="relative py-15 bg-white-200">
        <div class="container mx-auto px-5">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-auto"
          >
            <div class="px-5">
              <div class="mt-10 py-20 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 px-5">
                    <CscenterNotice />
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
import CscenterNotice from "@/components/Cards/Cscenter/CscenterNotice.vue";










export default {
  data() {
    return {
     
    };
  },
  components: {
   
    CscenterNotice,
    CscenterSidebar,
    
  },
};
</script>
