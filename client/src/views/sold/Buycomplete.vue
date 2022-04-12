<template>

<div>
  <div class="mt-48" style="min-height:100vh;">
      
      <div> 
        <div style="max-width: 780px; margin:auto" class="">
          <div style="box-shadow:none">
            <div style="border-radius: 10px; padding-top:0; width: 200px; height:200px; margin:auto; ">
              <img :src="imageUrl+ item.PRODUCT_PIC" alt="아이템 사진" crossorigin />    
            </div>
            <div>
              <div class="px-6 text-center py-12">
                <div class="text-center">
                   <p class="text-lg" style="font-weight:700; letter-spacing: -.15px;"><strong>구매 입찰이 완료되었습니다.</strong></p> 
                   <p class="text-sm">결제는 거래가 성사되는 시점에<br>등록하신 결제 정보로 자동 처리 됩니다.</p>  
                </div>  
                <div class="mt-8 mb-10 ">
                  <a href="#" class="inline-block align-middle text-center text-sm bg-black  rounded mr-4"
                  style="padding: 10px 20px ; color: white !important;">
                    내역 상세보기
                  </a>
                  <a href="#" class="inline-block align-middle text-center text-sm bg-black rounded"
                     style="padding: 10px 20px ; color: white !important;">
                    shop 바로가기
                  </a>
                </div>  
                    <p class="text-sm">'구매 내역 > 입찰중' 상태에는 입찰 지우기가 가능합니다.</p>
                            <div class="pt- m-3 ">
                    <dl class="flex items-center justify-between" style="min-height: 26px;">
                      <dt>
                        <span class="text-sm" style="color:black">구매 희망가</span>
                      </dt>
                      <dd class="text-right text-sm" style="color:#222">
                        <strong>{{buy[0].buy_price.toLocaleString('ko-KR')}}원</strong>
                   

                        </dd>
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



export default {


  data() {
    return {
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
      hasMaxPrice:0,
      checksucess: [],
      tab: null,
      text: '판매 희망가',
      month:0,
      buy: {
        buy_key:0,
        product_key:'',
        BUY_PRICE: 0,
        buy_price: '',
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
            PRODUCT_KEY:0,
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


  mounted() {
    let that = this;
    this.item.PRODUCT_KEY = this.$route.params.PRODUCT_KEY;
    console.log(this.item.PRODUCT_KEY);
    this.$axios.get(`http://localhost:8080/buy/${this.item.PRODUCT_KEY}`)
      .then(function (res) {
        that.item = res.data;
      })
      .catch(function (err) {
        console.log(err);
      });

    this.$axios.post("http://localhost:8080/buy/comp", {
        productkey:  this.item.PRODUCT_KEY 
      })
      .then(function (res) {
        that.buy = res.data;

        
       
      })
      .catch(function (err) {
        console.log(err);
      });
    
    

    
  },

  updated() {
    let that =this;
    this.$axios.post("http://localhost:8080/buy/update", {
      user_key: JSON.parse(localStorage.getItem('userKey')),
      buyer_key: that.buy[0].buy_key
    })
    .then(function (res) {
      console.log(res);
      
    })
    .catch(function (err) {
      console.log(err);
    });
  },
  

}

</script>
