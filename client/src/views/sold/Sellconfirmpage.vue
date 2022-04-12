<template>

  <div>
    <main class="profile-page">
      <section class="relative py-16 bg-blueGray-200 mt-12">

        <div class="container mx-auto px-4">
          <div class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg ">


            <div  style="border-bottom: 3px solid black;">
              <h5 class="text-xl font-semibold leading-normal mb-2 text-black mb-2 text-left m-3">판매 입찰하기</h5>
            </div>
            <div>
              <div class="flex flex-wrap items-center mt-10 mb-5 px-6">
                <div style="padding-top: 0px; padding-right: 16px; padding-bottom: 20px; padding-left: 16px;">
                  <div class="flex items-center" style="width:100% color:#fff">
                    <div class="" style="width:80px; height:80px; flex-shrink: 0; border-radius: 10px; background-clolr: rgb(244,244,244); overflow: hidden;
                position: relative;">
                     <img :src="imageUrl+ item.PRODUCT_PIC" alt="아이템 사진" crossorigin />
                    </div>
                    <div style="overflow:hidden; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; padding-left: 16px;">
                      <strong
                        style="display: block; line-height: 17px;font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{item.PRODUCT_BRAND}}</strong>
                      <p
                        style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 17px;margin-top: 1px;font-size: 14px;">
                        {{item.PRODUCT_NAME}}
                      </p>
                      <p style="line-height: 16px;font-size: 13px;letter-spacing: -.07px;">{{item.PRODUCT_DESE}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="p-5" style="border-top:8px; background-color:#fff;">
              <ul class="flex rounded-tr p-5 items-center px-4">
                <li class="text-center flex-1 border-r">
                  <p class="text-lg font-semibold">즉시 구매가</p>
                  <span class="inline-block text-2xl" v-if="hasMaxPrice === 0">-</span>
                  <span class="inline-block text-2xl text-right"
                    v-else>{{buy[0].buy_price.toLocaleString('ko-KR')}}원</span>
                </li>
                <li class="text-center flex-1 font-semibold">
                  <p class="text-lg">즉시 판매가</p>
                  <span class="inline-block text-2xl" v-if="hasMinPrice === 0">-</span>
                  <span class="inline-block text-2xl" v-else>{{max[0].SELL_PRICE.toLocaleString('ko-KR')}}원</span>

                </li>
              </ul>
              <div class="relative p-5" style="width:100%; margin:auto;">
                <v-card :elevation="0">
                  <v-tabs v-model="tab" centered icons-and-text style=" margin:auto;">
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#tab-1" style="width: 50%;">
                      판매 입찰
                    </v-tab>

                    <v-tab href="#tab-2" style="width: 50%;">
                      즉시 판매
                    </v-tab>


                  </v-tabs>

                  <v-tabs-items v-model="tab" style="width: 70%; margin:auto;">
                    <v-tab-item :value="'tab-1'">
                      <v-card flat>
                        <dl class="p-5 m-3 justify-between flex mb-5 items-center"
                          style="border-bottom: 2px solid #ebebeb;">
                          <dt class="text-s">판매 희망가</dt>
                          <dd class="text-sm"><input type="text"
                              style="adding-left: 2px;
                            line-height: 26px; font-size: 20px;letter-spacing: -.3px;font-weight: 700; text-align:right" autocomplete="off"
                              placeholder="희망가 입력" v-model="sell.sell_price">
                            <span class="text-sm">원</span>
                          </dd>
                        </dl>
                        <div class="pt-6 text-xs m-4" style="letter-spacing: -.07px;">
                          <p class="pt-6 text-sm text-right" style="color:gray">*총 결제 금액은 다음 화면에서 계산됩니다</p>
                        </div>
                        <div>
                          <v-row justify="center" class="text-center m-4">
                            <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlFor="출시일">
                            </label>
                            <input type="date"
                              class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              placeholder="경매날짜" v-model="sell.sell_edate" />
                          </v-row>
                        </div>
                        <div class="text-center mt-6">
                          <button
                            class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button" @click="formSubmit()">
                            작성하기
                          </button>
                        </div>
                      </v-card>
                    </v-tab-item>

                  </v-tabs-items>
                  <v-tabs-items v-model="tab" style="width: 70%; margin:auto;">
                    <v-tab-item :value="'tab-2'">
                      <v-card flat>
                        <dl class="p-5 m-3 justify-between flex mb-5 items-center"
                          style="border-bottom: 2px solid #ebebeb;">
                          <dt class="text-s">즉시 판매가</dt>
                          <dd class="text-base" v-if="hasMinPrice === 0">
                           -
                          </dd>
                          <dd class="text-base" v-else>
                            {{max[0].SELL_PRICE.toLocaleString('ko-KR')}}원
                          </dd>
                        </dl>
                        <div class="pt-6 text-xs m-4" style="letter-spacing: -.07px;">
                          <p class="pt-6 text-sm text-right" style="color:gray" v-if="hasMinPrice == 1">*총 결제 금액은 다음 화면에서 계산됩니다</p>
                          <p class="pt-6 text-sm text-right" style="color:gray" v-else></p>

                        </div>
                        <div>
                          <div style="flex items-center no-underline" v-if="hasMinPrice == 0">
                            <h3 class="pt-6 text-sm text-center">입찰내역이 없습니다</h3>
                          </div>
                          <div style="flex items-center no-underline" v-else>
                            <button  class="full-image" @click="clicked"
                              style="color: #fafafa !important;">
                              판매 확정하기
                            </button>
                          </div>
                        </div>
                      </v-card>
                    </v-tab-item>

                  </v-tabs-items>
                </v-card>
              </div>
            </div>
          
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>

export default {
  data() {
    return {
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
      hasMaxPrice:0,
      hasMinPrice:0,
      checksucess: [],
      tab: null,
      text: '판매 희망가',
      month:0,
     sell: {
        product_key:'',
        sell_price: 0,
        sell_sdate: '',
        sell_edate: '',
        sell_status:'',
        sell_seller_key:JSON.parse(localStorage.getItem('userKey')),
        
        default: "0"
      },
      buy:{
          buy_price:0,
          buy_sdate:'',
          buy_edate:'',
          buy_key:0,
      },

       max: {
        sell_seller_key:JSON.parse(localStorage.getItem('userKey')), 
        product_key:'',
        SELL_PRICE: 0,
        SELL_SDATE: '',
        SELL_EDATE: '',
        SELL_STATUS:'',

        default: "0"
      },

       item: 
          { 
            PRODUCT_KEY:'0',
            PRODUCT_PIC:'',
            PRODUCT_NAME: '',
            PRODUCT_BRAND: '',
            PRODUCT_CATE:0,
            PRODUCT_ORIPRICE:'',
          },

    };
  },

  
  methods: {
     formSubmit() {
      const curr = new Date();
      const utc =curr.getTime() + (curr.getTimezoneOffset() * 60 * 1000);
      const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
      const kr_curr =new Date(utc + (KR_TIME_DIFF));
      console.log("시작전");

      let vm=this;
      this.$axios.post('http://localhost:8080/sell/proc', {

          sell_price: vm.sell.sell_price,
          sell_edate: vm.sell.sell_edate,
          sell_status: 0,
          sell_seller_key:vm.sell.sell_seller_key,
          product_key: vm.item.PRODUCT_KEY, //상품 키 받아와야함
          sell_sdate: kr_curr,
      })
          .then(() => {
            alert("입찰 되었습니다.");
            this.$router.push("/");
          })
          .catch((error) => {
            alert("실패 하셨습니다");
            this.$router.push("/");
            console.log(error);
          })
    },
     clicked() {
      this.$router.push({
        path: './co',
        name: 'Sellcomp',
        params: {
          PRODUCT_KEY: this.item.PRODUCT_KEY
        }
      });

    }
  },

  mounted() {
     var vm = this;
      this.item.PRODUCT_KEY = this.$route.params.PRODUCT_KEY;

      this.$axios.get(`http://localhost:8080/sell/${this.item.PRODUCT_KEY}`)
        .then(function (res) {
          console.log(res);
          vm.item = res.data;
          console.log(vm.item);
        })
        .catch(function (err) {
          console.log(err);
        });
    this.$axios.post("http://localhost:8080/buy/comp",{
       productkey:this.item.PRODUCT_KEY
    })
      .then(function (res) {
        that.buy = res.data;
        console.log(that.buy);
        console.log(that.buy[0].buy_price); 
        if(that.buy === null || that.buy.length == 0 || that.buy[0].buy_price === null)
         {
               that.hasMaxPrice = 0;
               console.log("트루인부분",that.hasMaxPrice);
         }

        else
        {
              that.hasMaxPrice = 1;
              console.log("fail인 부분",that.hasMaxPrice); 

        }
      }) 
      .catch(function (err) {
          console.log(err);
        });

     
  let that = this;
    this.$axios.post("http://localhost:8080/sell/comp",{
       productkey:this.item.PRODUCT_KEY
    })
      .then(function (res) {
        that.max = res.data;
          
        if(that.max === null || that.max.length == 0 || that.max[0].SELL_PRICE === null)
         {
               that.hasMinPrice = 0;
               console.log("트루인부분",that.hasMinPrice);
         }

        else
        {
              that.hasMinPrice = 1;
              console.log("fail인 부분",that.hasMinPrice); 

        }
      }) 
      .catch(function (err) {
          console.log(err);
        });      
    },

 
}

</script>
