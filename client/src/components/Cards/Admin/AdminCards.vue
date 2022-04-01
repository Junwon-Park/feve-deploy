<template>
        <tr v-if="isArrayNull">
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
              colspan="7"
          >
            아직 등록된 상품이 없습니다.
          </td>
        </tr>
          <tr v-else-if="!isArrayNull">
          <td
              :style="[PRODUCT_DELETE==='1' ? {'text-decoration': 'line-through !important'} : {'text-decoration': 'none !important'}]"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ PRODUCT_KEY }}
          </td>
          <td
              :style="[PRODUCT_DELETE==='1' ? {'text-decoration': 'line-through !important'} : {'text-decoration': 'none !important'}]"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ PRODUCT_NAME }}
          </td>
          <td
              :style="[PRODUCT_DELETE==='1' ? {'text-decoration': 'line-through !important'} : {'text-decoration': 'none !important'}]"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{ PRODUCT_MNUM }}
          </td>
          <td
              :style="[PRODUCT_DELETE==='1' ? {'text-decoration': 'line-through !important'} : {'text-decoration': 'none !important'}]"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_BRAND  }}
          </td>
          <td
              :style="[PRODUCT_DELETE==='1' ? {'text-decoration': 'line-through !important'} : {'text-decoration': 'none !important'}]"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_CATE }}
          </td>
          <td
              :style="[PRODUCT_DELETE==='1' ? {'text-decoration': 'line-through !important'} : {'text-decoration': 'none !important'}]"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            {{  PRODUCT_ORIPRICE  }} 원
          </td>
          <td
              :style="[PRODUCT_DELETE==='1' ? {'text-decoration': 'line-through !important'} : {'text-decoration': 'none !important'}]"
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
          >
            <button
                class="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="fDialog(), sendItems()"
                v-if="PRODUCT_DELETE==='0'"
            >
              수정
            </button>
            <button
                class="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="deleteList"
                v-if="PRODUCT_DELETE==='0'"
            >
              삭제
            </button>
            <button
                class="bg-red-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                @click="undeleteList"
                v-if="PRODUCT_DELETE==='1'"
            >
              복구
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
      type: String,
      default: '0',
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
        alert("삭제를 완료했습니다. 상품을 다시 사용하시려면 복구 버튼을 눌러주세요.");
         this.$router.go(this.$router.currentRouter);
    },
    undeleteList(){
      if( confirm("정말 복구하시겠습니까?") === true )
        this.sendUndoDeleteItem();
      alert("상품을 복구했습니다.");
      this.$router.go(this.$router.currentRouter);
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
    },
    sendUndoDeleteItem(){
      let that = this;
      let sendProductKey=that.PRODUCT_KEY;
      let sendProductMnum=that.PRODUCT_MNUM;
      this.$emit("sendUndoDeleteItem", sendProductKey, sendProductMnum, );
    },
  },
}
</script>
