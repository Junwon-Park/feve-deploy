<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
  >

    <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
          <h3 class="font-semibold text-base text-blueGray-700">
            {{ title }}
          </h3>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg-transparent border-collapse">
        <thead>
        <tr>
          <th
              class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
              v-for="(table, idx) in table" :key="idx"
          >
            {{ table }}
          </th>
        </tr>
        </thead>
        <tbody>
          <AdminInspecCards
              v-for="(item, idx) in items"
              :key="idx"
              v-bind="item"
              :items="items"
              @click="sendPkey"
              @sendDialog="cDialog" />
        </tbody>
      </table>
    </div>
    <AdminInspecModi
        :dialog="recDialog"
        :table="table"
        :items="items"
        :title="title"
        @sendDialog="sendDialog" />
  </div>
</template>

<script>
import AdminInspecCards from "@/components/Cards/Admin/AdminInspecCards.vue";
import AdminInspecModi from "@/components/Cards/Admin/AdminInspecModi.vue";
export default {
  props: {
    title: {
      type: String,
      default: "리스트",
    },
    items: {
      required: true,
    },
},
  data() {
    return {
      sendInspectionKey: 0,
      recDialog: false,
      table: ["번호", "상품명", "브랜드", "카테고리", "발매가", "판매자","수량", "검수도착일","검수상태","검수종료일","결과","반송일","관리"]
    }
  },
  components: {
    AdminInspecCards,
    AdminInspecModi
  },
  methods: {
    cDialog(){
      this.recDialog=true;
    },
    sendDialog(){
      this.recDialog = false
    },
    sendPkey(){
      let that = this;
      this.$axios.get('http://localhost:8080/admin/loadInspection/one')
          .then(function(res){
            that.items=res.data;
          })
          .catch(function(err){
            console.log(err);
          });
      console.log("status",this.$props.items.INSPECTION_KEY)
    },
  },
  created(){

  }
}
</script>
