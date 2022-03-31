<template>
        <tr>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ PRODUCT_KEY }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ PRODUCT_NAME }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ PRODUCT_MNUM }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_BRAND  }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_CATE }}
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_ORIPRICE  }} 원
          </td>
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            <button
                class="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="fDialog(),modifyList(), sendItems()"
            >
              수정
            </button>
            <button
                class="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="deleteList"
            >
              삭제
            </button>
          </td>
        </tr>
</template>

<script>
export default {
  data(){
    return {
      buttonName: '',
    }
  },
  props: {
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
    PRODUCT_MNUM: {
      type: String,
      default: "Lego",
    },
  },
  methods: {
    fDialog(){
      this.$emit('sendDialog');
    },
    modifyList(){
      console.log("수정버튼 클릭했땀!!");
    },
    deleteList(){
      console.log("삭제버튼 클릭!!");
    },
    sendItems(){
      let that = this;
      let sendProductKey=that.PRODUCT_KEY;
      let sendProductMnum=that.PRODUCT_MNUM;
      this.$emit("sendItems", sendProductKey, sendProductMnum, );
    }
  }
}
</script>
