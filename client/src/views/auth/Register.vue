<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
    <div class="w-full px-4">
      <CardSignup />
    </div>
    </div>
  </div>
</template>
<script>
import CardSignup from "@/components/Cards/CardSignup.vue";

export default {
  components: {
    CardSignup,
  },
};
</script>
