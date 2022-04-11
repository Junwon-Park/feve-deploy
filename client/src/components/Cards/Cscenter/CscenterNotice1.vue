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
            <span class="block" onclick="location.href='/cscenterNotice1'">[공지] 안녕하세요. FEVE 점검 안내 입니다.</span>
              <small>2022-04-01</small>
              <br><br><br>
             
                  <p>안녕하세요.FEVE 입니다.</p>
                  <p>보다 안정적인 서비스 환경을 제공해 드리기 위해 서버 점검을 진행할 예정 입니다.</p> 
                  <p>점검이 진행되는 동안 서비스 이용이 잠시 중단 되오니 고객 여러분의 너른 양해 부탁드립니다.</p> 

                  <p>점검일자:2022.04.01(금)</p>
                  <p>점검시간:03:00 - 03:30</p>
             
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
