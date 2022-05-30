<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full px-4">
        <CardOauthUserInfo />
      </div>
    </div>
  </div>
</template>
<script>
import CardOauthUserInfo from '@/components/Cards/CardOauthUserInfo.vue';

export default {
  components: {
    CardOauthUserInfo
  }
};
</script>
