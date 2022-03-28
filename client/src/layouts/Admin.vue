<template>
  <div>
    <div class="relative md:ml-64 bg-blueGray-100">
      <div class="px-4 md:px-10 mx-auto w-full ">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "admin-layout",
  components: {
    },
};
</script>
