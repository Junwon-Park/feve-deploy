<template>
  <div>
    <main class="profile-page">
      <section class="relative py-16 bg-blueGray-200 mt-24">
        <div class="container">
          <div class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg ">
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
                      <abbr class="text-base mb-1" style="text-decoration:underline">PRODUCT_BRAND</abbr>
                      <p class="text-lg mb-1">PRODUCT_NAME</p>
                      <p class="text-sm mb-1; text-gray-900">PRODUCT_DESC</p>
                    </div>
                    <hr/>
                    <div class="flex mt-3 pt-3">
                      <div style="width:50%; float:left">
                      <span class="text-left" style="width:50% float:left">최근거래가</span>
                      </div>
                      <div style="width:50%; float:right; text-align:right">
                      <b class="text-right" style="width:50% float:right">SELL_PRICE</b>
                      </div>
                    </div>
                    
                    <div>
                      <div class="mt-3">
                        <v-btn x-large color="error" dark style="width:49%" class="mr-1 mt-3" > 
                          <div>구매</div> 
                          <div>10000원</div>
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
                          <div>관심상품</div>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  
                  <div class="w-full flex-wrap mt-6">
                    <b class="text-lg">상품정보</b>
                    <div style="border:black;">
                      <div style="width:33%; float:left; padding-right:10px;">
                        <p class="mb-1">모델번호</p>
                        <p>PRODUCT_MNUM</p>
                      </div>
                      <div style="width:33%; float:left; padding-right:10px;">
                        <p class="mb-1">출시일</p>
                        <p>PRODUCT_LDATE</p>
                      </div>
                      <div style="width:33%; float:right; ">
                        <p class="mb-1">발매가</p>
                        <p>PRODUCT_ORIPRICE</p>
                      </div>
                    </div>
                  </div>

                  <div class="w-full flex-wrap mt-12 pt-6">
                    <b class="text-lg">배송정보</b>
                    <div class="mt-2">
                      <div style="float:left;">
                        <img :src="box" alt="..." class="w-13 h-13 rounded-full border-2 border-blueGray-50 shadow"/>
                      </div>
                      <div>
                        <p class="mb-2">일반배송 3000원</p>
                        <p class="mb-2"> 검수 후 배송 ・ 5-7일 내 도착 예정</p>
                      </div>
                    </div>
                  </div>

                  <div class="w-full flex-wrap mt-3 pt-6">
                    <b class="text-lg">시세</b>
                    <div class="mt-2">
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
    ShopCardLineChart,
    ShopCardTable,
    Notice
    
    }
}
</script>
