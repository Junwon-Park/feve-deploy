<template>
  <div
      class="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-6 shadow-lg rounded"
  >
    <div class="block w-full overflow-x-auto" style="min-height: 58vh;">
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
          <div class="form-row float-right">
      <v-btn depressed color="yellow" to="/CscenterInsert"> 문의 작성 하기 </v-btn>
    </div>
       </thead>
        <tbody>
        <CscenterQnaList
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
     <Pagination
        :pageSize="pageSize"
        @onPageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import CscenterQnaList from "@/components/Cards/Cscenter/CscenterQnaList.vue";
import Pagination from "@/components/Pagination.vue" ;
export default {
  props:{
    title: {
      type: String,
      default: "리스트",
    },
    items:{
      require: true
    },
    pageSize:Number,
    itemPerPage: Number,
    totalListCount: Number,
  },
  data(){
    
    return {
      table: ["번호", "제목", "작성자", "작성시간", "답변여부"],
      receivedCscenterKey:0,
      receivedUserkey:0,
      cscenterComment:0,
      recDialog: false,
      item:{
        CSCENTER_KEY: 0,
        CSCENTER_TITLE:'',
        CSCENTER_CONTENTS:'',
        CSCENTER_WDATE:'',
        CSCENTER_STATUS:'',
        CSCENTER_COMMENT:'',
        CSCENTER_COMMENT_WDATE:'',
        USER_KEY:0

      }
    }
  },
  components: {
      CscenterQnaList,
      Pagination,
    },
  methods: {
    cDialog(){
      this.recDialog=true;
    },
    sendDialog(){
      this.recDialog=false;
    },
    sendItems(recC, recUk) {
      let that=this;
      that.receivedCscenterKey=recC;
      that.receivedUserkey=recUk;

      console.log(that.receivedCscenterKey)

      this.$axios.post('http://localhost:8080/cscenter/cscenterInsert/cscenter',{
        sendCscenterKey: that.receivedCscenterKey,
        sendUserkey: that.receivedUserkey
      }).then(function(res){
        that.item=res.data[0];
        console.log("res", res);
      }).catch(function(err){
        console.log(err);
      });
    },
    onPageChanged(page){
      console.log("페이지 버튼 클릭: ", page +"번");
      let requestPage = page;
      let sendStart = (page -1) * this.itemPerPage +1;
      let sendEnd=page * this.itemPerPage;
      console.log("sendStart: ",sendStart, "sendEnd: ", sendEnd)

      this.$emit("startend", sendStart, sendEnd, requestPage);
    }

  }
  
  }
</script>
