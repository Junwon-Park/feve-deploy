<template>

  <div>
    <main class="profile-page">

      <section class="relative py-16 bg-blueGray-200 mt-12" style="min-height: 90vh;">

        <div class="container mx-auto px-4">
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6  rounded-lg">


            <div class="px-6">

              <h5 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center m-3">구매동의</h5>
              <h6 class="text-3xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center m-3">구매하시기 전에 꼭
                확인하세요!!</h6>
                
            </div>
            <div>
              <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
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
                      <p style="line-height: 16px;font-size: 13px;letter-spacing: -.07px;">{{item.PRODUCT_DESC}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
              <div class="container m-3">
                <ul>
                  <li style="list-style:none border-top:none" class="border-b-2 m-4">
                    <div class="flex items-center no-underline">
                      <div class="mr-2 break-words" style="word-break: keep-all;">
                        <p class="text-sm"><strong>구매하실 상품 맞으신가요?</strong></p>

                        <p class="mt-1 text-xs  ml-auto">상품 이미지 모델번호 출시일 상품명 사이즈 한 번 더 확인했습니다.</p>
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
                        <p class="text-sm"><strong>제조사에서 불량으로 인정하지 않는 기준은 하자로 판단하지 않습니다</strong></p>

                        <p class="mt-1 text-xs  ml-auto">박스/패키치와 상품 컨디션에 민감하시다면 검수 기준을 반드시 확인하시기 바랍니다.</p>
                           <a class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-5 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-120" href="http://localhost:3000/CscenterStandard" id="change-button" style="color: #fafafa !important; ">
                             검수사항
                           </a>
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
                        <p class="text-sm"><strong>패키지(포장) 개봉 검수에 대한 주의사항을 확인합니다</strong></p>

                        <p class="mt-1 text-xs  ml-auto">검수 과정 중 밀봉 및 실링이 모두 개봉되어 패키지로 포장되어 발송됩니다.</p>
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
                        <p class="text-sm"><strong>구매하실 상품 맞으신가요?</strong></p>

                        <p class="mt-1 text-xs  ml-auto">상품 이미지 모델번호 출시일 상품명 사이즈 한 번 더 확인했습니다.</p>
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
            <div style="flex items-center no-underline">
              <button  @click="clicked" id="change-button" class="full-image"
                 style="color: #fafafa !important;">
                동의하기
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


export default {
  data() {
    return {
         imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',  
         anguler,
         checksucess: [],
         
         item: 
          { 
            PRODUCT_KEY:0,
            PRODUCT_PIC:'',
            PRODUCT_NAME: '',
            PRODUCT_BRAND: '',
            PRODUCT_CATE:0,
            PRODUCT_DESC:'',
          },
        
          
    }
  },
  
  mounted() {
      var vm = this;
      this.item.PRODUCT_KEY = this.$route.params.PRODUCT_KEY;
      console.log(this.item.PRODUCT_KEY);
      this.$axios.get(`http://localhost:8080/buy/${this.item.PRODUCT_KEY}`)
        .then(function (res) {
          console.log(res.data);
          vm.item = res.data;
        })
        .catch(function (err) {
        console.log(err);
        });
      },
    methods: {
      clicked() {

        const query = 'input[id*="check"]:checked';
        const selectedElements = document.querySelectorAll(query);
        const selectedElementsCnt = selectedElements.length;
        console.log(selectedElementsCnt);
        if (selectedElementsCnt === 5) {
          console.log(this.item.PRODUCT_KEY);
          this.$router.push({
            path: './proc',
            name: 'Buyproc',
            params: {
              PRODUCT_KEY: this.item.PRODUCT_KEY
            }
          });

        } else {
          alert("동의사항에 체크 부탁드립니다.");
          event.preventDefault();

        }
      
     

      },
  

    },
        
        };

</script>

<style>
input[type=checkbox] {
  display: none !important;
}
</style>