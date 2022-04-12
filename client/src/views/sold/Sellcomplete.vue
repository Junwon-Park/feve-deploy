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
                   <p class="text-lg" style="font-weight:700; letter-spacing: -.15px;"><strong>판매 입찰이 완료되었습니다.</strong></p> 
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
                    <p class="text-sm">'판매 내역 > 입찰중' 상태에는 입찰 지우기가 가능합니다.</p>
                               <div class="pt- m-3 ">
                    <dl class="flex items-center justify-between" style="min-height: 26px;">
                      <dt>
                        <span class="text-sm" style="color:black">구매 희망가</span>
                      </dt>
                      <dd class="text-right text-sm" style="color:#222">
                        <strong>{{sell[0].SELL_PRICE.toLocaleString('ko-KR')}}원</strong>

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
      tab: null,
      hasMinPrice:0,
      text: '판매 희망가',
      month:0,
      sell: {
    
        product_key:'',
        sell_key:0,
        sell_price: 0,
        sell_sdate: '',
        sell_edate: '',
        sell_status:'',
        default: "0"
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
    this.$axios.get(`http://localhost:8080/sell/${this.item.PRODUCT_KEY}`)
        .then(function (res) {
          console.log(res);
          that.item = res.data;
          console.log(that.item);
        })
        .catch(function (err) {
           console.log(err);
        });

    this.$axios.post("http://localhost:8080/sell/comp",{
      productkey: this.$route.params.PRODUCT_KEY
    })
      .then(function (res) {
        that.sell = res.data;
        if (that.sell === null || that.sell.length == 0 || that.sell[0].SELL_PRICE === null) {
          that.hasMinPrice = 0;
        } else {
          that.hasMinPrice = 1;

        }
      
      }) 
      .catch(function (err) {
          console.log(err);
        });
  
    

     
  },
updated() {
     this.$axios.post("http://localhost:8080/sell/update", {
        user_key: JSON.parse(localStorage.getItem('userKey')),
        seller_key: this.sell[0].SELL_KEY
      })
      .then(function (res) {
        console.log(res,"udpate됨");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

}

</script>
