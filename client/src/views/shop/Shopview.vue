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
        <div class="container">
          <div class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="flex flex-wrap items-center mt-5 mb-5 px-6 mx-auto">
              <div class="flex">
                <div class="w-full xl:w-6/12 px-4 mt-12">
                  <v-carousel hide-delimiters>
                      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
                    </v-carousel>
                </div>
                <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4 mt-12">
                  <div class="w-full">
                    <div class="text-blueGray-800">
                      <p class="text-base mb-1">PRODUCT_BRAND</p>
                      <p class="text-lg mb-1">PRODUCT_NAME</p>
                      <p class="text-sm mb-1">PRODUCT_DESC</p>
                    </div>
                    <hr/>
                    <div class="flex mt-3 pt-3">
                      <div style="width:50%; float:left">
                      <span class="text-left" style="width:50% float:left">최근거래가</span>
                      </div>
                      <div style="width:50%; float:right; text-align:right">
                      <span class="text-right" style="width:50% float:right">SELL_PRICE</span>
                      </div>
                    </div>
                    
                    <div>
                      <div class="mt-3">
                        <v-btn x-large color="error" dark style="width:49%" class="mr-1 mt-3" > 
                          <div class="text-lg ">구매</div> 
                          <div class="text-lg ">10000원</div>
                        </v-btn>
                        <v-btn x-large color="success" dark  style="width:49%; float:right" class="ml-1 mt-3"> 
                          <div>판매</div> 
                          <div>20000원</div>
                        </v-btn>
                      </div>
                      
                      <div>
                        <v-btn x-large style="width:100%; background-color:transparent" class="mt-3" > 
                            <v-btn icon color="pink">
                            <v-icon>mdi-heart</v-icon>
                            </v-btn>
                          <div class="text-lg ">관심상품</div>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  
                  <div class="w-full flex-wrap mt-3 pt-6">
                    <h2>상품정보</h2>
                    <div>
                      <div style="width:33%; float:left; padding-right:10px;">
                        <p>모델명</p>
                        <p>PRODUCT_MNUM</p>
                      </div>
                      <div style="width:33%; float:left; padding-right:10px;">
                        <p>모델명</p>
                        <p>PRODUCT_LDATE</p>
                      </div>
                      <div style="width:33%; float:right; ">
                        <p>모델명</p>
                        <p>PRODUCT_ORIPRICE</p>
                      </div>
                    </div>
                  </div>

                  <div class="w-full flex-wrap mt-3 pt-6">
                    <h2>배송정보</h2>
                    <div class="mt-2">
                      <div style="float:left;">
                        <img :src="box" alt="..." class="w-16 h-16 rounded-full border-2 border-blueGray-50 shadow"/>
                      </div>
                      <div>
                        <p class="mb-2">일반배송 3000원</p>
                        <p class="mb-2"> 검수 후 배송 ・ 5-7일 내 도착 예정</p>
                      </div>
                    </div>
                  </div>

                  <div class="w-full flex-wrap mt-3 pt-6">
                    <h2>시세</h2>
                    <div class="mt-2">
                      <shop-card-bar-chart/>
                      <shop-card-line-chart/>
                      <shop-card-table/>
                    </div>
                  </div>
                  <!--컴포넌트로 구매 확인 공지 넣어주기-->
                  <Notice/>
                
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import box from "@/assets/img/box.png";
import legoBg from "@/assets/img/bg-lego5.jpg";

import ShopCardBarChart from "@/components/Cards/Shop/ShopCardBarChart.vue";
import ShopCardLineChart from "@/components/Cards/Shop/ShopCardLineChart.vue";
import ShopCardTable from "@/components/Cards/Shop/ShopCardTable.vue";

import Notice from './Notice';


export default {
    data: () => ({
      box,
      legoBg,
      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
      items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
    }),
    components: {
    ShopCardBarChart,
    ShopCardLineChart,
    ShopCardTable,
    Notice
    
    }
}
</script>
