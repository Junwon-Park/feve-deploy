<template>

  <div class="w-full lg:w-6/12 xl:w-3/12 px-4 mb-5" >
  <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0"
  >
    <div class="flex-auto p-4" >
      <div class="flex flex-wrap" @click="goView(`${PRODUCT_KEY}`)" style="cursor: pointer;">
        <div class="relative w-full max-w-full flex-grow flex-1">
          <div class="w-full mb-5"  style="overflow: hidden; width:205px; height: 205px;">
            <img :src="imageUrl+ PRODUCT_PIC" alt="아이템 사진"
                 style="object-fit: cover;border-radius: .5rem;  background: #f4f4f4; width:100%; height: 100%;"
                 crossorigin>
          </div>
          <h5 class="text-black uppercase  text-sm">
            {{ PRODUCT_BRAND }}
          </h5>
           <h5 v-if="false">
           {{PRODUCT_KEY}}
          </h5>
          <span class=" text-sm font-semibold block">
            {{ PRODUCT_NAME }}
          </span>
          <!-- <span class=" text-xs   block" style="color: #aaa;">
           {{ PRODUCT_DESC }}
          </span> -->
          <span v-if="false">
            {{PRODUCT_CATE}}
          </span>
        </div>
        <div class="absolute w-auto right-0 pl-4 flex-initial">
        </div>
      </div>
      <div v-if="this.SELL_PRICE !== null" @click="goView(`${PRODUCT_KEY}`)">
        <p class="text-base text-black mt-4 mb-0">
          <b class="whitespace-nowrap">{{ SELL_PRICE.toLocaleString('ko-KR') }}원</b>
        </p>
        <p class="text-xs text-gray-400">즉시 구매가</p>
      </div>
      <div v-else @click="goView(`${PRODUCT_KEY}`)">
        <p class="text-base text-black mt-4 mb-0">
          <b class="whitespace-nowrap">구매 입찰</b>
        </p>
        <p class="text-xs text-gray-400">즉시 구매 불가</p>
      </div>
      <div v-if="!this.likeStatus" >
      <v-icon  style="font-size: 20px;" @click="goLike()"> mdi-heart-outline </v-icon> <span class="text-xs">{{likeTotal}}</span>
      </div>
      <div v-else>
      <v-icon style="font-size: 20px;" @click="goDislike()"> mdi-heart </v-icon> <span class="text-xs">{{likeTotal}}</span>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import itemPic5 from "@/assets/img/product-lego5.jpg";

export default {
  data(){
    return{
      imageUrl : this.$store.getters.ServerUrl + '/getImage?imageName=',
      likeStatus:false,
      likeTotal:'',
      user_key:JSON.parse(localStorage.getItem('userKey')),
    }
  },
  props: {
    PRODUCT_KEY: {
      default: "0",
    },
    PRODUCT_PIC: {
      type: String,
      default: itemPic5,
    },
    PRODUCT_BRAND: {
      type: String,
      default: "LEGO",
    },
    PRODUCT_NAME: {
      type: String,
      default: "Standard lego",
    },
    SELL_PRICE: {
      default: "350,897",
    },
    PRODUCT_CATE: {
      default: "3",
    },
  },
  created(){
    this.countLike();
    this.countLikeTotal();
  },
  updated() {
    this.countLike();
    this.countLikeTotal();
  },
  methods:{
    goView(){
     
      //console.log("상세보기");
      //console.log(this.PRODUCT_KEY);
      //console.log(PRODUCT_KEY);
      this.$router.push({path:'./shopview',
      name:'Shopview',
      params:{
        PRODUCT_KEY:this.PRODUCT_KEY}
        });
    },
    goLike(){
      var vm = this;
        if(this.user_key == null )
        { 
          alert("로그인 후 이용해 주세요");
          this.$router.push({path:'/auth'});
        }
        else
        {  
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/goLike',
        {product_key: this.PRODUCT_KEY, user_key:this.user_key})
            .then(function(){
              vm.likeStatus= !vm.likeStatus;
            })
            .catch(function(err){
              console.log(err);
            });
        }
    },
    goDislike(){
       var vm = this;
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/goDislike',
        {product_key: this.PRODUCT_KEY, user_key:this.user_key})
            .then(function(){
              vm.likeStatus = !vm.likeStatus;
            })
            .catch(function(err){
              console.log(err);
            });
    },
    countLike(){
       var vm = this;
       this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/countLike',
        {product_key: this.PRODUCT_KEY, user_key:this.user_key})
            .then(function(res){
              vm.likeStatus = res.data>0 ? true: false;
            })
            .catch(function(err){
              console.log(err);
            });
    },
    countLikeTotal(){
       var vm = this;
        this.$axios.post('http://localhost:8080/shop/shopview/'+ this.PRODUCT_KEY + '/countLikeTotal',
        {product_key: this.PRODUCT_KEY})
            .then(function(res){
              vm.likeTotal = res.data;
            })
            .catch(function(err){
              console.log(err);
            });
    }
  }
};
</script>
