<template>
  <div>
    <main class="profile-page">
      <section class="relative block h-500-px">
        <div
          class="absolute top-0 w-full h-full bg-center bg-cover"          
          :style="{ backgroundImage: `url(${legoBg})` }"
        >
          <span
            id="blackOverlay"
            class="w-full h-full absolute opacity-30 bg-white"
          ></span>
        </div>
        <div
          class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
      </section>
      <section class="relative py-16 bg-blueGray-200">
        <div class="container mx-auto px-4">
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64"
          >
          
          <div class="px-6">
             <h5
                class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center m-3"
              >구매동의</h5>   
              <h6
                class="text-3xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center m-3"
              >구매하시기 전에 꼭 확인하세요!!</h6>    
          </div>
          <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
            <div class="container m-3">
              <div class="sold-content">
                <div class="mr-2 break-words" style="word-break: keep-all;"><span class="m-2 text-xxl text-left"><strong>대충 상품 설명하는중</strong></span>
                <p class="m-2 text-xxl text-left">대충 상품 설명하는중</p>
                <span class="m-2 text-xxl text-left"><strong>대충 상품 설명하는중</strong></span>
                </div>
              </div>
              <div class="sold-img">
                <img src="anguler">
              </div>
            </div>  
          </div>
          <hr />
          <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
            <div class="container m-3">
            <ul>
                <li style="list-style:none border-top:none" class="border-b-2 m-4">
                   <div class="flex items-center no-underline"> 
                    <div class="mr-2 break-words" style="word-break: keep-all;">
                      <p class="text-sm"><strong>구매하실 상품 맞으신가요?</strong></p>
                  
                      <p class="mt-1 text-xs  ml-auto">상품 이미지 모델번호 출시일 상품명 사이즈 한 번 더 확인했습니다.</p>  
                    </div>
                      <div class="ml-auto relative">
                        <input id="check1" class="checkboxconfirm" type="checkbox">
                          <label for="check1">
                          </label>  

                      </div>
                      </div>
                </li>  
                
                <li style="list-style:none border-top:none " class="border-b-2 m-4">
                   <div class="flex items-center no-underline"> 
                    <div class="mr-2 break-words " style="word-break: keep-all;">
                      <p class="text-sm"><strong>제조사에서 불량으로 인정하지 않는 기준은 하자로 판단하지 않습니다</strong></p>
                  
                      <p class="mt-1 text-xs  ml-auto">박스/패키치와 상품 컨디션에 민감하시다면 검수 기준을 반드시 확인하시기 바랍니다.</p>  
                    </div>
                      <div class="ml-auto relative ">
                        <input id="check2" class="checkboxconfirm" type="checkbox">
                          <label for="check2">
                          </label>  

                      </div>
                      </div>
                </li>  

                <li style="list-style:none border-top:none " class="border-b-2 m-4">
                   <div class="flex items-center no-underline"> 
                    <div class="mr-2 break-words " style="word-break: keep-all;">
                      <p class="text-sm"><strong>패키지(포장) 개봉 검수에 대한 주의사항을 확인합니다</strong></p>
                  
                      <p class="mt-1 text-xs  ml-auto">검수 과정 중 밀봉 및 실링이 모두 개봉되어 패키지로 포장되어 발송됩니다.</p>  
                    </div>
                      <div class="ml-auto relative ">
                        <input id="check3" class="checkboxconfirm" type="checkbox">
                          <label for="check3">
                          </label>  

                      </div>
                      </div>
                </li>  

                <li style="list-style:none border-top:none " class="border-b-2 m-4">
                   <div class="flex items-center no-underline"> 
                    <div class="mr-2 break-words" style="word-break: keep-all;">
                      <p class="text-sm"><strong>feve 최신 이용정책을 모두 확인하였으며 구매를 계속합니다</strong></p>
                  
                      <p class="mt-1 text-xs  ml-auto">안전한 거래를 위해 반드시 숙지해야 할 미입고,페널티,부정거래 등의 이용정책을 확인했습니다</p>  
                    </div>
                      <div class="ml-auto relative">
                          <input id="check4" class="checkboxconfirm" type="checkbox">
                          <label for="check4">
                          </label>  

                      </div>
                      </div>
                </li>  

               <li style="list-style:none border-top:none " class="border-b-2 m-4">
                   <div class="flex items-center no-underline"> 
                    <div class="mr-2 break-words " style="word-break: keep-all;">
                      <p class="text-sm"><strong>구매하실 상품 맞으신가요?</strong></p>
                  
                      <p class="mt-1 text-xs  ml-auto">상품 이미지 모델번호 출시일 상품명 사이즈 한 번 더 확인했습니다.</p>  
                    </div>
                      <div class="ml-auto relative">
                        <input id="check5" class="checkboxconfirm" type="checkbox">
                          <label for="check5">
                          </label>  
                      </div>
                      </div>
                </li>  
            </ul>  
            </div>
          </div>
                <div style="flex items-center no-underline">
                  <a href="http://localhost:3000" @click="clicked" id="change-button" class="full-image" disabled="disabled">
                    동의 하기
                  </a>    
                </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import anguler from "@/assets/img/angular.jpg";

export default {
  data() {
    return {
      anguler,
         checksucess: [],
    };
  },
 methods:{
        clicked(){

            const query = 'input[id*="check"]:checked';
            const selectedElements =  document.querySelectorAll(query);  
            const selectedElementsCnt = selectedElements.length;

            if(selectedElementsCnt === 5)
            {
                let button = document.getElementById('change-button');
                button.disabled = "";
            } else
            {
              alert("체크다하세요");
              event.preventDefault();

            }
        }

     
    }
}

</script>
