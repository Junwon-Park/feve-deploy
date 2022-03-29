<template>
        <tr>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
              v-for="(item, idx) in items" :key="idx"
          >
            {{ item }}
          </td>

          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            <button
                class="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="fDialog"
            >
              검수
            </button>
            <button
                class="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
            >
              수정
            </button>
          </td>
        </tr>
</template>

<script>
export default {
  data(){
    return {
    }
  },
  props: {
    items: {
      PRODUCT_KEY: {
        default: 0,
      },
      PRODUCT_NAME: {
        type: String,
        default: "Lego Firehouse Headquarters",
      },
      PRODUCT_BRAND: {
        type: String,
        default: "Lego",
      },
      PRODUCT_CATE: {
        type: String,
        default: "Architecture",
      },
      PRODUCT_ORIPRICE: {
        default: 550000
      },
      USER_ID: {
        type: String,
        default: "판매자1",
      },
      inspecCount: {
        default: 1
      },
      INSPECTION_STATUS: {
        default: 2
      },
      INSPECTION_RESULT: {
        default: 0
      },
      INSPECTION_RDATE: {
        type: String,
        default: "2022-03-03"
      }
    }
  },

  methods: {
    fDialog(){
      this.$emit('dialog');
      console.log(this.$emit('diallog'))
    }
  }
}
</script>
