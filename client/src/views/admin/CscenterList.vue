<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full mb-12 xl:mb-0 px-4 mt-12" style="min-height: 70vh">
        <AdminCardCscenterPage v-bind="items" :items="items" :title="title"/>
        <Pagination />
    </div>
    </div>
  </div>
</template>
<script>
import AdminCardCscenterPage from "@/components/Cards/Admin/AdminCardCscenterPage.vue";
import Pagination from "@/components/Pagination.vue" ;

export default {
  data() {
    return {
      title: "문의 내역",
      items:
        {
          CSCENTER_KEY: 0,
          CSCENTER_TITLE: '',
          CSCENTER_CONTENTS: '',
          CSCENTER_WDATE: '',
          CSCENTER_STATUS: '',
          CSCENTER_COMMENT: '',
          CSCENTER_COMMENT_WDATE: '',
          USER_KEY: '',
          USER_ID:'',
        },

    }
  },
  components: {
    AdminCardCscenterPage,
    Pagination,
  },

  created() {
    let that = this;
    this.$axios.get('http://localhost:8080/admin/cscenter')
        .then(function(res){
          that.items=res.data;
        })
        .catch(function(err){
          console.log(err);
        });
  }
};
</script>
