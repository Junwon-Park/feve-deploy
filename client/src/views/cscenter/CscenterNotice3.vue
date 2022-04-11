<template>

  <div>
     
    <main class="profile-page">
      
        <CscenterSidebar/>
     
      
     
      <section class="relative py-15 bg-white-200 md:ml-64" style="min-height: 90vh;">
        <div class="container mx-auto px-5">
          <div
            class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded-lg -mt-auto"
          >
            <div class="px-5">
              <div class="mt-10 py-20 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                   <div class="w-full mb-12 px-5">
                    <CscenterNotice3 />
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
import CscenterNotice3 from "@/components/Cards/Cscenter/CscenterNotice3.vue";

export default {
  data() {
    return {
     
    };
  },
  components: {
   
    CscenterNotice3,
    CscenterSidebar,
    
    
  },
};
</script>
