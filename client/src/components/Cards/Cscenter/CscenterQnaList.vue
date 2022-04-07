<template>
  <div
      class="relative flex flex-col min-w-0 break-words w-full mb-auto  rounded "
  >
    <div class="rounded-t mb-auto px-1 py-10 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-auto max-w-full flex-grow flex-1">
          <h1
              class="font-semibold text-lg text-left "
          >
            묻고 답하기
          </h1>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg- border-collapse">
        <!-- <thead>
        <tr>
          <th
              class="text-center px-6 border-b-2 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
              colspan="" style="border-color: black;"
          >
            번호
          </th>
          <th
              class="text-center px-6 border-b-2 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
              colspan="" style="border-color: black;"
          >
            제목
          </th>
          <th
              class="text-center px-6 border-b-2 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
              colspan="" style="border-color: black;"
          >
            작성자
          </th>
          <th
              class="text-center px-6 border-b-2 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
              colspan="" style="border-color: black;"
          >
            작성일
          </th>
          <th
              class="text-center px-6 border-b-2 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
              colspan="" style="border-color: black;"
          >
            답변여부
          </th>
        </tr>
        </thead> -->
        <tbody>
         <CscenterQnaListCard/>
        </tbody>
      </table>
    </div>
    <div class="form-row float-right">
      <v-btn depressed color="yellow" to="/CscenterInsert"> 문의 작성 하기 </v-btn>
    </div>
  </div>
</template>
<script>
import CscenterQnaListCard from "@/components/Cards/Cscenter/CscenterQnaListCard.vue";
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
    CscenterQnaListCard,
    
  },
  methods: {
  },
  
}
</script>
