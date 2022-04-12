<template>

  <div>
    <main class="profile-page">

      <section class="relative block h-500-px">
        <div class="absolute top-0 w-full h-full bg-center bg-cover" >
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


      <section class="relative py-16 bg-blueGray-200 border-bottom: 2px solid rgb(235, 235, 235);">

        <div class="container mx-auto px-4">
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <h5 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center m-3">즉시 판매 확정</h5>
            </div>
            <div>
              <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
                <div style="padding-top: 0px; padding-right: 16px; padding-bottom: 20px; padding-left: 16px;">
                  <div class="flex items-center" style="width:100% color:#fff">
                    <div class="" style="width:80px; height:80px; flex-shrink: 0; border-radius: 10px; background-color: rgb(244,244,244); overflow: hidden;
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

             
              <hr>
              <div class="p-5" style="border-top:8px; background-color:#fff; ">
                <section class="p-5 m-3 border-bottom: 2px solid rgb(235, 235, 235);">
                  <div>
                    <div class="pb-2">
                      <h3 class="text-lg"><strong>배송 주소</strong></h3>
                    </div>
                    <div>
                      <div style="padding-right:80;" class="relative">
                        <div>
                          <dl style="display: block;
                              margin-block-start: 1em;
                              margin-block-end: 1em;
                              margin-inline-start: 0px;
                              margin-inline-end: 0px;">
                            <div class="overflow-hidden" style="line-height: 17px; letter-spacing: -.15px;">
                              <dt class="text-sm"
                                style="float: left; min-width: 80px; letter-spacing: -1px;  letter-spacing: -.07px; color: rgba(34,34,34,.5);">
                                받는 분
                              </dt>
                              <dd style="overflow: hidden; font-size: 14px;letter-spacing: -.21px;">
                                  {{user.USER_NAME}}
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div>
                          <dl style="display: block;
                              margin-block-start: 1em;
                              margin-block-end: 1em;
                              margin-inline-start: 0px;
                              margin-inline-end: 0px;">
                            <div class="overflow-hidden" style="line-height: 17px; letter-spacing: -.15px;">
                              <dt class="text-sm"
                                style="float: left; min-width: 80px; letter-spacing: -1px;  letter-spacing: -.07px; color: rgba(34,34,34,.5);">
                                연락처
                              </dt>
                              <dd style="overflow: hidden; font-size: 14px;letter-spacing: -.21px;">
                                  {{user.USER_PHONE}}
                              </dd>
                            </div>
                          </dl>
                        </div>
                        <div>
                          <dl style="display: block;
                              margin-block-start: 1em;
                              margin-block-end: 1em;
                              margin-inline-start: 0px;
                              margin-inline-end: 0px;">
                            <div class="overflow-hidden" style="line-height: 17px; letter-spacing: -.15px;">
                              <dt class="text-sm"
                                style="float: left; min-width: 80px; letter-spacing: -1px;  letter-spacing: -.07px; color: rgba(34,34,34,.5);">
                                배송 주소
                              </dt>
                              <dd style="overflow: hidden; font-size: 14px;letter-spacing: -.21px;">
                                  {{user.USER_ADDRESS1}}
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <hr>
                <section class="p-5 m-3 ">
                  <div class="pb-2 ">
                    <h3 class="text-lg text-left"><strong>최종 주문 정보</strong></h3>
                  </div>

                  <div class="text-sm">
                    <div class="pt-2">
                      <div class="pb-2" style="border-bottom: 2px solid #ebebeb;">
                        <dl style="justify-between items-center">
                          <dt class="text-sm" style="font-weight: 700;
                   letter-spacing: -.01px;">정산 금액</dt>
                          <dd class="text-right" style="display:block; color: #31b46e;     margin-inline-start: 40px;">
                            <span class="text-lg">{{sell[0].SELL_PRICE.toLocaleString('ko-KR')}}</span>
                            <span class="text-lg">원</span>

                          </dd>

                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="pt- m-3">
                    <dl class="flex items-center justify-between" style="min-height: 26px;">
                      <dt>
                        <span class="text-sm" style="color:black">판매 희망가</span>
                      </dt>
                      <dd class="text-right text-sm" style="color:#222" v-if="hasMinPrice === 0">
                        <strong>-</strong></dd>
                      <dd class="text-right text-sm" style="color:#222" v-else>
                        <strong>{{sell[0].SELL_PRICE.toLocaleString('ko-KR')}}원</strong></dd>  
                    </dl>
                  </div>

                  <div class="pt- m-3">
                    <dl class="flex items-center justify-between" style="min-height: 26px;">
                      <dt>
                        <span class="text-sm" style="color:gray">포인트</span>
                      </dt>
                      <dd class="text-right text-sm" style="color:#222">
                        <strong>-</strong></dd>
                    </dl>
                  </div>

                  <div class="pt- m-3">
                    <dl class="flex items-center justify-between" style="min-height: 26px;">
                      <dt>
                        <span class="text-sm" style="color:gray">검수비</span>
                      </dt>
                      <dd class="text-right text-sm" style="color:#222">
                        <strong>무료</strong></dd>
                    </dl>
                  </div>

                  <div class="pt- m-3">
                    <dl class="flex items-center justify-between" style="min-height: 26px;">
                      <dt>
                        <span class="text-sm" style="color:gray">수수료</span>
                      </dt>
                      <dd class="text-right text-sm" style="color:#222">
                        <strong>무료</strong></dd>
                    </dl>
                  </div>

                  <div class="pt- m-3">
                    <dl class="flex items-center justify-between" style="min-height: 26px;">
                      <dt>
                        <span class="text-sm" style="color:gray">배송비</span>
                      </dt>
                      <dd class="text-right text-sm" style="color:#222">
                        <strong>무료</strong></dd>
                    </dl>
                  </div>

                </section>
              </div>
            </div>
            <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
              <div class="container m-3">
                <ul>
                  <li style="list-style:none border-top:none" class="border-b-2 m-4">
                    <div class="flex items-center no-underline">
                      <div class="mr-2 break-words" style="word-break: keep-all;">
                        <p class="text-sm"><strong>송장 미기재 오입력시 입고가 진행이 안됩니다.</strong></p>

                        <p class="mt-1 text-xs  ml-auto">앱 알림 해제, 알림톡 차단, 전화번호 변경 후 미등록 시에는 거래 진행 상태 알림을 받을 수 없으며 이로 인한
                          거래 실패는 판매자의 책임입니다.</p>
                      </div>
                      <div class="ml-auto relative">
                        <input id="check1" class="checkboxconfirm" type="checkbox">
                        <label for="check1">
                        </label>

                      </div>
                    </div>
                  </li>

                  <li style="list-style:none border-top:none " class="border-b-2 m-4">
                    <div class="flex items-center no-underline">
                      <div class="mr-2 break-words " style="word-break: keep-all;">
                        <p class="text-sm"><strong>검수 기준과 페널티 및 이용 정책을 다시 한번 확인하였습니다.</strong></p>

                        <p class="mt-1 text-xs  ml-auto">이용정책 위반 시, 판매 금액의 최대 15.0%의 페널티가 부과됩니다. 페널티 회피 시 이후 거래가 제한되며 별도
                          고지없이 해당 금액을 결제 시도할 수 있습니다</p>
                      </div>
                      <div class="ml-auto relative ">
                        <input id="check2" class="checkboxconfirm" type="checkbox">
                        <label for="check2">
                        </label>

                      </div>
                    </div>
                  </li>

                  <li style="list-style:none border-top:none " class="border-b-2 m-4">
                    <div class="flex items-center no-underline">
                      <div class="mr-2 break-words " style="word-break: keep-all;">
                        <p class="text-sm"><strong>‘바로 판매하기’ 를 선택하시면 즉시 거래가 체결되며, 단순 변심이나 실수에 의한 취소가 불가능합니다.</strong>
                        </p>

                      </div>
                      <div class="ml-auto relative ">
                        <input id="check3" class="checkboxconfirm" type="checkbox">
                        <label for="check3">
                        </label>

                      </div>
                    </div>
                  </li>

                  <li style="list-style:none border-top:none " class="border-b-2 m-4">
                    <div class="flex items-center no-underline">
                      <div class="mr-2 break-words" style="word-break: keep-all;">
                        <p class="text-sm"><strong>feve 최신 이용정책을 모두 확인하였으며 구매를 계속합니다</strong></p>

                        <p class="mt-1 text-xs  ml-auto">안전한 거래를 위해 반드시 숙지해야 할 미입고,페널티,부정거래 등의 이용정책을 확인했습니다</p>
                      </div>
                      <div class="ml-auto relative">
                        <input id="check4" class="checkboxconfirm" type="checkbox">
                        <label for="check4">
                        </label>

                      </div>
                    </div>
                  </li>

                  <li style="list-style:none border-top:none " class="border-b-2 m-4">
                    <div class="flex items-center no-underline">
                      <div class="mr-2 break-words " style="word-break: keep-all;">
                        <p class="text-sm"><strong>거래 체결시 48시간에 FEVE로 정보를 발송해야합니다.</strong></p>

                        <p class="mt-1 text-xs  ml-auto">착불 배송 시 판매 금액에서 차감 정산하며, 미정산 시 별도 고지없이 해당 금액을 결제 시도할 수 있습니다.
                        </p>
                      </div>
                      <div class="ml-auto relative">
                        <input id="check5" class="checkboxconfirm" type="checkbox">
                        <label for="check5">
                        </label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-center mt-6">
              <button
                class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button" @click="updatebuy()">
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

