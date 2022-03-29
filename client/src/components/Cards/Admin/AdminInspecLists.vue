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
            {{ table.default }}
          </th>
        </tr>
        </thead>
        <tbody>
          <AdminCards v-for="(inspecItems, idx) in items" :key="idx" v-bind="inspecItems"  />
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AdminCards from "@/components/Cards/Admin/AdminCards.vue";
export default {
  props: {
    title: {
      type: String,
      default: "리스트",
    },
    items: {

    },
},
  data() {
    return {
      table: {
        tablePnum:{
          type: String,
          default: "번호",
        },
        tablePname:{
          type: String,
          default: "상품명",
        },
        tablePbrand:{
          type: String,
          default: "브랜드",
        },
        tablePcate:{
          type: String,
          default: "카테고리",
        },
        tablePoriprice:{
          type: String,
          default: "발매가",
        },
        tablePseller:{
          type: String,
          default: "판매자",
        },
        tablePinspeccount:{
          type: String,
          default: "검수 수량",
        },
        tablePinspecstatus:{
          type: String,
          default: "검수 상태",
        },
        tablePstatus:{
          type: String,
          default: "상태",
        }
      }
    }
  },
  components: {
    AdminCards,
  },
}
</script>
