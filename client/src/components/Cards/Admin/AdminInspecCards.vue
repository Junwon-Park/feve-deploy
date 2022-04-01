<template>
  <tr v-if="isArrayNull">
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
        colspan="13"
    >
      아직 등록된 상품이 없습니다.
    </td>
  </tr>
  <tr v-else-if="!isArrayNull">
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ INSPECTION_KEY }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ PRODUCT_BRAND }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ PRODUCT_CATE }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ PRODUCT_NAME }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ PRODUCT_ORIPRICE }} 원
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ USER_ID }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ inspecCount }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ INSPECTION_ADATE }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ INSPECTION_STATUS }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ INSPECTION_DATE }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ INSPECTION_RESULT }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"

    >
      {{ INSPECTION_RDATE }}
    </td>
    <td
        class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
    >
      <button
          class="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          @click="fDialog(), sendItems()"
      >
        검수
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
    INSPECTION_KEY: {
        default: 0
      },
    PRODUCT_KEY: {
      default: 0
    },
      PRODUCT_BRAND: {
        type: String,
        default:"Lego"
      },
      PRODUCT_CATE:  {
        type: String,
        default:"Architecture"
      },
      PRODUCT_NAME:  {
        type: String,
        default:"건물"
      },
      PRODUCT_ORIPRICE: {
        default: 0
      },
      INSPECTION_ADATE:   {
        type: String,
        default:"2022-03-31"
      },
      INSPECTION_DATE:  {
        default: 0
      },
      INSPECTION_RDATE:  {
        default: 0
      },
      INSPECTION_RESULT:  {
        default: 0
      },
      INSPECTION_STATUS:   {
        type: String,
        default:"검수중"
      },
      USER_KEY: {
        default: 0
      },
      USER_ID:   {
        type: String,
        default:"test"
      },
      inspecCount:{
        default: 1
      },
    isArrayNull: {
      default: 0,
    },
  },

  methods: {
    fDialog(){
      this.$emit('sendDialog');
    },
    sendItems(){
      let that = this;
      let sendProductKey=that.PRODUCT_KEY;
      let sendUserid=that.USER_ID;
      let sendUserkey=that.USER_KEY;
      this.$emit("sendItems", sendProductKey, sendUserid, sendUserkey);
    }
  },
  created(){
    console.log(this.isArrayNull)
  }
}
</script>
