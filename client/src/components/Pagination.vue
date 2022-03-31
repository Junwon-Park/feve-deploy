<template>
  <div class="text-center">
    <v-pagination
        v-model="page"
        :length="4"
        prev-icon="<"
        next-icon=">"
        color="indigo"
        class="my-5"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      page: 1,
    }
  },
}
</script>