<template>
  <div>
    <main class="profile-page">
      <section class="relative py-16 bg-blueGray-200 mt-24">
        <div class="container">
          <div class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg ">
            <div class="w-full flex flex-wrap items-center mt-5 mb-5 px-6 mx-auto">
              <div class="flex flex-wrap">
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
                      <div style="width:50%; float:right; text-align:right">
                      <b class="text-right recent_price" style="width:50% float:right">{{RECENT_PRICE}}</b>
                      </div>
                    </div>
                    
                    <div>
                      <div class="mt-3">
                        <v-btn x-large dark style="background: #EF6253; width:49%; height:70px;" class=" mr-1 mt-3" @click="goBuy">
                          <div v-if="this.SELL_PRICE != 0">
                            <div>구매</div> 
                            <div>{{SELL_PRICE.toLocaleString('ko-KR')}}원</div>
                            <div class="text-xs mt-1">즉시 구매가</div>
                          </div>
                          <div v-else>
                            <div>구매입찰</div> 
                          </div>
                        </v-btn>
                        <v-btn x-large dark  style="background:#41B979; width:49%; float:right; height:70px;" class="ml-1 mt-3" @click="goSell">
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
                          <div>{{likeTotal}}</div>
                        </v-btn>
                      </div>
                    </div>
                  </div>
                  
                  <div class="w-full flex-wrap mt-6">
                    <b class="text-lg">상품정보</b>
                    <div class="text-center mt-2  text-sm" style="border:black;">
                      <div style="width:33%; float:left; padding-right:10px; border-right-style: solid; border-right-width: 1px;">
                        <div>
                          <p class="mb-1">모델번호</p>
                          <p>{{PRODUCT_MNUM}}</p>
                        </div>
                      </div>
                      <div style="width:33%; float:left; padding-right:10px; border-right-style: solid; border-right-width: 1px;">
                        <p class="mb-1">출시일</p>
                        <p>{{PRODUCT_LDATE}}</p>
                      </div>
                      <div style="width:33%; float:right; ">
                        <p class="mb-1">발매가</p>
                        <p>{{PRODUCT_ORIPRICE.toLocaleString('ko-KR') + "원"}}</p>
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
                        <p class="mb-2 text-sm">일반배송 3000원</p>
                        <p class="mb-2  text-sm"> 검수 후 배송 ・ 5-7일 내 도착 예정</p>
                      </div>
                    </div>
                  </div>

                  <div class="w-full flex-wrap mt-3 pt-6">
                    <b class="text-lg">시세</b>
                    <div class="mt-2">
                      <div>
                        <shop-card-line-chart v-if="this.CHART_PRICES.length !=0"
                        :CHART_PRICES="CHART_PRICES"
                        :CHART_DATES="CHART_DATES"/>
                        <div style="text-align:center" v-else>아직 체결된 거래가 없습니다</div>
                      </div>
                      <div class="mt-6">
                        <ShopCardTable_RE
                        :PRICES="PRICES"
                        :arr="arr"
                        :arr2="arr2"/>
                      </div>
                  </div>
                  <Notice/>
                  </div>
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
import ShopCardTable_RE from "@/components/Cards/Shop/ShopCardTable_RE.vue";
import Notice from './Notice';

