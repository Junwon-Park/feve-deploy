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
            <span class="block" onclick="location.href='/cscenterNotice1'">[이벤트] M Bank 에서 FEVE 카드 발급 받고 미리페이 받자!</span>
              <small>2022-03-15</small>
              <br><br><br>
             
            <p>안녕하세요.FEVE 입니다.</p>
            <p>M Bank 에서 FEVE 카드 신규 발급 받으시는 고객님 대상으로 </p> 
            <p>미리페이(M pay) 최대 20,000원 적립 해드리고 있습니다.</p> 
            <p>많은 관심 부탁드립니다.</p> 
             <img
                alt="..."
                class="max-w-full rounded-lg shadow-xl mx-auto"
                style="
                transform: scale(1) perspective(1040px) rotateY(-11deg)
                rotateX(2deg) rotate(2deg);"
                :src="Banner2"
                />
                
                  
             
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
import Banner2 from '@/assets/img/main_ad2.png';
export default {
  data() {
    return {
      cscenter,
      event,
      notice,
      Banner2
    };
  },
  components: {

  },

};
</script>
