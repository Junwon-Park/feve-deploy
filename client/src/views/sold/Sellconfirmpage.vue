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
             <h5 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center m-3"
              >구매 입찰하기</h5>       
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
                <img src="@/assets/img/angular.jpg">
              </div>
            </div>  
          </div>
          <hr />
          <div class="p-5" style="border-top:8px; background-color:#fff;">
            <ul class="flex rounded-tr p-5 items-center px-4" >
               <li class="text-center flex-1 border-r" > 
                 <p class="text-lg">즉시 구매가</p>
                 <span class="inline-block text-2xl">4,500,000원</span> 
               </li>
               <li class="text-center flex-1">
                  <p class="text-lg">즉시 구매</p>
                 <span class="inline-block text-2xl">4,500,000원</span>  
               </li>
            </ul> 
              <div class="relative">
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
import legoBg from "@/assets/img/bg-lego5.jpg";


export default {
  data() {
    return {
      anguler,
         checksucess: [],
          legoBg,
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
