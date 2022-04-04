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


      <section class="relative py-16 bg-blueGray-200 border-bottom: 2px solid rgb(235, 235, 235);">

        <div class="container mx-auto px-4">
          <div
            class="p-8 relative flex flex-col min-w-0 break-words  pd-8 bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
            <div class="px-6">
              <h5 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2 text-center m-3">구매 하기</h5>
            </div>
            <div>
              <div class="flex flex-wrap items-center mt-5 mb-5 px-6">
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
                          {{item.PRODUCT_NAME}}  
                      </p>
                      <p style="line-height: 16px;font-size: 13px;letter-spacing: -.07px;">{{item.PRODUCT_BRAND}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div class="p-5" style="border-top:8px; background-color:#fff;">

              <section class="p-5 m-3 border-bottom: 2px solid rgb(235, 235, 235);">
                <div class="relative" style="min-weight:484px; 1px solid #ebebeb;">
                  <div class="p-8" style="overflow-y:auto; background-color:#fafafa;">
                     <ul style="list_style:none margin:-4px;" >
                       <li  class="full-images">
                         <button style="    width: 100%; height: 100%; cursor: pointer;">
                           <div  style="margin:auto; max-width:90px;">
                             <span class="block text-sm" style="margin-top:3px;">ONE SIZE</span>
                             <span class="block text-xs" style=" color:red;">45000원</span>
                           </div>  
                            <!-- <div  v-else style="margin:auto; max-width:90px;">
                             <span class="block text-sm" style="margin-top:-3px;">ONE SIZE</span>
                             <span class="block text-s" style="color:red">구매 입찰</span>
                           </div>   -->
                         </button>
                       </li>  
                     </ul>   
                  </div>
                </div>
              </section>
            </div>
        
            <div class="text-center mt-6">
           <a href="http://localhost:3000/buy/" @click="clicked" id="change-button" class="full-image"
                disabled="disabled">
                구매하기
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
<script>

import legoBg from "@/assets/img/bg-lego5.jpg";

export default {


  data() {
    return {
      
      checksucess: [],
      tab: null,
      legoBg,
      text: '판매 희망가',
      month:0,
      buy: {
        
        product_key:'',
        BUY_PRICE: 0,
        buy_sdate: '',
        buy_edate: '',
        buy_status:'',
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
            PRODUCT_PIC:'',
            PRODUCT_NAME: '',
            PRODUCT_BRAND: '',
            PRODUCT_CATE:0,
            PRODUCT_ORIPRICE:'',
          },
    

    };
  },
  methods: {
     
  },


  beforeCreate() {
    let that = this;
    this.$axios.post("http://localhost:8080/buy/comp")
      .then(function (res) {
        that.buy = res.data;
        console.log(that.buy);
        console.log(that.buy.BUY_PRICE); 
      }) 
      .catch(function (err) {
          console.log(err);
        });
  
   this.$axios.post("http://localhost:8080/buy/comp/user")
      .then(function (res) {
        that.user = res.data;
        console.log(that.user.USER_NAME);
      
      }) 
      .catch(function (err) {
          console.log(err);
        });
   this.$axios.post('http://localhost:8080/buy')
        .then(function (res) {
          console.log(res);
          that.item = res.data;
          console.log(that.item);
        })
        .catch(function (err) {
          console.log(err);
        });      

  },


}

</script>