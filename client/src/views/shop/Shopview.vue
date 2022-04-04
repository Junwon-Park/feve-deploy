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
                      <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src" crossorigin></v-carousel-item>
                    </v-carousel>
                </div>
                <div class="w-full xl:w-6/12 mb-12 xl:mb-0 px-4 mt-12">
                  <div class="w-full">
                    <div class="text-blueGray-800">
                      <abbr class="text-base mb-1" style="text-decoration:underline">{{PRODUCT_BRAND}}</abbr>
                      <p class="text-lg mb-1">{{PRODUCT_NAME}}</p>
                      <p class="text-sm mb-1; text-gray-900">{{PRODUCT_DESC}}</p>
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
                          <div v-if="this.SELL_PRICE != 0">
                            <div>구매</div> 
                            <div>{{SELL_PRICE.toLocaleString('ko-KR')}}원</div>
                            <div class="text-xs mt-1">즉시 구매가</div>
                          </div>
                          <div v-else>
                            <div>구매입찰</div> 
                          </div>
                        </v-btn>
                        <v-btn x-large color="success" dark  style="width:49%; float:right" class="ml-1 mt-3"> 
                          <div v-if="this.BUY_PRICE != 0">
                            <div>판매</div> 
                            <div>{{BUY_PRICE.toLocaleString('ko-KR')}}원</div>
                            <div class="text-xs mt-1">즉시 판매가</div>
                          </div>
                          <div v-else>
                            <div>판매입찰</div> 
                          </div>
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
                        <p>{{PRODUCT_MNUM}}</p>
                      </div>
                      <div style="width:33%; float:left; padding-right:10px;">
                        <p class="mb-1">출시일</p>
                        <p>{{PRODUCT_LDATE}}</p>
                      </div>
                      <div style="width:33%; float:right; ">
                        <p class="mb-1">발매가</p>
                        <p>{{PRODUCT_ORIPRICE}}</p>
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

      PRODUCT_NAME: '',
      PRODUCT_BRAND: '',
      PRODUCT_DESC:'',
      PRODUCT_MNUM:'',
      PRODUCT_LDATE:'',
      PRODUCT_ORIPRICE:0,
      PRODUCT_PIC:'',
      PRODUCT_KEY:0,
      SELL_PRICE:0,
      BUY_PRICE:0,

      // imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
      items: [
          {
            src: "this.$store.getters.ServerUrl + '/getImage?imageName='+ product-lego1.jpg",
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
    },
    mounted() {
      this.getView();
      // this.getPrices();
    },
    methods:{
      getView(){
        var vm = this;
        this.PRODUCT_KEY = this.$route.params.PRODUCT_KEY;
        console.log("라우터에서 받아오는 product_key 값은", this.$route.params.PRODUCT_KEY);
        this.$axios.get('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY)
            .then(function(res){
              // console.log("디비에서 결과 가져옴", res);
              console.log("res.data값은?", res.data);
              vm.PRODUCT_NAME = res.data.PRODUCT_NAME;
              vm.PRODUCT_BRAND = res.data.PRODUCT_BRAND;
              vm.PRODUCT_DESC = res.data.PRODUCT_DESC;
              vm.PRODUCT_MNUM = res.data.PRODUCT_MNUM;
              vm.PRODUCT_LDATE = res.data.PRODUCT_LDATE;
              vm.PRODUCT_ORIPRICE = res.data.PRODUCT_ORIPRICE;
              vm.PRODUCT_PIC = res.data.PRODUCT_PIC;
              vm.PRODUCT_KEY = res.data.PRODUCT_KEY;
              console.log("BUYS 배열의 길이는?", res.data.Buys.length);
              if(res.data.Sells.length!=0)
              {
                vm.SELL_PRICE = res.data.Sells[0].SELL_PRICE;
              }
              else
              {
                vm.SELL_PRICE =0;
              }

              if(res.data.Buys.length!=0)
              {
                vm.BUY_PRICE = res.data.Buys[0].BUY_PRICE;
              }
              else
              {
                vm.BUY_PRICE =0;
              }
              
            })
            .catch(function(err){
              console.log(err);
            });
      },
    //   getPrices(){
    //     console.log("가격 가져오기",this.PRODUCT_KEY);
    //     this.$axios.post('http://localhost:8080/shop/shopview/getPrices')
    //   .then( (res) => {			
    //       console.log(res.data);
    //       this.items=res.data;
    //   })
    //   .catch((err)=>{
    //   console.log(err);
    //   });
    //   },

    }
}
</script>
