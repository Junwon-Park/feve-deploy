<template>

<div>
  <div class="pt-24" style="min-height:100vh;">
    <div>
    </div>
    <div> 
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
