<template>
  <div class="">
    <main class="profile-page"> 
        <div class="p-8 mt-16 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
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
                  <div class="flex mt-3">
                    <div style="width:50%; float:left">
                    <span class="text-left" style="width:50% float:left">최근거래가</span>
                    </div>
                    <div style="width:50%; float:right; text-align:right">
                    <span class="text-right" style="width:50% float:right">SELL_PRICE</span>
                    </div>
                  </div>
                  
                  <div>
                    <div class="mt-3">
                      <v-btn x-large color="error" dark style="width:48%" class="mr-2 mt-3" > 
                        <div class="text-lg ">구매</div> 
                        <div class="text-lg ">10000원</div>
                      </v-btn>
                  
                      <v-btn x-large color="success" dark  style="width:50%" class="mt-3"> 
                        <div>판매</div> 
                        <div>20000원</div>
                      </v-btn>
                    </div>
                    
                    <div>
                      <v-btn x-large style="width:100%" class="mt-3" > 
                          <v-btn icon color="pink">
                          <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        <div class="text-lg ">관심상품</div>
                      </v-btn>
                    </div>
                  </div>
                </div>
                
                <div class="w-full mt-3">
                    상품정보
                </div>
                <hr/>
                <div class="w-full mt-3">
                    배송정보
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
    </main>
  </div>
</template>
<script>
export default {
    data: () => ({
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
  }
</script>
