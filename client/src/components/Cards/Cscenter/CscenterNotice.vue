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
                <span class="block" onclick="location.href='/cscenterNotice1'" style="cursor:pointer;">[공지] 안녕하세요. FEVE 점검 안내 입니다.</span>
              <small>2022-04-01</small>
            </td>
          </tr>
          <tr>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <span class="block"  onclick="location.href='/cscenterNotice2'" style="cursor:pointer;">[이벤트] FEVE x NEVER 콜라보 라이브쇼핑  </span>
              <small>2022-03-24</small>
            </td>
          </tr>
          <tr>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >

              <span class="block" onclick="location.href='/cscenterNotice3'" style="cursor:pointer;">[이벤트] M Bank 에서 FEVE 카드 발급 받고 미리페이 받자!</span>
              <small>2022-03-15</small>
            </td>
          </tr>
          <tr>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >
              <span class="block" onclick="location.href='/cscenterNotice4'" style="cursor:pointer;">[이벤트] 6만원 이상 구매시 모든 추가 상품 25%할인!</span>
              <small>2022-01-01</small>
            </td>
          </tr>
          <tr>
            <td
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left"
            >

              <span class="block" onclick="location.href='/cscenterNotice5'" style="cursor:pointer;">[공지] 가품 거래 시도와 관련한 조치 사항</span>
              <small>2022-01-01</small>
            </td>
          </tr>
        </tbody>
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
