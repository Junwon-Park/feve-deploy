<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-12">
        <AdminCards />
      </div>
      <div class="w-full xl:w-4/12 px-4 mt-12">
        <AdminCardCscenterPage />
      </div>
      <div class="w-full  mb-12 xl:mb-0 px-4">
        <AdminCards />
      </div>
    </div>
  </div>
</template>
<script>
import AdminCards from "@/components/Cards/AdminCards.vue";
import AdminCardCscenterPage from "@/components/Cards/AdminCardCscenterPage.vue";
export default {
  name: "dashboard-page",
  components: {
    AdminCards,
    AdminCardCscenterPage,
  },
};
</script>
