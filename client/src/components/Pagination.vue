<template>
  <div class="text-center mt-auto">
    <v-pagination
        v-model="currentPage"
        @input="goPage"
        :length="pageSize"
        prev-icon="<"
        next-icon=">"
        color="black"
        class="my-5"
        :total-visible="5"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
    }
  },
  props:{
    pageSize:{
      required: true,
    },
  },
  methods: {
    goPage(page){
      this.$emit("onPageChanged", page);
    },
  },
}
</script>