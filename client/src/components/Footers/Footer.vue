<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div
      class="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
      style="transform: translateZ(0);"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap text-center lg:text-left">
        <div class="w-full lg:w-6/12 px-4 text-left">
          <h4 class="logo text-3xl font-semibold">FEVE</h4>
          <h5 class="text-xs mt-5 mb-2 text-blueGray-600">
            FEVE는 통신판매 중개자로서 통신판매의 당사자가 아니므로 개별 판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에 있습니다.
          </h5>
        </div>
        <div class="w-full lg:w-6/12 px-4">
          <div class="flex flex-wrap items-top mb-6">
            <div class="w-full lg:w-4/12 px-4 ml-auto">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 pb-2 pl-5 "
              >
                이용안내
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.creative-tim.com/presentation?ref=vn-footer"
                  >
                    검수기준
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://blog.creative-tim.com?ref=vn-footer"
                  >
                    이용정책
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://www.github.com/creativetimofficial?ref=vn-footer"
                  >
                    패널티 정책
                  </a>
                </li>
              </ul>
            </div>
            <div class="w-full lg:w-4/12 px-4">
              <span
                class="block uppercase text-blueGray-500 text-sm font-semibold mb-2 pl-5"
              >
                고객지원
              </span>
              <ul class="list-unstyled">
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/terms?ref=vn-footer"
                  >
                    공지사항
                  </a>
                </li>
                <li>
                  <a
                    class="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                    href="https://creative-tim.com/privacy?ref=vn-footer"
                  >
                    자주 묻는 질문
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr class="my-6 border-blueGray-300" />
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            Copyright © {{ date }} Vue Notus by
            <a
              href="https://www.creative-tim.com?ref=vn-footer"
              class="text-blueGray-500 hover:text-blueGray-800"
            >
              Creative Tim && FEVE
            </a>
            
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
