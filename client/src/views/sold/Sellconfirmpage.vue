<template>

  <div>
    <main class="profile-page">

      <section class="relative block h-500-px">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" :style="{ backgroundImage: `url(${legoBg})` }">
          <span id="blackOverlay" class="w-full h-full absolute opacity-30 bg-white"></span>
        </div>
        <div class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
          style="transform: translateZ(0);">
          <svg class="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
            version="1.1" viewBox="0 0 2560 100" x="0" y="0">
            <polygon class="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
          </svg>

        </div>
      </section>


      <section class="relative py-16 bg-blueGray-200">

        <div class="container mx-auto px-4">
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">


            <div class="px-6">
              <h5 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center m-3">구매 입찰하기</h5>
            </div>
            <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
              <div class="container m-3">
                <div class="sold-content">
                  <div class="mr-2 break-words" style="word-break: keep-all;"><span
                      class="m-2 text-xxl text-left"><strong>대충 상품 설명하는중</strong></span>
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
              <ul class="flex rounded-tr p-5 items-center px-4">
                <li class="text-center flex-1 border-r">
                  <p class="text-lg">즉시 구매가</p>
                  <span class="inline-block text-2xl">4,500,000원</span>
                </li>
                <li class="text-center flex-1">
                  <p class="text-lg">즉시 구매</p>
                  <span class="inline-block text-2xl">4,500,000원</span>
                </li>
              </ul>
              <div class="relative p-5" style="width:70%; margin:auto;">
                <v-card>
                  <v-tabs v-model="tab" background-color="#41b979" centered dark icons-and-text
                    style="border-radius:10px;  margin:auto;">
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab href="#tab-1">
                      구매 입찰
                      <v-icon></v-icon>
                    </v-tab>

                    <v-tab href="#tab-2">
                      즉시 구매
                      <v-icon>mdi-heart</v-icon>
                    </v-tab>


                  </v-tabs>

                  <v-tabs-items v-model="tab">
                    <v-tab-item v-for="i in 2" :key="i" :value="'tab-' + i">
                      <v-card flat>
                        <dl class="m-3 justify-between flex mb-5 items-center"
                          style="border-bottom: 2px solid #ebebeb;">
                          <dt class="text-s">구매 희망가</dt>
                          <dd class="text-sm"><input type="text" style="adding-left: 2px;
                            line-height: 26px; font-size: 20px;letter-spacing: -.3px;font-weight: 700; text-align:right" 
                            autocomplete="off" placeholder="희망가 입력" v-model="buy.buy_price">
                           <span class="text-sm">원</span>
                            </dd>
                        </dl>
                          <div class="pt-6 text-xs m-4" style="letter-spacing: -.07px;">
                            <p class="pt-6 text-sm text-right" style="color:gray">*총 결제 금액은 다음 화면에서 계산됩니다</p>
                          </div>
                         <div>
                   <v-row justify="center" class="text-center m-4">
                    <label
                          class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="출시일"
                      >
                        마감 기한
                      </label>
                      <input
                          type="date"
                          class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="경매날짜"  v-model="buy.buy_edate"
                      />
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
      buy: {
        buy_buyer_key:'',
        product_key:'',
        buy_price: 0,
        buy_sdate: '',
        buy_edate: '',
        buy_status:'',
        buy_seller_key:'',
        default: "0"
      }

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
      this.$axios.post('http://localhost:8080/buy/proc', {
          buy_buyer_key: 1,
          product_key: 1,
          buy_price: vm.buy.buy_price,
          buy_edate: vm.buy.buy_edate,
          buy_status: 1,
          buy_seller_key: 1,
          buy_sdate: kr_curr,
      })
          .then(() => {
            alert("입찰 되었습니다.");
            this.$router.push('/buy');
          })
          .catch((error) => {
            alert("실패");
            console.log(error);
          })
    },
  },

  watch:{
	  buy_price(a){
      if (isNaN(a) == true){
        alert('숫자만 입력해주세요');
        this.month = 1;
      }
    },
	}
}

</script>
