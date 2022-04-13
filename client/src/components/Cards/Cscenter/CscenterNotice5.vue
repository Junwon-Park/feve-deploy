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
            공지사항
          </h1>
        </div>
      </div>
    </div>
    <div class="block w-full overflow-x-auto">
      <!-- Projects table -->
      <table class="items-center w-full bg- border-collapse">
        <thead>
          <tr>
            <th
                class="text-left px-6 border-b-2 text-black  align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold"
                colspan="" style="border-color: black;"
            >
              Title
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
            <span class="block" onclick="location.href='/cscenterNotice1'">[공지] 가품 거래 시도와 관련한 조치 사항</span>
              <small>2022-01-01</small>
              <br><br><br>
             
            <p>안녕하세요.FEVE 입니다.</p>
            <p>FEVE 는 이용약관 제24조(부적절 행위)에 따라 해당 이용자에 대한 서비스 이용제재 및 </p> 
            <p>민형사상 책임을 물을 수 있으며, 가품 유통행위는 상표법 108조를 위반한 상표권 침해행위로서 고의를</p> 
            <p>추정할 수 있을 시 :</p> 
            <br>
            <p>- 민사상 손해배상 책임</p>
            <p>- 형사상 7년 이하의 징역 또는 1억원 이하의 벌금 등</p>
            <p>처벌을 받을 수 있으므로 거래에 주의가 필요합니다.</p>
            <br>
            <p>FEVE는 철저한 검수와 정품 보증을 통해 안전거래를 보장하는 한편, 가품 거래 근절을 위해 </p>
            <p>해당 이용자들에 대해 필요한 조치를 취하도록 하겠습니다. </p>
            <p>감사합니다. </p>
            </td>
          </tr>
        </tbody>
        <div class="form-row float-right mt-10">
        <v-btn depressed color="black" style="color: white !important;;" to="/Cscenter"> 돌아가기 </v-btn>
      </div>
      </table>
    </div>
  </div>
</template>
<script>
import cscenter from "@/assets/img/cscenter.jpg";
import notice from "@/assets/img/notice.jpg";
import event from "@/assets/img/event.jpg";

export default {
  data() {
    return {
      cscenter,
      event,
      notice,
      
    };
  },
  components: {

  },

};
</script>
