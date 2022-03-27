<template>
  <div>
    <div class="flex flex-wrap" style="min-height: 80vh;">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-12">
        <AdminCardPageLists />
      </div>
    </div>
  </div>
</template>
<script>
import AdminCardPageLists from "@/components/Cards/AdminCardPageLists.vue";
export default {
  components: {
    AdminCardPageLists,
  },
};
</script>
