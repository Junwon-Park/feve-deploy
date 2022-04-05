<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded"
  >
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class=" w-full bg-transparent border-collapse">
        <thead class="thead-light">
        <tr>
          <th
              class="px-6  bg-gray-200 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold "
              v-for="(table, idx) in table" :key="idx"
          >
            {{ table }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr v-if="this.$props.items.length===0">
          <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-center"
              colspan="13"
          >
            아직 등록된 문의가 없습니다.
          </td>
        </tr>
          <CscenterQnaCards
              v-else
              v-for="(item, idx) in items"
              :key="idx"
              v-bind="item"
              :items="items"
              @sendDialog="cDialog"
              @sendItems="sendItems"
          />
        </tbody>
      </table>
    </div>
    <!-- <CscenterQnaModal
      :dialog="recDialog"
      :table="table"
      :title="title"
      :item="item"
      :receivedCscenterKey="receivedCscenterKey"
      :receivedUserid="receivedUserid"
      @sendDialog="sendDialog"
      @updateList="updateList"/>-->
      <!-- <button class="bg-orange-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button" @click="fDialog(), sendItems()">문의하기</button> -->
  </div> 
  
  
</template>
<script>
import CscenterQnaCards from "@/components/Cards/Cscenter/CscenterQnaCards.vue";
// import CscenterQnaModal from "@/components/Cards/Cscenter/CscenterQnaModal.vue";
export default {
  props:{
    title: {
      type: String,
      default: "리스트",
    },
    items: {
      required: true,
    },
  },
  data () {
    return {
      table: ["번호", "제목", "작성자", "작성시간", "답변여부", "관리"],
      receivedCscenterKey: 0,
      receivedUserid:"",
      receivedUserkey:0,
      cscenterComment: 0,
      recDialog: false,
      item:{
        CSCENTER_KEY: 0,
        CSCENTER_TITLE: '',
        CSCENTER_CONTENTS: '',
        CSCENTER_WDATE: '',
        CSCENTER_STATUS: '',
        CSCENTER_COMMENT: '',
        CSCENTER_COMMENT_WDATE: '',
        USER_KEY: 0,
        USER_ID:'',
      }
    }
  },
  components:{
    CscenterQnaCards,
    
  },
  methods: {
    // fDialog(){
    //   this.$emit('sendDialog');
    // },
    // sendItems(){
    //   let that = this;
    //   let sendCscenterKey=that.CSCENTER_KEY;
    //   let sendUserid=that.USER_ID;
    //   let sendUserkey=that.USER_KEY;
    //   this.$emit("sendItems", sendCscenterKey, sendUserid, sendUserkey);
    
  },
  // methods: {
  //   cDialog(){
  //     this.recDialog=true;
  //   },
  //   sendDialog(){
  //     this.recDialog = false
  //   },
  //   sendItems(recC, recU, recUk) {
  //     let that=this;
  //     that.receivedCscenterKey=recC;
  //     that.receivedUserid=recU;
  //     that.receivedUserkey=recUk;

  //     console.log(that.receivedCscenterKey)

  //     this.$axios.post('http://localhost:8080/admin/cscenter/one',{
  //       sendCscenterKey: that.receivedCscenterKey,
  //       sendUserid: that.receivedUserid,
  //       sendUserkey: that.receivedUserkey,
  //     }).then(function(res){
  //       that.item=res.data[0];
  //       console.log("res", res);
  //     }).catch(function(err){
  //       console.log(err);
  //     });
  //   },
  //   updateList(newS){
  //     let that = this;
  //     that.cscenterComment = newS;

  //     this.$axios.post('http://localhost:8080/admin/updateCscenter', {
  //       sendCscenterKey: that.receivedCscenterKey,
  //       cscenterComment: that.cscenterComment,
  //       sendUserkey: that.receivedUserkey,
  //     }).then(function(res){
  //       console.log(res)
  //     })
  //         .catch(function(err){
  //           console.log(err);
  //         });
  //   }
  // },
  
}
</script>
