<template>

<div>
  <div class="pt-24" style="min-height:100vh;">
      
      <div> 
        <div style="max-width: 780px; margin:auto" class="pb-24">
          <div style="box-shadow:none">
            <div style="border-radius:0; padding-top:0; height:200px; background-color: rgb(235, 240, 245);">
              <img :src="legoBg" alt="..." style="object-fit:cover; width:100%; height:100%; width: 410px; margin:auto"/>

            </div>
            <div>
              <div class="px-6 text-center py-12">
                <div class="text-center">
                   <p class="text-lg" style="font-weight:700; letter-spacing: -.15px;"><strong>구매 입찰이 완료되었습니다.</strong></p> 
                   <p class="text-sm">결제는 거래가 성사되는 시점에<br>등록하신 결제 정보로 자동 처리 됩니다.</p>  
                </div>  
                <div class="mt-8 ">
                  <a href="#" class="inline-block align-middle text-center px-6" style="white-space: nowrap;  line-height: 40px; border: 1px solid #d3d3d3; color:rgba(34,34,34,8); height:42px; border-radius:12px;">내역 상세보기</a>
                  <a href="#" class="inline-block align-middle text-center px-6" style="white-space: nowrap; margin-left: 8px; line-height: 40px; border: 1px solid #d3d3d3; color:rgba(34,34,34,8); height:42px; border-radius:12px;">shop 바로가기</a>
                </div>  
                    <p>'구매 내역 > 입찰중' 상태에는 입찰 지우기가 가능합니다.</p>
               <div class="pt- m-3">
                    <dl class="flex items-center justify-between" style="min-height: 26px;">
                      <dt>
                        <span class="text-sm" style="color:black">구매 희망가</span>
                      </dt>
                      <dd class="text-right text-sm" style="color:#222">
                        <strong>{{buy.BUY_PRICE.toLocaleString('ko-KR')}}원</strong></dd>
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
              </div>
                
          </div>
          
        </div> 
       </div>  
      </div>   
    </div>  
</div>
</template>
<script>

import legoBg from "@/assets/img/bg-lego5.jpg";
import box from "@/assets/img/box.png";

export default {


  data() {
    return {
      box,
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
