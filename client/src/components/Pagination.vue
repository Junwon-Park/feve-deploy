<template>
  <div class="text-center mt-auto">
    <v-pagination
        v-model="currentPage"
        :length="pageSize"
        prev-icon="<"
        next-icon=">"
        color="black"
        @input="nextPage"
        class="my-5"
        :total-visible="5"
        :aria-controls="myAriaControls"
    ></v-pagination>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentPage: 1,
      pageSize:0,
      perPage: 0,
    }
  },
  props:{
    totalList :{
      required: true,
    },
    listPerPage:{
      required: true,
    },
    myAriaControls: {
      type: String,
      default: '',
    }
  },
  methods: {
    nextPage(){
      console.log('??D?FS?F?SD?F');
    }
  },
  created(){
    console.log("쿼리 실행 후 가져온 레코드 수: ",this.$props.totalList)
    console.log("한 페이지당 보여야 하는 레코드 수: ",this.$props.listPerPage)

    let that = this;
    that.pageSize = Math.ceil(this.$props.totalList / this.$props.listPerPage);
    that.perPage=this.$props.listPerPage;

    console.log("총 페이지수: ",this.pageSize)
  }
}
</script>