<template>
        <tr v-if="isArrayNull === 0">
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
              colspan="7"
          >
            아직 등록된 상품이 없습니다.
          </td>
        </tr>
          <tr v-else>
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
                @click="fDialog(), sendItems()"
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
    PRODUCT_DELETE: {
      default: 0,
    },
    isArrayNull: {
      default: 0,
    },
  },
  methods: {
    fDialog(){
      this.$emit('sendDialog');
    },
    deleteList(){
      if( confirm("정말 삭제하시겠습니까?") === true )
        this.sendDeleteItem();
    },
    sendItems(){
      let that = this;
      let sendProductKey=that.PRODUCT_KEY;
      let sendProductMnum=that.PRODUCT_MNUM;
      this.$emit("sendItems", sendProductKey, sendProductMnum, );
    },
    sendDeleteItem(){
      let that = this;
      let sendProductKey=that.PRODUCT_KEY;
      let sendProductMnum=that.PRODUCT_MNUM;
      this.$emit("sendDeleteItem", sendProductKey, sendProductMnum, );
    }
  },
  created(){
    console.log(this.isArrayNull===1)
  }
}
</script>
