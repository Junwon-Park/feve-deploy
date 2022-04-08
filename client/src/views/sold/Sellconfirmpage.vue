<template>

  <div>
    <main class="profile-page">
      <section class="relative py-16 bg-blueGray-200 mt-12">

        <div class="container mx-auto px-4">
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg ">


            <div class=" " style="border-bottom: 3px solid black;">
              <h5 class="text-xl font-semibold leading-normal mb-2 text-black mb-2 text-left m-3">판매 입찰하기</h5>
            </div>
            <div>
              <div class="flex flex-wrap items-center mt-10 mb-5 px-6">
               <div style="padding-top: 0px; padding-right: 16px; padding-bottom: 20px; padding-left: 16px;">
                  <div class="flex items-center" style="width:100% color:#fff">
                    <div class="" style="width:80px; height:80px; flex-shrink: 0; border-radius: 10px; background-clolr: rgb(244,244,244); overflow: hidden;
                position: relative;">
                      <img :src="legoBg" alt="..."/> 
                    </div>
                    <div style="overflow:hidden; -webkit-box-flex: 1; -ms-flex: 1; flex: 1; padding-left: 16px;">
                      <strong
                        style="display: block; line-height: 17px;font-size: 14px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">-</strong>
                      <p
                        style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; line-height: 17px;margin-top: 1px;font-size: 14px;">
                        상품 명
                      </p>
                      <p style="line-height: 16px;font-size: 13px;letter-spacing: -.07px;">상품브랜드</p>
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
                  <span class="inline-block text-2xl text-right">{{buy[0].buy_price.toLocaleString('ko-KR')}}원</span>
                </li>
                <li class="text-center flex-1 font-semibold">
                  <p class="text-lg">즉시 판매가</p>
                  <span class="inline-block text-2xl">{{max.SELL_PRICE.toLocaleString('ko-KR')}}원</span>
                </li>
              </ul>
              <div class="relative p-5" style="width:100%; margin:auto;">
                <v-card :elevation="0">
                  <v-tabs v-model="tab" centered  icons-and-text
                    style=" margin:auto;">
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#tab-1" style="width: 50%;">
                      구매 입찰
                    </v-tab>

                    <v-tab href="#tab-2" style="width: 50%;">
                      즉시 구매
                    </v-tab>


                  </v-tabs>

                  <v-tabs-items v-model="tab" style="width: 70%; margin:auto;">
                    <v-tab-item :value="'tab-1'">
                      <v-card flat>
                        <dl class="p-5 m-3 justify-between flex mb-5 items-center"
                          style="border-bottom: 2px solid #ebebeb;">
                          <dt class="text-s">구매 희망가</dt>
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
                      </v-card>
                    </v-tab-item>

                  </v-tabs-items>
                  <v-tabs-items v-model="tab" style="width: 70%; margin:auto;">
                    <v-tab-item :value="'tab-2'">
                      <v-card flat>
                        <dl class="p-5 m-3 justify-between flex mb-5 items-center"
                          style="border-bottom: 2px solid #ebebeb;">
                          <dt class="text-s">구매 희망가</dt>
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
                      </v-card>
                    </v-tab-item>

                  </v-tabs-items>
                </v-card>
              </div>
            </div>
            
            <div class="text-center mt-6">
                    <button
                        class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        @click="formSubmit()"
                    >
                      작성하기
                    </button>
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
      tab: null,
      text: '판매 희망가',
      month:0,
     sell: {
        sell_buyer_key:'',
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
          product_key: 1, //상품 키 받아와야함
          sell_sdate: kr_curr,
      })
          .then(() => {
            alert("입찰 되었습니다.");
            this.$router.push("http://localhost:3000/");
          })
          .catch((error) => {
            alert("실패");
            this.$router.push("http://localhost:3000/");
            console.log(error);
          })
    },
  },

  beforeCreate() {
    this.$axios.post("http://localhost:8080/buy/comp")
      .then(function (res) {
        that.buy = res.data;
        console.log(that.buy);
        console.log(that.buy[0].buy_price); 
      }) 
      .catch(function (err) {
          console.log(err);
        });

      var vm = this;
      this.$axios.post('http://localhost:8080/sell')
        .then(function (res) {
          console.log(res);
          vm.item = res.data;
          console.log(vm.item);
        })
        .catch(function (err) {
          console.log(err);
        });
  let that = this;
    this.$axios.post("http://localhost:8080/sell/comp")
      .then(function (res) {
        that.max = res.data;
        console.log(that.max);
        console.log(that.max.SELL_PRICE); 
      }) 
      .catch(function (err) {
          console.log(err);
        });      
    },

  watch:{
	  buy_price(a){
      if (isNaN(a) == true){
        alert('숫자만 입력해주세요');
      }
    },
	}
}

</script>
