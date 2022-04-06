<template>
  <div>
    <main class="profile-page">
      <section class="relative py-16 bg-blueGray-200 mt-24">
        <div class="container">
          <div class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg ">
            <div class="flex flex-wrap items-center mt-5 mb-5 px-6 mx-auto">
              <div class="flex">
                <div class="w-full xl:w-6/12 px-4 mt-12">
                  <v-carousel hide-delimiters width="400" height="400">
                      <v-carousel-item v-for="(item,i) in items" :key="i" >
                        <img style="object-fit: cover;width:100% !important; height:100% !important;" :src="item.src" crossorigin />
                      </v-carousel-item>
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
                      <div style="width:50%; float:right; text-align:right" v-if="this.RECENT_PRICE!=0">
                      <b class="text-right recent_price" style="width:50% float:right">{{RECENT_PRICE.toLocaleString('ko-KR')}}원</b>
                      </div>
                      <div style="width:50%; float:right; text-align:right" v-else>
                      <b class="text-right recent_price" style="width:50% float:right">-</b>
                      </div>
                    </div>
                    
                    <div>
                      <div class="mt-3">
                        <v-btn x-large color="error" dark style="width:49%; height:70px;" class="mr-1 mt-3" > 
                          <div v-if="this.SELL_PRICE != 0">
                            <div>구매</div> 
                            <div>{{SELL_PRICE.toLocaleString('ko-KR')}}원</div>
                            <div class="text-xs mt-1">즉시 구매가</div>
                          </div>
                          <div v-else>
                            <div>구매입찰</div> 
                          </div>
                        </v-btn>
                        <v-btn x-large color="success" dark  style="width:49%; float:right; height:70px;" class="ml-1 mt-3"> 
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
                        <v-btn x-large style="width:100%; background-color:transparent" class="mt-3"> 
                            <v-btn v-if="!this.likeStatus" icon color="pink"  @click="goLike()">
                            <v-icon>mdi-heart-outline</v-icon>
                            </v-btn>
                            <v-btn v-else icon color="pink"  @click="goDislike()">
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
                      <shop-card-table
                      :RECENT_SELL_PRICE="RECENT_SELL_PRICE"
                      :RECENT_BUY_PRICE="RECENT_BUY_PRICE"
                      :RECENT_SELL_EDATE="RECENT_SELL_EDATE"
                      :RECENT_BUY_EDATE="RECENT_BUY_EDATE"
                      :arr="arr"
                      :arr2="arr2"/>
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
    data() {
      return{
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
      likeStatus:false,
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
      PRODUCT_PIC2:'',
      PRODUCT_PIC3:'',
      PRODUCT_KEY:0,
      SELL_PRICE:0,
      BUY_PRICE:0,
      RECENT_PRICE:0,
      RECENT_SELL_PRICE:0,
      RECENT_BUY_PRICE:0,
      RECENT_SELL_EDATE:'',
      RECENT_BUY_EDATE:'',
      items:[
          {
            src: '',
          },
          {
            src: '',
          },
          {
            src: '',
          }
          ],
      arr:[],
      arr2:[],
      };
    },
    components: {
    ShopCardLineChart,
    ShopCardTable,
    Notice
    },
    mounted() {
      this.getView();
      this.countLike();
      this.getRecentPrice();
      this.getTablePrice();
    },
    methods:{
      getView:function(){
        var vm = this;
        this.PRODUCT_KEY = this.$route.params.PRODUCT_KEY;
        this.$axios.get('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY)
            .then(function(res){
              //console.log("디비에서 결과 가져옴", res);
              //console.log("res.data값은?", res.data);
              vm.PRODUCT_NAME = res.data.PRODUCT_NAME;
              vm.PRODUCT_BRAND = res.data.PRODUCT_BRAND;
              vm.PRODUCT_DESC = res.data.PRODUCT_DESC;
              vm.PRODUCT_MNUM = res.data.PRODUCT_MNUM;
              vm.PRODUCT_LDATE = res.data.PRODUCT_LDATE;
              vm.PRODUCT_ORIPRICE = res.data.PRODUCT_ORIPRICE;
              vm.PRODUCT_PIC = res.data.PRODUCT_PIC;
              vm.PRODUCT_PIC2 = res.data.PRODUCT_PIC2;
              vm.PRODUCT_PIC3 = res.data.PRODUCT_PIC3;
              vm.PRODUCT_KEY = res.data.PRODUCT_KEY;
              vm.items[0].src = vm.imageUrl + vm.PRODUCT_PIC;
              
              if(vm.PRODUCT_PIC2 != null)
                vm.items[1].src = vm.imageUrl + vm.PRODUCT_PIC2;
              else
                vm.items[1].src = vm.imageUrl + vm.PRODUCT_PIC;

              if(vm.PRODUCT_PIC3 != null)
                vm.items[2].src = vm.imageUrl + vm.PRODUCT_PIC3;
              else
                vm.items[2].src = vm.imageUrl + vm.PRODUCT_PIC;


              if(res.data.Sells.length!=0)
                vm.SELL_PRICE = res.data.Sells[0].SELL_PRICE;
              else
                vm.SELL_PRICE =0;

              if(res.data.Buys.length!=0)
                vm.BUY_PRICE = res.data.Buys[0].BUY_PRICE;
              else
                vm.BUY_PRICE =0;
              
            })
            .catch(function(err){
              console.log(err);
            });
      },
      goLike:function(){
        var vm = this;
        //console.log("좋아요 버튼 누름");
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/goLike',
        {product_key: this.PRODUCT_KEY, user_key:1})
            .then(function(res){
              console.log("golike버튼 누른 결과는?", res);
              vm.likeStatus= !vm.likeStatus;
              //console.log(vm.likeStatus);
            })
            .catch(function(err){
              console.log(err);
            });
      },
      goDislike:function(){
        var vm = this;
        //console.log("좋아요 취소");
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/goDislike',
        {product_key: this.PRODUCT_KEY, user_key:1})
            .then(function(res){
              console.log("goDislike버튼 누른 결과는?", res);
              vm.likeStatus = !vm.likeStatus;
              //console.log(vm.likeStatus);
            })
            .catch(function(err){
              console.log(err);
            });
      },
      countLike:function(){
        var vm = this;
        //console.log("좋아요가 db에 있는지 확인");
        //console.log("여기서 프로덕트키 제대로 넘기니",this.PRODUCT_KEY);
        //console.log("원래 맨처음 likestatus 값", this.likeStatus);
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/countLike',
        {product_key: this.PRODUCT_KEY, user_key:1})
            .then(function(res){
              //onsole.log("countLike 결과는?", res);
              //console.log("갯수는?",res.data);
              if(res.data >0)
              {
                vm.likeStatus = true;
              }
               //console.log(vm.likeStatus);
            })
            .catch(function(err){
              console.log(err);
            });
      },
      getRecentPrice: function(){
        var vm = this;
        //console.log("recent sell price 가지러 가는 길");
        //console.log("여기서 프로덕트키 제대로 넘기니",this.PRODUCT_KEY);
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/recentSellPrice',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              //console.log(res);
              if(res.data.length != 0)
              {
                vm.RECENT_SELL_PRICE = res.data[0].SELL_PRICE;
                vm.RECENT_SELL_EDATE = res.data[0].SELL_EDATE;
                //console.log(vm.RECENT_SELL_PRICE);
                //console.log(vm.RECENT_SELL_EDATE);
              }
              else
              {
                vm.RECENT_SELL_PRICE = "0";
                vm.RECENT_SELL_EDATE = "0";
              }
            })
            .catch(function(err){
              console.log(err);
            });
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/recentBuyPrice',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              //console.log(res);
              if(res.data.length != 0)
              {
                vm.RECENT_BUY_PRICE = res.data[0].BUY_PRICE;
                vm.RECENT_BUY_EDATE = res.data[0].BUY_EDATE;
                //console.log(vm.RECENT_BUY_PRICE);
                //console.log(vm.RECENT_BUY_EDATE);
                vm.compareDate(); 
              }
              else
              {
                vm.RECENT_BUY_PRICE = "0";
                vm.RECENT_BUY_EDATE = "0";
              }
              
            })
            .catch(function(err){
              console.log(err);
            }); 
      },
      compareDate:function(){
        var vm = this;
        //console.log("날짜 비교");
        var a = new Date(vm.RECENT_SELL_DATE);
        var b = new Date(vm.RECENT_BUY_DATE);
        if(a>=b)
          vm.RECENT_PRICE = vm.RECENT_SELL_PRICE;
        else
          vm.RECENT_PRICE = vm.RECENT_BUY_PRICE;
      },
      getTablePrice: function(){
        console.log("table price 가지러 가는 길");
        var vm = this;
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/sellTablePrice',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              console.log(res);
              if(res.data.length !=0)
              {
                vm.arr = res.data;
                console.log(vm.arr);
              }
              else
              {
                console.log(vm.arr.SELL_PRICE = "-");
                console.log(vm.arr.SELL_COUNT = "-");
              }
              
            })
            .catch(function(err){
              console.log(err);
            });
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/buyTablePrice',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              console.log(res);
              // vm.arr2.BUY_PRICE = (vm.arr2.BUY_PRICE == null) ? '-' : vm.arr2.BUY_PRICE.toLocaleString('ko-KR') + "원";
              if(res.data.length !=0)
              {
                vm.arr2 = res.data;
                console.log(vm.arr2);
              }
              else
              {
                vm.arr2.BUY_PRICE = "-";
                vm.arr2.BUY_COUNT = "-";
                console.log(vm.arr2.BUY_PRICE);
                console.log(vm.arr2.BUY_COUNT);
              }
            })
            .catch(function(err){
              console.log(err);
            }); 
      },
      
      
    

    }
}
</script>