export default {


  data() {
    return {
      
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
      ifNull: false,
      hasMinPrice:0,
      checksucess: [],
      tab: null,
      text: '판매 희망가',
      month:0,
      nowDate: new Date(Date.now() - (new Date().getTimezoneOffset() * 60000)),

      sell: {
        SELL_KEY:0,
        product_key:0,
        sell_price: 0,
        sell_sdate: '',
        sell_edate: '',
        sell_status:'',
        default: "0"
      },

      user: {
        USER_NAME:'',
        USER_PHONE:0,
        USER_ADDRESS1:''
      },

       item: 
          { 
            PRODUCT_KEY:'0',
            PRODUCT_DESE:'',
            PRODUCT_PIC:'',
            PRODUCT_NAME: '',
            PRODUCT_BRAND: '',
            PRODUCT_CATE:0,
            PRODUCT_ORIPRICE:'',
          },


   

    };
  },
  methods: {
    
    updatebuy() {

        const query = 'input[id*="check"]:checked';
      const selectedElements = document.querySelectorAll(query);
      const selectedElementsCnt = selectedElements.length;
       if (selectedElementsCnt === 5) {
            this.$router.push({
              path: './complete',
              name: 'Sellcomplete',
              params: {
                PRODUCT_KEY: this.item.PRODUCT_KEY
              }
            });

          } else {
            alert("체크다하세요");
            event.preventDefault();

          } 
     

       

  

    }

  },

  // created()
  
  // {
  //   if(this.nowdate > moment(this.buy_edate, 'YYYY-MM-DD'))
  //   {

  //   }
  // },
  beforeCreate() {
      this.$axios.post("http://localhost:8080/sell/updatefail")
      .then(function (res) {
        console.log(res,"update패일시킨거");
      })
      .catch(function (err) {
        console.log(err);
      });   
  },

  mounted() {
    let that = this;
    this.item.PRODUCT_KEY = this.$route.params.PRODUCT_KEY;
    this.$axios.get(`http://localhost:8080/sell/${this.item.PRODUCT_KEY}`)
      .then(function (res) {
        console.log(res);
        that.item = res.data;
        console.log(that.item);
      })
      .catch(function (err) {
        console.log(err);
      });

    this.$axios.post("http://localhost:8080/sell/comp", {
        productkey: this.$route.params.PRODUCT_KEY
      })
      .then(function (res) {
        that.sell = res.data;
        if (that.sell === null || that.sell.length == 0 || that.sell[0].buy_price === null) {
          that.hasMinPrice = 0;
        } else {
          that.hasMinPrice = 1;

        }
      })
      .catch(function (err) {
        console.log(err);
      });


    this.$axios.post("http://localhost:8080/sell/comp/user", {
        user_key: JSON.parse(localStorage.getItem('userKey'))

      })
      .then(function (res) {
        that.user = res.data;
        console.log(that.user.USER_NAME);

      })
      .catch(function (err) {
        console.log(err);
      });

    },


    }

</script>
