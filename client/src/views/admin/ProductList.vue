<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-12">
        <AdminCardPageLists />
      </div>
      <div class="w-full xl:w-4/12 px-4 mt-12">
        <card-social-traffic />
      </div>
      <div class="w-full xl:w-8/12 mb-12 xl:mb-0 px-4 mt-12">
        <AdminCardPageLists />
      </div>
      <div class="w-full xl:w-4/12 px-4 mt-12">
        <card-social-traffic />
      </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/AdminCardPageLists.vue";
import CardSocialTraffic from "@/components/Cards/CardSocialTraffic.vue";
export default {
  name: "dashboard-page",
  components: {
    AdminCardPageLists,
    CardSocialTraffic,
  },
};
</script>