export default {
    data() {
      return{
      user_key:JSON.parse(localStorage.getItem('userKey')),
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
      RECENT_PRICE:'',
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
      PRICES:[],
      CHART_PRICES:[],
      CHART_DATES:[],
      likeTotal:'',
      currentViewState : 0,
      };
    },
    components: {
    ShopCardLineChart,
    ShopCardTable_RE,
    Notice
    },
    mounted() {
      this.getView();
      this.countLike();
      this.countLikeTotal();
      this.getTablePrice();
      this.scrollToTop();
    //   setTimeout(() => {
    //   this.getRecentPrice()
    // }, 1000)
      this.getRecentPrice();
    },
    updated() {
      this.countLike();
      this.countLikeTotal();
    },
    methods:{
      getView:function(){
        var vm = this;
        this.PRODUCT_KEY = this.$route.params.PRODUCT_KEY;
        this.$axios.get('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY)
            .then(function(res){
              //console.log("디비에서 결과 가져옴", res);
              //console.log("res.data값은?", res.data);
              vm.PRODUCT_NAME = res.data[0].PRODUCT_NAME;
              vm.PRODUCT_BRAND = res.data[0].PRODUCT_BRAND =='LE'? '레고':'베어브릭';
              vm.PRODUCT_DESC = res.data[0].PRODUCT_DESC;
              vm.PRODUCT_MNUM = res.data[0].PRODUCT_MNUM;
              vm.PRODUCT_LDATE = res.data[0].PRODUCT_LDATE;
              vm.PRODUCT_ORIPRICE = res.data[0].PRODUCT_ORIPRICE;
              vm.PRODUCT_PIC = res.data[0].PRODUCT_PIC;
              vm.PRODUCT_PIC2 = res.data[0].PRODUCT_PIC2;
              vm.PRODUCT_PIC3 = res.data[0].PRODUCT_PIC3;
              vm.PRODUCT_KEY = res.data[0].PRODUCT_KEY;
              vm.items[0].src = vm.imageUrl + vm.PRODUCT_PIC;
              
              
              if(vm.PRODUCT_PIC2 != null)
                vm.items[1].src = vm.imageUrl + vm.PRODUCT_PIC2;
              else
                vm.items[1].src = vm.imageUrl + vm.PRODUCT_PIC;
              if(vm.PRODUCT_PIC3 != null)
                vm.items[2].src = vm.imageUrl + vm.PRODUCT_PIC3;
              else
                vm.items[2].src = vm.imageUrl + vm.PRODUCT_PIC;


              if(res.data[0].SELL_PRICE != null)
                vm.SELL_PRICE = res.data[0].SELL_PRICE;
              else
                vm.SELL_PRICE =0;
              if(res.data[0].BUY_PRICE != null)
                vm.BUY_PRICE = res.data[0].BUY_PRICE;
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
        if(this.user_key == null )
        { 
          alert("로그인 후 이용해 주세요");
          this.$router.push({path:'/auth'});
        }
        else
        {  
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/goLike',
        {product_key: this.PRODUCT_KEY, user_key:this.user_key})
            .then(function(res){
              console.log("golike버튼 누른 결과는?", res);
              vm.likeStatus= !vm.likeStatus;
              //console.log(vm.likeStatus);
            })
            .catch(function(err){
              console.log(err);
            });
        }
      },
      goDislike:function(){
        var vm = this;
        //console.log("좋아요 취소");
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/goDislike',
        {product_key: this.PRODUCT_KEY, user_key:this.user_key})
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
        {product_key: this.PRODUCT_KEY, user_key:this.user_key})
            .then(function(res){
              //console.log("countLike 결과는?", res);
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
      countLikeTotal:function(){
        var vm = this;
        //console.log("좋아요 몇개인지 확인");
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/countLikeTotal',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              //console.log("countLikeTotal 결과는?", res);
              vm.likeTotal = res.data;
            })
            .catch(function(err){
              console.log(err);
            });
      },
      getRecentPrice: function(){
        var vm = this;
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/recentPrice',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              //console.log(res);
              if(res.data.length === 0)
              {
                vm.RECENT_PRICE = '-';
                vm.PRICES = res.data;
                vm.PRICES.SELL_PRICE = '-';
                vm.PRICES.SELL_EDATE = '-';
                //console.log(vm.RECENT_PRICE);
                //console.log(vm.PRICES);
              }
              else
              {
                vm.RECENT_PRICE = res.data[0].SELL_PRICE.toLocaleString('ko-KR') + "원";
                for(let i=0; i< res.data.length;i++)
                {
                  vm.PRICES = res.data;
                  vm.CHART_PRICES[i] = res.data[i].SELL_PRICE;
                  vm.CHART_DATES[i] = res.data[i].SELL_EDATE.substring(0,10);
                  vm.PRICES[i].SELL_PRICE = res.data[i].SELL_PRICE.toLocaleString('ko-KR') + "원";
                  //console.log(vm.PRICES[i].SELL_PRICE);
                  //console.log(vm.PRICES[i].SELL_EDATE);
                  // console.log(vm.CHART_PRICES);
                  // console.log(vm.CHART_DATES);
                }
                //console.log(vm.CHART_PRICES);
                //console.log(vm.CHART_DATES);
              }
            })
            .catch(function(err){
              console.log(err);
            })
      },
      getTablePrice: function(){
        //console.log("table price 가지러 가는 길");
        var vm = this;
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/sellTablePrice',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              //console.log(res);
              if(res.data.length !=0)
              {
                vm.arr = res.data;
                for(let i=0; i< res.data.length;i++)
                {
                  vm.arr[i].SELL_PRICE = res.data[i].SELL_PRICE.toLocaleString('ko-KR') + "원";
                  //console.log(vm.arr[i].SELL_PRICE);
                }
                //console.log(vm.arr);
              }
              else
              {
                vm.arr = res.data;
                vm.arr.SELL_PRICE = '-';
                vm.arr.SELL_COUNT ='-';
                //console.log(vm.arr.SELL_PRICE = "-");
                //console.log(vm.arr.SELL_COUNT = "-");
              }
              
            })
            .catch(function(err){
              console.log(err);
            });
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/buyTablePrice',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              //console.log(res);
              if(res.data.length !=0)
              {
                vm.arr2 = res.data;
                for(let i=0; i< res.data.length;i++)
                {
                  vm.arr2[i].BUY_PRICE = res.data[i].BUY_PRICE.toLocaleString('ko-KR') + "원";
                  //console.log(vm.arr2[i].BUY_PRICE);
                }
                //console.log(vm.arr);
              }
              else
              {
                vm.arr2 = res.data;
                vm.arr2.BUY_PRICE = '-';
                vm.arr2.BUY_COUNT ='-';
                //console.log(vm.arr.SELL_PRICE = "-");
                //console.log(vm.arr.SELL_COUNT = "-");
              }
            })
            .catch(function(err){
              console.log(err);
            }); 
      },
      goBuy:function(){
        //console.log("구매 버튼 클릭");
        //console.log("product_key 넘어가는지 확인",this.PRODUCT_KEY);
        if(this.user_key == null )
        { 
          alert("로그인 후 이용해 주세요");
          this.$router.push({path:'/auth'});
        }  
        else{
          this.$router.push({path:'./buy' ,
          name:'Buyselect',
          params:{
            PRODUCT_KEY:this.PRODUCT_KEY}
          });
        }
      },
      goSell:function(){
        //console.log("판매 버튼 클릭");
        if(this.user_key == null )
        { 
          alert("로그인 후 이용해 주세요");
          this.$router.push({path:'/auth'});
        }  
        else{
          this.$router.push({path:'/sell' ,
          name:'Sellselect',
          params:{
            PRODUCT_KEY:this.PRODUCT_KEY}
          });
        }
      },
      scrollToTop() {

        if(this.currentViewState == 0)
        {
          window.scrollTo(0,0);
          return;
        }
      }
      
    

    }
}
</script>
